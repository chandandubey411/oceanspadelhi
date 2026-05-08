import { useState } from 'react';
import PageBanner from '../components/common/PageBanner';
import BlogCard from '../components/ui/BlogCard';
import { blogPosts } from '../data/blog';
import spaInterior from '../assets/images/spa_interior.png';

const categories = ['All', ...new Set(blogPosts.map(p => p.category))];

export default function Blog() {
  const [active, setActive] = useState('All');
  const filtered = active === 'All' ? blogPosts : blogPosts.filter(p => p.category === active);
  const featured = blogPosts.filter(p => p.featured);
  const rest = filtered.filter(p => !p.featured || active !== 'All');

  return (
    <>
      <PageBanner
        title="Wellness Journal"
        subtitle="Expert insights, tips, and stories from the Ocean Spa team"
        breadcrumbs={[{ name: 'Blog' }]}
        image={spaInterior}
      />

      <section className="section-pad bg-cream">
        <div className="container-pad">
          {/* Featured posts */}
          {active === 'All' && featured.length > 0 && (
            <div className="mb-14">
              <h2 className="font-serif text-2xl font-bold text-charcoal mb-6">Featured Articles</h2>
              <div className="flex flex-col gap-6">
                {featured.map((post, i) => (
                  <BlogCard key={post.id} post={post} index={i} featured />
                ))}
              </div>
            </div>
          )}

          {/* Filters */}
          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  active === cat
                    ? 'bg-ocean-gradient text-white shadow-ocean'
                    : 'bg-white text-charcoal/60 hover:text-ocean-600 border border-sand-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* All posts grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {(active === 'All' ? blogPosts : filtered).map((post, i) => (
              <BlogCard key={post.id} post={post} index={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
