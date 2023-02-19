import styles from "./socialLinks.module.css";

const SocialLinks = () => {
  return (
    <div className={styles.socialLinks}>
      <a
        href="https://www.facebook.com/fastunitedkingdom/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-facebook-f"></i>
      </a>
      <a
        href="https://www.linkedin.com/company/foundation-for-angelman-syndrome-therapeutics-uk-fast-uk/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-linkedin-in"></i>
      </a>
      <a
        href="https://twitter.com/cureangelmanuk"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-twitter"></i>
      </a>
      <a
        href="https://www.instagram.com/fast.uk/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-instagram"></i>
      </a>

      <a
        href="https://www.youtube.com/@FAST_UK"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-youtube"></i>
      </a>

      <a
        href="mailto:info@cureangelman.org.uk"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fas fa-envelope"></i>
      </a>
    </div>
  );
};

export default SocialLinks;
