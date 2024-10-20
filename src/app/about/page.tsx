import styles from "./page.module.css"

export default function about() {
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
        <h1>Welcome to The about page</h1>
        
      </section>

      <footer className={styles.footer}>
        <p> All rights reserved.</p>
      </footer>
      
    
     
    </>
  );
}