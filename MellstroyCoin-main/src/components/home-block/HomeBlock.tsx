import styles from "./HomeBlock.module.scss";
import logo from "../../assets/logo.jpg";
import unilogo from "../../assets/unilogo.svg";
import romblogo from "../../assets/romblogo.svg";
import telelogo from "../../assets/telelogo.svg";
import huynialogo from "../../assets/huynialogo.svg";
import xlogo from "../../assets/xlogo.svg";
import eaglelogo from "../../assets/eaglelogo.svg";
import { useTranslation } from 'react-i18next';

const HomeBlock = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.home} id="home">
      <img src={logo} alt="Logo" className={styles.logo} />
      <h1><span>MELLSTROY </span>COIN</h1>
      <p>{t("Subtitle")}</p>
      <div className={styles.buttons}>
        <button className={styles.buy_button}>{t("Buy on Uniswap")}</button>
        <button className={styles.chart}>{t("Chart")}</button>
      </div>
      <div className={styles.links}>
        <button>
          <img src={unilogo} alt="Link" />
        </button>
        <button>
          <img src={romblogo} alt="Link" />
        </button>
        <button>
          <img src={eaglelogo} alt="Link" />
        </button>
        <button>
          <img src={huynialogo} alt="Link" />
        </button>
        <button>
          <img src={telelogo} alt="Link" />
        </button>
        <button>
          <img src={xlogo} alt="Link" />
        </button>
      </div>
    </section>
  )
}

export default HomeBlock;