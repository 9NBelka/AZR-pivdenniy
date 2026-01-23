import styles from './DiagnosticsSection.module.scss';
import { CiSearch } from 'react-icons/ci';
import { LuGauge, LuWrench } from 'react-icons/lu';
import { RiStethoscopeLine, RiTestTubeLine } from 'react-icons/ri';
import { MdOutlineCameraAlt } from 'react-icons/md';
import { IoEyeOutline } from 'react-icons/io5';
import { BsBoxes, BsBullseye } from 'react-icons/bs';

const diagnostics = [
  {
    icon: <RiStethoscopeLine className={styles.cardIcon} />,
    title: 'Діагностика двигуна',
    description: 'СТО "АЗР Південний" виконує всі види діагностики бензинових і дизельних двигунів',
    price: 'від 500 грн',
    idCard: 'computer-diagnostics',
  },
  {
    icon: <LuWrench className={styles.cardIcon} />,
    title: 'Діагностика підвіски',
    description:
      'СТО "АЗР Південний" виконує всі види діагностики ходової частини автомобілів в Харкові',
    price: 'від 400 грн',
    idCard: 'engine-diagnostics',
  },
  {
    icon: <BsBoxes className={styles.cardIcon} />,
    title: 'Діагностика перед покупкою',
    description: 'СТО "АЗР Південний" виконує діагностику всіх систем автомобілів.',
    price: 'від 500 грн',
    idCard: 'transmission-diagnostics',
  },
  {
    icon: <BsBullseye className={styles.cardIcon} />,
    title: 'Комп`ютерна Діагностика',
    description: 'СТО "АЗР Південний" виконує комп`ютерну діагностику всіх систем автомобілів',
    price: 'від 500 грн',
    idCard: 'electronics-diagnostics',
  },
];

const DiagnosticsSection = () => {
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
            <div key={index} className={styles.card} id={diagnostic.idCard}>
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
    </section>
  );
};

export default DiagnosticsSection;
