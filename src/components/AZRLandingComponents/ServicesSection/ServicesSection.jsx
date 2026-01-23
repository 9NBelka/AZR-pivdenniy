import {
  FaWrench,
  FaCog,
  FaBullseye,
  FaStethoscope,
  FaDotCircle,
  FaCar,
  FaOilCan,
} from 'react-icons/fa';
import styles from './ServicesSection.module.scss';
import { GrAction, GrCycle, GrServices, GrValidate } from 'react-icons/gr';
import { BsDiagram3, BsDisc } from 'react-icons/bs';

const services = [
  {
    icon: <FaCog className={styles.cardIcon} />,
    title: 'Заміна ременя ГРМ',
    description: 'СТО "АЗР Південний" виконує заміну комплектів ременів ГРМ.',
    price: 'від 10000 грн',
    idCard: 'engine-repair',
  },
  {
    icon: <FaBullseye className={styles.cardIcon} />,
    title: 'Заміна ланцюга ГРМ',
    description: 'СТО "АЗР Південний" виконує заміну комплектів ланцюгів ГРМ.',
    price: 'від 14000 грн',
    idCard: 'transmission-repair',
  },
  {
    icon: <FaDotCircle className={styles.cardIcon} />,
    title: 'Регулювання розвалу-сходження',
    description:
      'Розвал-сходження – один із ключових аспектів догляду за автомобілем, який безпосередньо впливає на комфорт і безпеку',
    price: 'від 400 грн',
    idCard: 'suspension-repair',
  },
  {
    icon: <FaCar className={styles.cardIcon} />,
    title: 'Заміна амортизаторів',
    description:
      'Наші фахівці точно визначать і замінять вийшли з ладу амортизатори вашого автомобіля',
    price: 'від 900 грн',
    idCard: 'electrical-repair',
  },
  {
    icon: <GrAction className={styles.cardIcon} />,
    title: 'Ремонт електрики',
    description:
      'СТО "АЗР Південний" надає всі види послуг з технічного обслуговування, діагностики та ремонту електрообладнання автомобілів',
    price: 'від 1200 грн',
    idCard: 'brake-system-repair-and-maintenance',
  },
  {
    icon: <GrServices className={styles.cardIcon} />,
    title: 'Ремонт двигуна',
    description:
      'СТО "АЗР Південний" виконує роботи будь-якої складності по ремонту бензинових і дизельних двигунів.',
    price: 'від 800 грн',
    idCard: 'maintenance',
  },
  {
    icon: <FaWrench className={styles.cardIcon} />,
    title: 'Ремонт гальмівної системи',
    description:
      'Всі види послуг з технічного обслуговування, діагностики та ремонту гальмівної системи',
    price: 'від 100 грн',
    idCard: 'auto-parts',
  },
  {
    icon: <BsDiagram3 className={styles.cardIcon} />,
    title: 'Ремонт ходової',
    description:
      'Наші фахівці точно визначать і усунуть несправність в підвісці вашого автомобіля.',
    price: 'від 100 грн',
    idCard: 'auto-parts',
  },
  {
    icon: <GrValidate className={styles.cardIcon} />,
    title: 'Ремонт системи кондиціонування',
    description:
      'Проводимо діагностику, технічне обслуговування, ремонт і заправку систем кондиціонування легкових і комерційних автомобілів.',
    price: 'від 100 грн',
    idCard: 'auto-parts',
  },

  {
    icon: <FaOilCan className={styles.cardIcon} />,
    title: 'Ремонт паливних систем',
    description:
      'Ми надаємо всі види послуг з діагностики та ремонту паливних систем автомобілів в Харкові',
    price: 'від 100 грн',
    idCard: 'auto-parts',
  },

  {
    icon: <BsDisc className={styles.cardIcon} />,
    title: 'Ремонт рульового управління',
    description:
      'Всі види послуг з технічного обслуговування, діагностики та ремонту рульового управління.',
    price: 'від 100 грн',
    idCard: 'auto-parts',
  },

  {
    icon: <GrCycle className={styles.cardIcon} />,
    title: 'Ремонт інжектора',
    description:
      'Всі види послуг з технічного обслуговування, діагностики та ремонту систем уприскування палива',
    price: 'від 100 грн',
    idCard: 'auto-parts',
  },
];

const ServicesSection = () => {
  return (
    <section id='services' className={styles.servicesSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Наші послуги</h2>
          <p className={styles.description}>
            Професійне обслуговування автомобілів будь-якої марки з використанням сучасного
            обладнання та оригінальних запчастин
          </p>
        </div>

        <div className={styles.allCards}>
          {services.map((service, index) => (
            <div key={index} className={styles.card} id={service.idCard}>
              <div className={styles.cardHeader}>
                <div className={styles.iconContainer}>{service.icon}</div>
                <div className={styles.cardTitle}>{service.title}</div>
              </div>
              <div className={styles.cardContent}>
                <div className={styles.cardDescription}>{service.description}</div>
                <div className={styles.price}>{service.price}</div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.footer}>
          <p className={styles.footerText}>
            Застосовуємо весь рекомендований виробником для перевірки і заміни інструмент. Строго
            дотримуємося вимог сервісної документації. Даємо гарантію на весь регламентний термін.
          </p>
          <br />
          <p className={styles.footerText}>
            Не знайшли потрібну послугу? Зв'яжіться з нами – ми обслуговуємо автомобілі будь-якої
            складності!
          </p>
          <button
            className={styles.ctaButton}
            onClick={() =>
              document.getElementById('contacts')?.scrollIntoView({ behavior: 'smooth' })
            }>
            Записатися на консультацію →
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
