module.exports = ({
    defaultLocale: 'en',
    locales: ['en', 'zh-hant', 'es', 'id', 'ar', 'pl', 'tr', 'fr', 'de', 'th', 'nl', 'pt', 'ru', 'vi', 'sv', 'ko'],
    localeDetection: false,
    pages: {
        '*': ['common'],
        '/price/[coin]': ['price'],
        '/flexible-staking': ['flexible'],
        '/flexible-staking/[coin]': ['flexible'],
        '/flexible-staking/vip': ['flexible'],
        '/flexible-staking/record': ['flexible'],
        '/btr-lockup-staking': ['btrlockup'],
        '/btr-lockup-staking/[coin]': ['btrlockup'],
        '/btc-xrp-eth-trading-bot': ['autoinvest'],
        '/btc-xrp-eth-trading-bot/[coin]': ['autoinvest'],
        '/staking/learn-staking': ['learnstaking'],
        '/converter': ['converter'],
        '/converter/[coin]': ['converter'],
    }
})
