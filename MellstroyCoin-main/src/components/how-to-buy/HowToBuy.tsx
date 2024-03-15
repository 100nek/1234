import styles from "./HowToBuy.module.scss";
import arrow from "../../assets/arrow.svg";
import { useState, useEffect } from "react";
import { useTranslation } from 'react-i18next';

const HowToBuy = () => {
  const { t, i18n } = useTranslation();

  const [options, setOptions] = useState([
    {
      label: t("label1"),
      text: "Step 1 description...",
      isOpen: false,
    },
    {
      label: t("label2"),
      text: "Step 2 description...",
      isOpen: false,
    },
    {
      label: t("label3"),
      text: "Step 3 description...",
      isOpen: false,
    },
  ]);

  useEffect(() => {
    // При изменении языка обновляем локализованные строки в состоянии
    setOptions([
      {
        label: t("label1"),
        text: t("description1"),
        isOpen: false,
      },
      {
        label: t("label2"),
        text: t("description2"),
        isOpen: false,
      },
      {
        label: t("label3"),
        text: t("description3"),
        isOpen: false,
      },
    ]);
  }, [i18n.language]);

  const toggleAccordion = (index: number) => {
    const newOptions = [...options];
    newOptions[index].isOpen = !newOptions[index].isOpen;
    setOptions(newOptions);
  };

  return (
    <section className={styles.how_to_buy} id="howToBuy">
      <h2>{t("HOW TO BUY USING")} <span>$ETH</span></h2>
      <div className={styles.menu}>
        {options.map((option, index) => (
            <div key={index} className={styles.option}>
              <div className={styles.option_header} onClick={() => toggleAccordion(index)}>
                <p>{option.label}</p>
                <button style={{ transform: option.isOpen ? 'rotate(180deg)' : 'none' }}>
                  <img src={arrow} alt="Open" />
                </button>
              </div>
              {option.isOpen && (
              <p className={styles.text}>{option.text}</p>
              )}
              <hr />
            </div>
        ))}
      </div>
    </section>
  );
};

export default HowToBuy;
