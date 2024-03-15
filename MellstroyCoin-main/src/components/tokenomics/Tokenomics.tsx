import styles from "./Tokenomics.module.scss";
import { useTranslation } from 'react-i18next';

const Tokenomics = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.tokenomics} id="tokenomics">
      <h2>{t("TOKENOMICS title")}</h2>
      <div className={styles.supply}>1,000,000 {t("SUPPLY")}</div>
      <p className={styles.supply_text}>{t("Tokenomics info")}</p>
      <div className={styles.content}>
        <div className={styles.cart}>
          <h2>5/5%</h2>
          <p>{t("Tax on Buys & Sells")}</p>
        </div>
        <div className={styles.bottom}>
          <div className={styles.cart}>
            <h2>3%</h2>
            <p>{t("Marketing, Development and Adding Liquidity")}</p>
          </div>
          <div className={styles.cart}>
            <h2>2%</h2>
            <p>{t("Holders Rewards")}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tokenomics;