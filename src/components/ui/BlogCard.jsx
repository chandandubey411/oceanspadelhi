import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, Clock, Tag, ArrowRight } from 'lucide-react';

export default function BlogCard({ post, index = 0, featured = false }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-luxury
                  transition-all duration-500 hover:-translate-y-2 ${featured ? 'md:flex' : ''}`}
    >
      {/* Image */}
      <div className={`relative overflow-hidden ${featured ? 'md:w-1/2 h-64 md:h-auto' : 'h-52'}`}>
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 to-transparent" />
        <span className="absolute top-4 left-4 tag-pill">{post.category}</span>
        {post.featured && (
          <span className="absolute top-4 right-4 text-xs px-2 py-1 bg-gold-gradient text-charcoal font-bold rounded-full">
            Featured
          </span>
        )}
      </div>

      {/* Content */}
      <div className={`p-6 flex flex-col justify-between ${featured ? 'md:w-1/2' : ''}`}>
        <div>
          {/* Meta */}
          <div className="flex flex-wrap gap-3 text-xs text-charcoal/50 mb-3">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" />
              {post.date}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" />
              {post.readTime}
            </span>
          </div>

          <h3 className={`font-serif font-bold text-charcoal mb-3 group-hover:text-ocean-600 transition-colors leading-tight ${
            featured ? 'text-2xl' : 'text-lg'
          }`}>
            {post.title}
          </h3>
          <p className="text-sm text-charcoal/60 leading-relaxed mb-4 line-clamp-2">
            {post.excerpt}
          </p>
        </div>

        {/* Author + CTA */}
        <div className="flex items-center justify-between pt-4 border-t border-sand-100">
          <div>
            <p className="text-xs font-semibold text-charcoal">{post.author}</p>
            <p className="text-xs text-charcoal/40">{post.authorRole}</p>
          </div>
          <Link
            to={`/blog/${post.slug}`}
            className="flex items-center gap-1 text-sm font-semibold text-ocean-600
                       hover:text-ocean-700 group-hover:gap-2 transition-all duration-300"
          >
            Read More
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
