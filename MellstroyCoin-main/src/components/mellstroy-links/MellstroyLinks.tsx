import styles from "./MellstroyLinks.module.scss";
import telelogo from "../../assets/telelogo.svg";
import inst from "../../assets/insticon.svg";
import kick from "../../assets/Kick.svg";
import tiktok from "../../assets/tiktok.svg";
import { useTranslation } from 'react-i18next';

const MellstroyLinks = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.mellstroy_links}>
      <h2>{t("MELLSTROY LINKS")}</h2>
      <div className={styles.links}>
          <a href="https://www.instagram.com/mellstroy/">
            <img src={inst} alt="Link" />
          </a>
          <a href="https://t.me/tellstroy">
            <img src={telelogo} alt="Link" />
          </a>
          <a href="https://www.tiktok.com/@glavstroy">
            <img src={tiktok} alt="Link" />
          </a>
          <a href="https://kick.com/mellstroy172">
            <img src={kick} alt="Link" />
          </a>
      </div>
    </section>
  )
}

export default MellstroyLinks;
