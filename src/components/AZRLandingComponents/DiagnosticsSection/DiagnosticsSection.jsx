import { useState } from 'react';
import styles from './DiagnosticsSection.module.scss';
import { FaSearch, FaCar } from 'react-icons/fa';

import { MdOutlineMonitorHeart, MdOutlineSpeed } from 'react-icons/md';
import { FiPhoneCall } from 'react-icons/fi';
import { BsX } from 'react-icons/bs';

const diagnostics = [
  {
    icon: <MdOutlineSpeed className={styles.cardIcon} />,
    title: 'Діагностика двигуна',
    description: 'СТО "АЗР Південний" виконує всі види діагностики бензинових і дизельних двигунів',
    price: 'від 500 грн',
    idCard: 'engine-diagnostics',
    modal: {
      image: './images/engine-diagnostics.jpg',
      bigDescription:
        'Діагностика двигуна на СТО АЗР Південний дозволяє точно визначити причину нерівної роботи, втрати потужності, підвищеної витрати палива чи масла, сторонніх шумів або підтікань рідин. Ми проводимо комплексну перевірку бензинових і дизельних двигунів: вимірюємо компресію, перевіряємо систему запалювання, паливну систему, тиск масла та наддуву, використовуючи сучасне діагностичне обладнання. Це дає повне розуміння стану двигуна - як при експлуатації, так і перед купівлею авто - та дозволяє запропонувати оптимальне рішення для надійної і довговічної роботи вашого автомобіля.',
    },
  },
  {
    icon: <FaSearch className={styles.cardIcon} />,
    title: 'Діагностика підвіски',
    description:
      'СТО "АЗР Південний" виконує всі види діагностики ходової частини автомобілів в Харкові',
    price: 'від 500 грн',
    idCard: 'suspension-diagnostics',
    modal: {
      image: './images/suspension-diagnostics.jpg',
      bigDescription:
        'Діагностика підвіски на СТО АЗР Південний - це своєчасне виявлення зносу та несправностей, які впливають на безпеку й керованість автомобіля. Якщо з’явилися сторонні шуми, вібрації, розгойдування кузова, збільшився гальмівний шлях або авто стало нестабільним на швидкості - варто провести перевірку. Наші фахівці точно визначать проблемні елементи підвіски, рульового управління чи гальмівної системи та запропонують оптимальне рішення. Використання професійного інструменту й наявність власного складу запчастин дозволяють виконати ремонт швидко, якісно та без зайвих витрат.',
    },
  },
  {
    icon: <FaCar className={styles.cardIcon} />,
    title: 'Діагностика перед покупкою',
    description: 'СТО "АЗР Південний" виконує діагностику всіх систем автомобілів.',
    price: 'від 2000 грн',
    idCard: 'pre-purchase-diagnostics',
    modal: {
      image: './images/pre-purchase-diagnostics.jpg',
      bigDescription:
        'Діагностика перед покупкою на СТО АЗР Південний допоможе вам об’єктивно оцінити технічний стан автомобіля та уникнути дорогих помилок. Ми проводимо комплексну комп’ютерну перевірку всіх систем, огляд двигуна, КПП, кермового управління, гальм, кліматичної системи та безпеки, а також перевіряємо авто на підтікання та механічні пошкодження. За потреби виконуємо додаткові вимірювання: компресії, тиску масла й палива,... У результаті ви отримуєте повну картину стану автомобіля, аргументи для торгу або впевненість у правильному виборі.',
    },
  },
  {
    icon: <MdOutlineMonitorHeart className={styles.cardIcon} />,
    title: 'Комп`ютерна діагностика',
    description: 'СТО "АЗР Південний" виконує комп`ютерну діагностику всіх систем автомобілів',
    price: 'від 600 грн',
    idCard: 'computer-diagnostics',
    modal: {
      image: './images/computer-diagnostics.jpg',
      bigDescription:
        'Комп’ютерна діагностика на СТО АЗР Південний дозволяє швидко та точно визначити стан електронних систем вашого автомобіля. Ми зчитуємо й розшифровуємо коди несправностей усіх блоків керування, виконуємо їх скидання, кодування та адаптацію, а також аналізуємо поточні параметри роботи систем у порівнянні із заводськими нормами. Своєчасна діагностика допомагає виявити проблеми на ранній стадії, уникнути серйозних поломок і зменшити витрати на ремонт.',
    },
  },
];

const DiagnosticsSection = () => {
  const [selectedService, setSelectedService] = useState(null);

  const openModal = (service) => {
    setSelectedService(service);
  };

  const closeModal = () => {
    setSelectedService(null);
  };

  return (
    <section id='diagnostics' className={styles.servicesSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Діагностика перед покупкою авто</h2>
          <p className={styles.description}>
            Професійна діагностика допоможе виявити приховані дефекти та уникнути дорогих ремонтів у
            майбутньому
          </p>
        </div>

        <div className={styles.allCards}>
          {diagnostics.map((diagnostic, index) => (
            <div
              key={index}
              className={styles.card}
              id={diagnostic.idCard}
              onClick={() => openModal(diagnostic)}>
              <div className={styles.cardHeader}>
                <div className={styles.iconContainer}>{diagnostic.icon}</div>
                <div className={styles.cardTitle}>{diagnostic.title}</div>
              </div>
              <div className={styles.cardContent}>
                <div className={styles.cardDescription}>{diagnostic.description}</div>
                <div className={styles.price}>{diagnostic.price}</div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.footer}>
          <p className={styles.footerText}>
            Великий досвід наших фахівців і наявність всього діагностичного обладнання дозволяють
            нам точно і в найкоротші терміни визначити стан всіх систем автомобіля і виявляти навіть
            приховані несправності. Комплексна діагностика - найкращий спосіб переконатися у
            справності автомобіля перед покупкою
          </p>

          <button
            className={styles.ctaButton}
            onClick={() =>
              document.getElementById('contacts')?.scrollIntoView({ behavior: 'smooth' })
            }>
            Замовити діагностику →
          </button>
        </div>
      </div>

      {selectedService && (
        <div className={styles.modalOverlay} onClick={closeModal}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <BsX className={styles.closeIcon} onClick={closeModal} />

            <div className={styles.modalBlockFlex}>
              <h3 className={styles.modalTitle}>{selectedService.title}</h3>

              {selectedService.modal.image && (
                <img
                  src={selectedService.modal.image}
                  alt={selectedService.title}
                  className={styles.modalImage}
                />
              )}

              <p className={styles.modalDescription}>{selectedService.modal.bigDescription}</p>

              <div className={styles.callButtonBlock}>
                <a href='tel:+380671155120' className={styles.callButton}>
                  <FiPhoneCall className={styles.iconPhone} /> Подзвонити
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default DiagnosticsSection;
