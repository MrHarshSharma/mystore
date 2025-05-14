import styles from '../page.module.css';
import Link from 'next/link';


const Header = () => {
  return (
    <nav className={styles.topNavbar}>
        <div className={styles.mobileNav}>
          <div className={styles.hamburger}>
            <span>☰</span>
          </div>
          
          <div className={styles.mobileLogo}>
            {/* <Link href="/">
              <Image src="/logo.svg" alt="Sézane" width={120} height={40} />
            </Link> */}
          </div>
          
          <div className={styles.mobileCart}>
            <Link href="/cart">
              <span className={styles.icon}>🛒</span>
              <span className={styles.cartCount}>0</span>
            </Link>
          </div>
        </div>
        
        <div className={styles.logo}>
          {/* <Link href="/">
            <Image src="/logo.svg" alt="Sézane" width={120} height={40} />
          </Link> */}
        </div>
        
        <div className={styles.mainNav}>
          <Link href="/shop">SHOP</Link>
          <Link href="/new-in">NEW IN</Link>
          <Link href="/shirts">SHIRTS</Link>
          <Link href="/essentials">ESSENTIALS</Link>
          <Link href="/accessories">ACCESSORIES</Link>
          <Link href="/last-chance">LAST CHANCE</Link>
          <Link href="/about">ABOUT</Link>
          <Link href="/faq">FAQ</Link>
          <Link href="/journal">JOURNAL</Link>
        </div>
        
        <div className={styles.navIcons}>
          <Link href="/search">
            <span className={styles.icon}>🔍</span>
          </Link>
          <Link href="/cart">
            <span className={styles.icon}>🛒</span>
            <span className={styles.cartCount}>0</span>
          </Link>
          <Link href="/login">LOG IN</Link>
          <Link href="/language">US (US$) / EN</Link>
        </div>
      </nav>
  );
};

export default Header;