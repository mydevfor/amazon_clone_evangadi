import styles from './pageNotFound.module.css'

function PageNotFound() {
  return (
    <div className={styles.errorHolder}>
      <h2>404 - Page Not Found</h2>
      <p>Sorry, the page you are looking for does not exist.</p>
    </div>
  );
}

export default PageNotFound;
