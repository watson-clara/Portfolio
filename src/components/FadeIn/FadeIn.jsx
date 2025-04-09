import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import styles from './FadeIn.module.css';

const FadeIn = ({ children, delay = 0 }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, delay }}
      className={styles.fadeIn}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn; 