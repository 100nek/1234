import styles from "./Header.module.scss";
import logo from "../../assets/logo.jpg";
import { useState } from "react";
import { Link } from 'react-scroll';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.header_line}>
        <Link to="home" spy={true} smooth={true} offset={-70} duration={500}>
          <img src={logo} alt="Logo" className={styles.logo}/>
        </Link>
        <nav className={styles.navigation}>
          <p><Link to="home" spy={true} smooth={true} offset={-70} duration={500}>{t("Mell")}</Link></p>
          <p><Link to="tokenomics" spy={true} smooth={true} offset={-70} duration={500}>{t("Tokenomics")}</Link></p>
          <p><Link to="howToBuy" spy={true} smooth={true} offset={-70} duration={500}>{t("How to buy")}</Link></p>
        </nav>
        <div className={styles.menu}>
          <div className={styles.menu_toggle} onClick={toggleMenu}>
            <div className={styles.bar}></div>
            <div className={styles.bar}></div>
            <div className={styles.bar}></div>
          </div>
          {isOpen && (<div className={styles.menu_content}>
            <p><Link to="home" spy={true} smooth={true} offset={-70} duration={500}>{t("Mell")}</Link></p>
            <p><Link to="tokenomics" spy={true} smooth={true} offset={-70} duration={500}>{t("Tokenomics")}</Link></p>
            <p><Link to="howToBuy" spy={true} smooth={true} offset={-70} duration={500}>{t("How to buy")}</Link></p>
          </div>)}
        </div>
        {i18n.language === 'en' ? (
          <button className={styles.change_lng} onClick={() => changeLanguage('ru')}>RUS</button>
        ) : (
          <button className={styles.change_lng} onClick={() => changeLanguage('en')}>ENG</button>
        )}
        <button className={styles.buy_button}>{t("Buy on Uniswap")}</button>
      </div>
    </header>
  )
}

export default Header;