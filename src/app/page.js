import Image from "next/image";
import Link from 'next/link';
import styles from './page.module.css';
import Header from "./components/Header";
import InfoSection from "./components/InfoSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className={styles.main}>
      {/* Top Navigation Bar */}
      <Header />

      {/* Product Categories Grid */}
      <div className={styles.categoryGrid}>
        {/* Row 1 */}
        <div className={styles.categoryItem}>
          <div className={styles.categoryImage}>
            <Image 
              src="https://media.sezane.com/image/upload/c_crop,fl_progressive:semi,h_1,q_auto:best,w_0.93240093240093,x_0.033799533799534,y_0/c_scale,w_468/jnvtwu56xpqdluhtzqoy.jpg" 
              alt="New In" 
              fill 
            />
          </div>
          <h2 className={styles.categoryTitle}>NEW IN</h2>
        </div>

        <div className={styles.categoryItem}>
          <div className={styles.categoryImage}>
            <Image 
              src="https://media.sezane.com/image/upload/c_crop,fl_progressive:semi,h_1,q_auto:best,w_0.93240093240093,x_0.033799533799534,y_0/c_scale,w_468/ajc05lsnxnovolw4dd8e.jpg" 
              alt="Bags & Baskets" 
              fill 
            />
          </div>
          <h2 className={styles.categoryTitle}>BAGS & BASKETS BAGS</h2>
        </div>

        <div className={styles.categoryItem}>
          <div className={styles.categoryImage}>
            <Image 
              src="https://media.sezane.com/image/upload/c_fill,fl_progressive:semi,q_auto:best,w_468/ob1q707j5kswlffwgeil.jpg" 
              alt="Dresses" 
              fill 
            />
          </div>
          <h2 className={styles.categoryTitle}>DRESSES</h2>
        </div>

        <div className={styles.categoryItem}>
          <div className={styles.categoryImage}>
            <Image 
              src="https://media.sezane.com/image/upload/c_crop,fl_progressive:semi,h_0.71,q_auto:best,w_0.66,x_0.07,y_0.02/c_scale,w_468/yodzmtijlbfcps7l1tgc.jpg" 
              alt="Shirts & Blouses" 
              fill 
            />
          </div>
          <h2 className={styles.categoryTitle}>SHIRTS & BLOUSES</h2>
        </div>

        {/* Row 2 */}
        <div className={styles.categoryItem}>
          <div className={styles.categoryImage}>
            <Image 
              src="https://media.sezane.com/image/upload/c_crop,fl_progressive:semi,h_0.91,q_auto:best,w_0.85,x_0.14,y_0.07/c_scale,w_468/qpx8dqawa1pimw2evvut.jpg" 
              alt="Jewelry" 
              fill 
            />
          </div>
          <h2 className={styles.categoryTitle}>JEWELRY</h2>
        </div>

        <div className={styles.categoryItem}>
          <div className={styles.categoryImage}>
            <Image 
              src="https://media.sezane.com/image/upload/c_crop,fl_progressive:semi,h_1,q_auto:best,w_0.93240093240093,x_0.033799533799534,y_0/c_scale,w_468/hafnugjqf4k9nqindpnj.jpg" 
              alt="Shorts & Skirts" 
              fill 
            />
          </div>
          <h2 className={styles.categoryTitle}>SHORTS & SKIRTS</h2>
        </div>

        <div className={styles.categoryItem}>
          <div className={styles.categoryImage}>
            <Image 
              src="https://media.sezane.com/image/upload/c_fill,fl_progressive:semi,q_auto:best,w_468/ix9mrmfxqruekbis7lxq.jpg" 
              alt="Shoes" 
              fill 
            />
          </div>
          <h2 className={styles.categoryTitle}>SHOES</h2>
        </div>

        <div className={styles.categoryItem}>
          <div className={styles.categoryImage}>
            <Image 
              src="https://media.sezane.com/image/upload/c_crop,fl_progressive:semi,h_1,q_auto:best,w_0.93240093240093,x_0.033799533799534,y_0/c_scale,w_468/cgjmjf1l6wkh5qhwhxh6.jpg" 
              alt="Jackets" 
              fill 
            />
          </div>
          <h2 className={styles.categoryTitle}>JACKETS</h2>
        </div>
      </div>

      {/* Shipping Info Section */}
      <InfoSection />

      {/* Footer Section */}
      <Footer />
    </main>
  );
}
