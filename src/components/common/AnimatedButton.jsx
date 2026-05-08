import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function AnimatedButton({
  to,
  href,
  onClick,
  children,
  variant = 'primary',
  className = '',
  ...props
}) {
  const variants = {
    primary: 'btn-primary',
    gold: 'btn-gold',
    outline: 'btn-outline',
    'outline-ocean': 'btn-outline-ocean',
  };

  const classes = `${variants[variant] || variants.primary} ${className}`;

  if (to) {
    return (
      <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
        <Link to={to} className={classes} {...props}>
          {children}
        </Link>
      </motion.div>
    );
  }

  if (href) {
    return (
      <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
        <a href={href} className={classes} {...props}>
          {children}
        </a>
      </motion.div>
    );
  }

  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      onClick={onClick}
      className={classes}
      {...props}
    >
      {children}
    </motion.button>
  );
}
