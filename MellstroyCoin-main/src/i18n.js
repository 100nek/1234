import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      'Mell': 'Mellstroy',
      'Tokenomics': 'Tokenomics',
      'How to buy': 'How to buy',
      'Buy on Uniswap': 'Buy on Uniswap',
      'Subtitle': 'We are a team of Mellstroy fans and this token is dedicated to him, now we will surpass PEPE and other trash. Community is our everything, lets make the Hog King!',
      'Chart': 'Chart',
      'TOKENOMICS title': 'TOKENOMICS',
      "Tax on Buys & Sells": "Tax on Buys & Sells",
      "Marketing, Development and Adding Liquidity": "Marketing, Development and Adding Liquidity",
      "Holders Rewards": "Holders Rewards",
      "Tokenomics info": "1000000 Tokens | 950000 for LP | 50000 sent to Mellstroy",
      "SUPPLY": "SUPPLY",
      "HOW TO BUY USING": "HOW TO BUY USING",
      "label1": "1. Download and install",
      "label2": "2. Purchase Some Ethereum",
      "label3": "3. Swap Your ETH for MAGA",
      "All rights reserved": "All rights reserved",
      "description1": "MetaMask is a crypto wallet app used for storing and managing Ethereum tokens. After creating a wallet be sure to write down your recovery phrase on a piece of paper and store it somewhere safe.",
      "description2": "From inside the MetaMask app you can purchase Ethereum using PayPal by clicking on the buy button.",
      "description3": "Connect your wallet to Uniswap, input our contract address 0x576e2BeD8F7b46D34016198911Cdf9886f78bea7, set your slippage to 1.5%, and click the swap button!"
    }
  },
  ru: {
    translation: {
      'Mell': 'Меллстрой',
      'Tokenomics': 'Токеномика',
      'How to buy': 'Как купить?',
      'Buy on Uniswap': 'Купить на Uniswap',
      'Subtitle': 'Мы команда фанатов Меллстроя и этот токен посвещен ему, теперь мы превзойдем ПЕПЕ и прочий мусор. Комьюнити - наше всё, сделаем Главного Борова Королем!',
      'Chart': 'График',
      'TOKENOMICS title': 'ТОКЕНОМИКА',
      "Tax on Buys & Sells": "Комиссия на Покупки & Продажи",
      "Marketing, Development and Adding Liquidity": "Маркетинг, развитие и повышение ликвидности",
      "Holders Rewards": "Вознаграждения держателем",
      "Tokenomics info": "1000000 Токеномика | 950000 для ЛП | 50000 отправленно Меллстрою",
      "SUPPLY": "ПРЕДЛОЖЕНИЕ",
      "HOW TO BUY USING": "КАК КУПИТЬ С ПОМОЩЬЮ",
      "label1": "1. Загрузите и установите",
      "label2": "2. Приобретите немного Ethereum",
      "label3": "3. Обменяйте свои ETH на MAGA",
      "All rights reserved": "Все права защищены",
      "description1": "MetaMask - это криптокошелек, предназначенный для хранения и управления токенами Ethereum. После создания кошелька обязательно запишите фразу восстановления на листке бумаги и храните его в надежном месте.",
      "description2": "Внутри приложения MetaMask вы можете приобрести Ethereum с помощью PayPal, нажав на кнопку купить",
      "description3": "Подключите свой кошелек к Uniswap, введите адрес нашего контракта 0x576e2BeD8F7b46D34016198911Cdf9886f78bea7, установите проскальзывание на 1,5% и нажмите кнопку обмена!"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'ru',
    fallbackLng: 'en',

    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
