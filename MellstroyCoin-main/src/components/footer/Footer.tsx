import styles from "./Footer.module.scss";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <p>{t("All rights reserved")}.</p>
        <p>MELL COIN</p>
      </div>
    </footer>
  )
}

export default Footer;