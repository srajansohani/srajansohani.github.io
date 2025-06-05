import React from 'react';
import { Link } from 'react-router-dom';

// Vite's import.meta.glob for markdown files
export default function BlogList() {
  const [posts, setPosts] = React.useState([]);

  React.useEffect(() => {
    // Dynamically import all markdown files in src/blogs as raw text using the new query syntax
    const files = import.meta.glob('../blogs/*.md', { query: '?raw', import: 'default' });
    const loadPosts = async () => {
      const loadedPosts = await Promise.all(
        Object.entries(files).map(async ([path, resolver]) => {
          const rawContent = await resolver();
          // Extract frontmatter (YAML) manually from raw content
          const match = rawContent.match(/^---([\s\S]*?)---/);
          let meta = {};
          let body = rawContent;
          if (match) {
            match[1].split('\n').forEach(line => {
              const [key, ...rest] = line.split(':');
              if (key && rest.length) meta[key.trim()] = rest.join(':').trim().replace(/^"|"$/g, '');
            });
            body = rawContent.replace(/^---([\s\S]*?)---/, '');
          }

          // Basic check for required frontmatter for the list
          if (!meta.title || !meta.date) {
              console.warn(`Skipping ${path}: Missing title or date in frontmatter.`);
              return null; // Skip this post if crucial data is missing
          }

          return {
            slug: path.split('/').pop().replace('.md', ''),
            ...meta,
            content: body, // Store the body content if needed later, though not directly used in the list view
          };
        })
      );
      // Filter out any null entries from skipped posts and sort by date descending
      const validPosts = loadedPosts.filter(post => post !== null);
      validPosts.sort((a, b) => (b.date || '').localeCompare(a.date || ''));
      setPosts(validPosts);
    };
    loadPosts();
  }, []);

  // Only render the section if there are posts
  if (posts.length === 0) {
      return null; // Or a loading/no posts message
  }

  return (
    <section id="blog" className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-gray-800">Latest Blog Posts</h2>
        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          {posts.map(post => (
            <div key={post.slug} className="bg-gray-50 rounded-lg shadow-sm p-6 border border-gray-200 hover:shadow-md transform hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-blue-700 leading-tight">
                  <Link to={`/blog/${post.slug}`} className="hover:underline">{post.title}</Link>
                </h3>
                <div className="flex items-center text-sm text-gray-500 mb-4 space-x-3">
                  {post.date && <span className="flex items-center"><i className="far fa-calendar-alt mr-1"></i> {post.date}</span>}
                  {post.comments !== undefined && <span className="flex items-center"><i className="far fa-comment-dots mr-1"></i> {post.comments} Comments</span>}
                </div>
                <p className="text-gray-700 mb-4 text-base">{post.description}</p>
              </div>
              <Link to={`/blog/${post.slug}`} className="text-blue-600 hover:underline font-semibold mt-auto inline-block text-base">Read more →</Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
