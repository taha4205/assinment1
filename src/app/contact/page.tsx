import styles from "./page.module.css";

export default function contact() {
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
        <h1>Welcome to the contact page</h1>
        <br /><br /><br />
        <h3>+923333333333</h3>
        <h3>second no: 92333333333</h3>
        <h3>Email: myname@example.com</h3>
       
      </section>

      <footer className={styles.footer}>
        <p>&copy; All rights reserved.</p>
      </footer>
      
    
     
    </>
  );
}