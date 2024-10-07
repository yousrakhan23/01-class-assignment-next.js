import React from 'react';
import styles from './navbar.module.css';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <nav>
        <ul>
          <li><Link href="/" className={styles.link}>Home</Link></li>
          <li><Link href="/about" className={styles.link}>About</Link></li>
          <li><Link href="/contact" className={styles.link}>Contact</Link></li>
          <li><Link href="/service" className={styles.link}>Services</Link></li>
          

        </ul>
      </nav>
      </div>

      
    
  );
}

export default Navbar;