import Link from 'next/link';
import Image from 'next/image';
import styles from '../page.module.css';
import { 
  FaInstagram, 
  FaTwitter, 
  FaFacebook, 
  FaPinterest, 
  FaTiktok, 
  FaYoutube 
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerColumn}>
          <h3 className={styles.footerTitle}>NEED HELP?</h3>
          <ul className={styles.footerList}>
            <li><Link href="/faq">FAQ</Link></li>
            <li><Link href="/return">Want to make a return?</Link></li>
            <li><Link href="/track">Track my order</Link></li>
            <li><strong>Contact:</strong></li>
            <li>Email: hello@sezane.com</li>
            <li>WhatsApp</li>
            <li>Instagram : @sezane</li>
            <li><strong>Useful Information:</strong></li>
            <li><Link href="/account">My Account</Link></li>
            <li><Link href="/delivery">My Delivery</Link></li>
            <li><Link href="/returns">My Returns</Link></li>
          </ul>
        </div>

        <div className={styles.footerColumn}>
          <h3 className={styles.footerTitle}>ABOUT</h3>
          <ul className={styles.footerList}>
            <li><Link href="/about">A Word from Morgane</Link></li>
            <li><Link href="/commitments">Our commitments</Link></li>
            <li><Link href="/privacy">Privacy Policy</Link></li>
            <li><Link href="/terms">Terms & Conditions</Link></li>
            <li><Link href="/accessibility">Digital accessibility</Link></li>
            <li><Link href="/join">Join us</Link></li>
          </ul>
        </div>

        <div className={styles.footerColumn}>
          <h3 className={styles.footerTitle}>OUR LOCATIONS</h3>
          <ul className={styles.footerList}>
            <li><Link href="/locations">Our locations</Link></li>
            <li><Link href="/newyork">New York</Link></li>
            <li><Link href="/losangeles">Los Angeles</Link></li>
            <li><Link href="/sanfrancisco">San Francisco</Link></li>
            <li><Link href="/austin">Austin</Link></li>
            <li><Link href="/washingtondc">Washington DC</Link></li>
            <li><Link href="/sanjose">San Jose</Link></li>
            <li><Link href="/boston">Boston</Link></li>
            <li><Link href="/nashville">Nashville</Link></li>
          </ul>
        </div>

        <div className={styles.footerColumn}>
          <h3 className={styles.footerTitle}>SUBSCRIBE TO OUR NEWSLETTER</h3>
          <div className={styles.newsletterForm}>
            <input 
              type="email" 
              placeholder="Your e-mail address" 
              className={styles.emailInput} 
            />
            <button className={styles.submitButton}>OK</button>
          </div>
          <div className={styles.socialIcons}>
            <Link href="https://instagram.com/sezane" aria-label="Instagram">
              <FaInstagram className={styles.reactIcon} />
            </Link>
            <Link href="https://twitter.com/sezane" aria-label="Twitter">
              <FaTwitter className={styles.reactIcon} />
            </Link>
            <Link href="https://facebook.com/sezane" aria-label="Facebook">
              <FaFacebook className={styles.reactIcon} />
            </Link>
            <Link href="https://pinterest.com/sezane" aria-label="Pinterest">
              <FaPinterest className={styles.reactIcon} />
            </Link>
            <Link href="https://tiktok.com/@sezane" aria-label="TikTok">
              <FaTiktok className={styles.reactIcon} />
            </Link>
            <Link href="https://youtube.com/sezane" aria-label="YouTube">
              <FaYoutube className={styles.reactIcon} />
            </Link>
          </div>
          {/* <div className={styles.languageSelector}>
            <p>Change your delivery country?</p>
            <p>United States</p>
            <p>Change language:</p>
            <p>English</p>
          </div> */}
        </div>
      </div>

      <div className={styles.footerLogo}>
        {/* <Image src="/logo.svg" alt="Sézane" width={150} height={50} /> */}
        <p className={styles.certification}>Certified B-corp and Société à Mission</p>
        {/* <div className={styles.certificationLogos}>
          <Image src="/bcorp.png" alt="B Corp Certification" width={80} height={80} />
          <Image src="/mission.png" alt="Société à Mission" width={80} height={80} />
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;