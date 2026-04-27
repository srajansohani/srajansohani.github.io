import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock } from 'lucide-react';

export default function BlogList() {
  const [posts, setPosts] = React.useState([]);

  React.useEffect(() => {
    // Dynamically import all markdown files in src/blogs as raw text
    const files = import.meta.glob('../blogs/*.md', { query: '?raw', import: 'default' });
    const loadPosts = async () => {
      const loadedPosts = await Promise.all(
        Object.entries(files).map(async ([path, resolver]) => {
          const rawContent = await resolver();
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

          if (!meta.title || !meta.date) {
              return null; 
          }

          return {
            slug: path.split('/').pop().replace('.md', ''),
            ...meta,
          };
        })
      );
      const validPosts = loadedPosts.filter(post => post !== null);
      validPosts.sort((a, b) => (b.date || '').localeCompare(a.date || ''));
      setPosts(validPosts);
    };
    loadPosts();
  }, []);

  if (posts.length === 0) {
      return null;
  }

  return (
    <section id="blog" className="py-20 bg-gray-50 relative">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900">Latest Writings</h2>
          <div className="w-20 h-1.5 bg-[#d4af37] mx-auto rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {posts.map(post => (
            <div key={post.slug} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col group relative overflow-hidden">
              {/* Highlight bar on hover */}
              <div className="absolute top-0 left-0 w-full h-1 bg-[#d4af37] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>

              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-[#d4af37] transition-colors leading-tight">
                  <Link to={`/blog/${post.slug}`} className="before:absolute before:inset-0">
                     {post.title}
                  </Link>
                </h3>
                
                <div className="flex items-center gap-4 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">
                  {post.date && <span className="flex items-center"><Calendar size={14} className="mr-1.5 text-[#d4af37]"/> {post.date}</span>}
                  {post.readTime && <span className="flex items-center"><Clock size={14} className="mr-1.5"/> {post.readTime}</span>}
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                  {post.excerpt || post.description || "Read more about this topic..."}
                </p>

                {post.tags && (
                  <div className="flex flex-wrap gap-2 mb-6">
                     {post.tags.split(',').map((tag, i) => (
                       <span key={i} className="px-2.5 py-1 bg-gray-50 text-gray-500 rounded font-medium text-xs border border-gray-100">
                         {tag.trim()}
                       </span>
                     ))}
                  </div>
                )}
              </div>

              <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
                <span className="text-[#d4af37] font-semibold text-sm group-hover:underline">Read Article →</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
