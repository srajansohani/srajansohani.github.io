import React from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

const posts = import.meta.glob('../blogs/*.md', { query: '?raw', import: 'default' });

export default function BlogPost() {
  const { slug } = useParams();
  const [content, setContent] = React.useState('');
  const [meta, setMeta] = React.useState({});

  React.useEffect(() => {
    const file = Object.keys(posts).find(
      path => path.endsWith(`${slug}.md`)
    );
    if (file) {
      posts[file]().then(raw => {
        // Extract frontmatter
        const match = raw.match(/^---([\s\S]*?)---/);
        let meta = {};
        let body = raw;
        if (match) {
          match[1].split('\n').forEach(line => {
            const [key, ...rest] = line.split(':');
            if (key && rest.length) meta[key.trim()] = rest.join(':').trim().replace(/^"|"$/g, '');
          });
          body = raw.replace(/^---([\s\S]*?)---/, '');
        }
        setMeta(meta);
        setContent(body);
      });
    }
  }, [slug]);

  if (!content) return <div className="min-h-screen flex items-center justify-center text-gray-700">Loading...</div>;

  return (
    <section className="py-16 md:py-20 bg-white min-h-screen">
      <div className="container mx-auto px-4 max-w-3xl lg:max-w-4xl">
        <Link to="/blog" className="text-blue-600 hover:underline mb-6 inline-block font-semibold text-base">← Back to Blog</Link>
        <h1 className="text-3xl md:text-4xl font-bold mb-3 text-gray-800 leading-tight">{meta.title}</h1>
        <div className="flex items-center text-sm text-gray-500 mb-8 space-x-3">
          {meta.date && <span className="flex items-center"><i className="far fa-calendar-alt mr-1"></i> {meta.date}</span>}
          {meta.comments !== undefined && <span className="flex items-center"><i className="far fa-comment-dots mr-1"></i> {meta.comments} Comments</span>}
        </div>
        <div className="prose max-w-none prose-lg leading-relaxed text-gray-700 prose-headings:font-bold prose-h1:text-3xl prose-h2:text-2xl prose-h3:text-xl prose-p:text-base prose-ul:text-base prose-li:text-base prose-a:text-blue-600 hover:prose-a:underline">
           <ReactMarkdown>{content}</ReactMarkdown>
        </div>
        {/* Optional: Add a section for 'You May Also Like' blog posts if you want */}
         {/* <div className="mt-12 pt-8 border-t border-gray-200">
           <h3 className="text-2xl font-bold mb-6 text-gray-800">You May Also Like...</h3>
           {/* Add related blog post previews here */}
         {/* </div> */}
      </div>
    </section>
  );
}
