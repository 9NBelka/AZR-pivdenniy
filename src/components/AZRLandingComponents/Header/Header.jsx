import { useState } from 'react';
// import { Menu, X, Phone } from 'lucide-react';
import styles from './Header.module.scss';
import { MdOutlinePhoneInTalk } from 'react-icons/md';
import { BsX } from 'react-icons/bs';

import { AiOutlineMenu } from 'react-icons/ai';
import { FiPhoneCall } from 'react-icons/fi';
import DiscountBlockSToTwo from '../DiscountBlockSToTwo/DiscountBlockSToTwo';

const Header = ({ onHeaderTextLinks }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const handlePhoneKeyDown = (e) => {
    if (e.key === 'Enter') {
      window.location.href = 'tel:+380661151120';
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.headerInner}>
          {/* Logo */}
          <div className={styles.logoContainer}>
            <a onClick={() => scrollToSection('hero')}>
              <img src='./images/AZRImgLogo.png'></img>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className={styles.desktopNav}>
            {onHeaderTextLinks.map((info, index) => (
              <a
                key={index}
                type='button'
                onClick={() => scrollToSection(info.linkToPage)}
                className={styles.navLink}>
                {info.title}
              </a>
            ))}
          </nav>

          {/* Contact Info & CTA */}
          <div className={styles.contactContainer}>
            <div className={styles.twoPhonesBlock}>
              <a className={styles.linkToPhone} href='tel:+380671155120' id='headerPhone'>
                <FiPhoneCall className={styles.iconPhone} /> +380 (67) 115-51-20
              </a>
            </div>

            <button
              onClick={() => scrollToSection('contacts')}
              className={styles.ctaButton}
              id='buttonSendToContact'>
              Записатися
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            type='button'
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={styles.mobileMenuButton}
            aria-label='Меню'>
            {isMenuOpen ? (
              <BsX className={styles.icon} />
            ) : (
              <AiOutlineMenu className={styles.icon} />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className={styles.mobileNav}>
            <nav className={styles.mobileNavList}>
              <button
                type='button'
                onClick={() => scrollToSection('hero')}
                className={styles.mobileNavLink}>
                Головна
              </button>
              <button
                type='button'
                onClick={() => scrollToSection('services')}
                className={styles.mobileNavLink}>
                Послуги
              </button>
              <button
                type='button'
                onClick={() => scrollToSection('diagnostics')}
                className={styles.mobileNavLink}>
                Діагностика
              </button>
              <button
                type='button'
                onClick={() => scrollToSection('feedbacks')}
                className={styles.mobileNavLink}>
                Відгуки
              </button>
              <button
                type='button'
                onClick={() => scrollToSection('contacts')}
                className={styles.mobileNavLink}>
                Запис
              </button>
              <button
                type='button'
                onClick={() => scrollToSection('map')}
                className={styles.mobileNavLink}>
                Контакти
              </button>
              <div className={styles.mobileCtaContainer}>
                <button
                  onClick={() => scrollToSection('contacts')}
                  className={styles.mobileCtaButton}>
                  Записатися
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
      <div onClick={() => scrollToSection('contacts')}>
        <DiscountBlockSToTwo right='right' />
      </div>
    </header>
  );
};

export default Header;
