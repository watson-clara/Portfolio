import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.copyright}>
        © {new Date().getFullYear()} Clara Watson
      </div>
    </footer>
  );
};

export default Footer; 