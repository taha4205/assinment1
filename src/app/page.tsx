import styles from "./page.module.css";
import images from "./images/programmer-working-concept-for-web-banner-man-work-with-code-and-programming-at-computer-creates-software-modern-person-scene-illustration-in-flat-cartoon-design-with-people-characters-vector.jpg";

export default function Home() {
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
        <div>
          <h1>Welcome to My Portfolio</h1>
          <p>Let me help you build a digital presence with my coding skills <br />
            Take your business to another level</p>
          <button><a href="/services">Get Started</a></button>
        </div>
        <img 
          src={images.src}  
          alt="Programming concept" 
          className={styles.imageStyle} 
          style={{ height: '360px', width: '40%' }} 
        />
      </section>
      <hr />

      <section className={styles.aboutUs}>
        <h2>About Us</h2>
        <p>i am an experienced developer  with a passion <br /> for creating digital solutions that drive business growth <br />its not only about the website but the visitors experience</p>
        <button><a href="/about">Learn More</a></button>
      </section>
<hr />
      <section className={styles.services}>
        <h2>Our Services</h2>
        <p>We provide a vast veriety of services which include <br /> web design web development and app development and i am <br /> currently working on sharpening my skills and provide more for you</p>
        <button><a href="/services">View Services</a></button>
      </section>
<hr />
      <section className={styles.contact}>
        <h2>Get in Touch</h2>
        <p>after clicking on the link below you will be taken to <br />a page which contain the all the contact details that you'll need <br /></p>
        <button><a href="/contact">Contact Us</a></button>
      </section>
<hr />
      <footer className={styles.footer}>
        <p>&copy; All rights reserved.</p>
      </footer>
    </>
  );
}