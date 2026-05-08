import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowLeft, Tag } from 'lucide-react';
import { blogPosts } from '../data/blog';
import CTASection from '../components/home/CTASection';
import BlogCard from '../components/ui/BlogCard';

export default function BlogDetails() {
  const { slug } = useParams();
  const post = blogPosts.find(p => p.slug === slug);
  const related = blogPosts.filter(p => p.slug !== slug).slice(0, 3);

  if (!post) return <Navigate to="/blog" replace />;

  const paragraphs = post.content.split('\n\n').filter(Boolean);

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[55vh] flex items-end pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/50 to-charcoal/30" />
        </div>
        <div className="container-pad relative z-10 pt-32">
          <Link to="/blog" className="inline-flex items-center gap-2 text-white/60 hover:text-white mb-6 text-sm transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Blog
          </Link>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="tag-pill mb-4 inline-block">{post.category}</span>
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 max-w-3xl leading-tight">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-5 text-white/60 text-sm">
              <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" />{post.date}</span>
              <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" />{post.readTime}</span>
              <span className="text-gold-400 font-medium">{post.author}</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article body */}
      <section className="section-pad bg-cream">
        <div className="container-pad">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <article className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="prose prose-lg max-w-none"
              >
                <p className="text-lg text-charcoal/70 leading-relaxed font-medium mb-6 pb-6 border-b border-sand-200">
                  {post.excerpt}
                </p>
                {paragraphs.map((para, i) => {
                  if (para.startsWith('**') && para.endsWith('**')) {
                    return <h3 key={i} className="font-serif text-xl font-bold text-charcoal mt-8 mb-3">{para.replace(/\*\*/g, '')}</h3>;
                  }
                  if (para.startsWith('**')) {
                    const parts = para.split('**');
                    return (
                      <p key={i} className="text-charcoal/70 leading-relaxed mb-4">
                        {parts.map((part, j) => j % 2 === 1 ? <strong key={j} className="text-charcoal font-semibold">{part}</strong> : part)}
                      </p>
                    );
                  }
                  return <p key={i} className="text-charcoal/70 leading-relaxed mb-4">{para}</p>;
                })}
              </motion.div>

              {/* Tags */}
              <div className="mt-10 flex flex-wrap gap-2 pt-6 border-t border-sand-200">
                <Tag className="w-4 h-4 text-charcoal/40" />
                {post.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 bg-ocean-50 text-ocean-700 text-xs rounded-full font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </article>

            {/* Sidebar */}
            <aside>
              <div className="bg-white rounded-2xl p-6 shadow-lg mb-6">
                <h3 className="font-serif text-lg font-bold text-charcoal mb-2">{post.author}</h3>
                <p className="text-ocean-600 text-sm mb-3">{post.authorRole}</p>
                <p className="text-charcoal/55 text-sm">An expert voice in Ocean Spa's wellness community, dedicated to sharing evidence-based wellness insights.</p>
              </div>
              <div className="bg-ocean-gradient rounded-2xl p-6 text-white">
                <h3 className="font-serif text-lg font-bold mb-2">Ready to Experience It?</h3>
                <p className="text-white/70 text-sm mb-4">Transform your reading into a real wellness experience. Book your treatment today.</p>
                <Link
                  to="/book-appointment"
                  className="block w-full py-3 bg-gold-gradient text-charcoal text-center font-bold rounded-xl text-sm hover:shadow-gold transition-all"
                >
                  Book Now
                </Link>
              </div>
            </aside>
          </div>

          {/* Related posts */}
          <div className="mt-16 pt-10 border-t border-sand-200">
            <h2 className="font-serif text-2xl font-bold text-charcoal mb-8">Related Articles</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {related.map((p, i) => <BlogCard key={p.id} post={p} index={i} />)}
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
