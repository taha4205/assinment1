import styles from "./page.module.css";

export default function services() {
  return (
    <>

       <header>
        <nav className={styles.navbar}>
          <span className={styles.logo}>Portfolio</span>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
            <li>
              <a href="/services">Services</a>
            </li>
          </ul>
        </nav>
      </header>

      <section className={styles.hero}>
        <h1>following services</h1>
        <br /><br /><br /><br /><br />
        <button><a href="/services/web_dev">Web Develoment</a></button>
        <button><a href="/services/appdev">App development</a></button>
      </section>
      

      <footer className={styles.footer}>
        <p>&copy; 2023 Your Name. All rights reserved.</p>
      </footer>
      
    
     
    </>
  );
}