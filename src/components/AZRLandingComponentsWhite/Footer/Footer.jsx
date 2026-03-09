import { FaMapMarkerAlt, FaPhone, FaClock, FaEnvelope } from 'react-icons/fa';
import styles from './Footer.module.scss';
import { useState } from 'react';
import { BsFacebook, BsInstagram, BsTelegram } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Footer = ({ onHeaderTextLinks }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.flex}>
          {/* Company Info */}
          <div className={styles.mainBlock}>
            <div className={styles.logo}>
              <img src='./images/AZRImgLogo.png' alt='logo-footer' />
            </div>
            <p className={styles.companyDescription}>
              Ваш надійний автосервіс у Харкові. Даємо гарантію на весь регламентний термін!
            </p>
            <div className={styles.socialLinks}>
              <a
                href='https://www.facebook.com/azr.yug/'
                className={styles.socialLink}
                target='_blank'>
                <BsFacebook className={styles.tiktokIcon} />
              </a>
              <a
                href='https://www.instagram.com/azr.yug/'
                className={styles.socialLink}
                target='_blank'>
                <BsInstagram className={styles.tiktokIcon} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className={styles.services}>
            <h3 className={styles.sectionTitle}>Навігація</h3>
            <ul className={styles.serviceList}>
              {onHeaderTextLinks.map((info, index) => (
                <li key={index}>
                  <a
                    className={styles.serviceLink}
                    onClick={() => scrollToSection(info.linkToPage)}>
                    {info.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className={styles.services}>
            <h3 className={styles.sectionTitle}>Контакти</h3>
            <div className={styles.contactList}>
              <div className={styles.contactItem}>
                <FaMapMarkerAlt className={styles.contactIcon} />
                <span>м. Харків, вул. Гвардійців-залізничників 15</span>
              </div>
              {/* <div className={styles.contactItem}>
                <FaPhone className={styles.contactIcon} />
                <a href='tel:+380733312299' className={styles.contactLink}>
                  +380 73 331 22 99
                </a>
              </div> */}
              <div className={styles.contactItem}>
                <FaPhone className={styles.contactIcon} />
                <a href='tel:+380671155120' className={styles.contactLink}>
                  +380 (67) 115-51-20
                </a>
              </div>
              <div className={styles.contactItem}>
                <FaEnvelope className={styles.contactIcon} />
                <a href='mailto:azr.15ug@gmail.com' className={styles.contactLink}>
                  azr.15ug@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Working Hours */}
          <div className={styles.services}>
            <h3 className={styles.sectionTitle}>Графік роботи</h3>
            <div className={styles.workingHours}>
              <div className={styles.contactItem}>
                <FaClock className={styles.contactIcon} />
                <div className={styles.contactItemTime}>
                  <p>Пн-Пт: 09:00 - 18:00</p>
                  <p>Сб: 09:00 - 14:00</p>
                  <p>Нд: вихідний</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={styles.bottomBar}>
          <p className={styles.copyright}>
            &copy; {currentYear} СТО "АЗР Південний" Харків. Всі права захищені.
          </p>
          <div className={styles.bottomLinks}>
            <Link to='/privacy-policy' className={styles.bottomLink}>
              Політика конфіденційності
            </Link>
            {/* <a href='#' className={styles.bottomLink}>
              Умови використання
            </a> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
