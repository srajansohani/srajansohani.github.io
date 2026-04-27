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

  if (!content) return <div className="min-h-[70vh] flex items-center justify-center text-gray-500 font-medium">Loading Post...</div>;

  return (
    <section className="py-20 bg-white min-h-screen">
      <div className="container mx-auto px-4 max-w-3xl">
        <Link to="/blog" className="text-[#0ea5e9] hover:text-[#d4af37] transition-colors mb-8 inline-flex items-center font-bold text-sm uppercase tracking-widest">
          ← Back to Articles
        </Link>
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-gray-900 leading-tight tracking-tight">{meta.title}</h1>
        <div className="flex flex-wrap items-center text-sm font-semibold text-gray-400 mb-10 gap-x-6 gap-y-2 uppercase tracking-wide">
          {meta.date && <span className="flex items-center text-[#d4af37]">{meta.date}</span>}
          {meta.readTime && <span className="flex items-center">{meta.readTime}</span>}
        </div>
        
        <div className="markdown-content">
           <ReactMarkdown>{content}</ReactMarkdown>
        </div>
      </div>
    </section>
  );
}
