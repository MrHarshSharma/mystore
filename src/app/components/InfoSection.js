import styles from '../page.module.css';
import Link from 'next/link';
const InfoSection = () => {
  return (
    <section className={styles.infoSection}>
    <div className={styles.infoContainer}>
      <div className={styles.infoColumn}>
        <h3 className={styles.infoTitle}>FREE DELIVERY</h3>
        <p className={styles.infoText}>
          Free ground shipping to the US on orders over $200 and on orders over $250 to Hong Kong.
        </p>
      </div>

      <div className={styles.infoColumn}>
        <h3 className={styles.infoTitle}>FREE RETURNS</h3>
        <p className={styles.infoText}>
          Free and seamless returns from the USA so you can shop the French way - <i>'sans stress'</i> (stress free)
        </p>
        <p className={styles.infoText}>
          For Hong Kong, returns will be subject to additional fees.
        </p>
      </div>

      <div className={styles.infoColumn}>
        <h3 className={styles.infoTitle}>SECURE PAYMENT</h3>
        <p className={styles.infoText}>
          Visa, Mastercard, Amex, Paypal, Maestro, Diners, Discover
        </p>
      </div>
    </div>
  </section>
  );
};

export default InfoSection;