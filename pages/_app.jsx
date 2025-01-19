import { useMemo } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

// 格式化样式
import '../styles/globals.css';

// 注入 全局Store
import StoreContext from '@utils/hooks/storeContext';
import store from '@store';

// 多语言
import useTranslation from 'next-translate/useTranslation';

// UI框架
import Layout from '@components/layout';

// 环境变量
import Cookies from 'js-cookie';
import { Config } from '@constants/config';
import { languages } from '@constants/cookies';
import { mapLocalesIdToKoot } from '@utils/common';

function MyApp({ Component, pageProps }) {
    const router = useRouter();
    const { t } = useTranslation('common');
    const asPathWithoutQuery = router.asPath.split('?')[0];
    const asPathFix = asPathWithoutQuery?.endsWith('/') ? asPathWithoutQuery?.slice(0, -1) : asPathWithoutQuery;

    // 浏览器语言跟随
    if (typeof window !== 'undefined') {
        let browserLang = navigator.language;
        if (browserLang?.startsWith('zh')) {
            browserLang = 'zh-hant';
        };
        const matchBrowserLang = router?.locales?.includes(browserLang);
        const localLang = Cookies.get(languages);

        if (browserLang && matchBrowserLang && !localLang && router.locale === 'en') {
            router.push(`/${browserLang}${router?.asPath}`);
        };
    };

    // Cookies 设置语言ID
    const initLocale = mapLocalesIdToKoot(router.locale);
    Cookies.set(languages, initLocale, { domain: Config.cookieDomain });

    // 获取当前页面的canonicalURL
    const canonicalURL = useMemo(() => {
        let url = '';
        if (router.locale === 'en') {
            url = `${Config.websiteDomain}${asPathFix}`;
        } else {
            url = `${Config.websiteDomain}/${router.locale}${asPathFix}`;
        };

        return url;
    }, [router.locale, asPathFix]);

    // APP 中执行的交互
    if (typeof window !== 'undefined' && window.currencyexchange) {
        let callbacks = {};
        window.jsBridge = {
            invoke: function (api, data, callback) {
                callbacks[api] = callback;
                window.currencyexchange.postMessage(JSON.stringify({
                    api: api,
                    data: data || {},
                }));
            },
            receiveMessage: function (msg) {
                if (callbacks[msg.api]) {
                    callbacks[msg.api](msg); // 执行调用
                };
            }
        };
    };

    return (
        <>
            <Head>
                <title>{t('seo.title')}</title>
                <meta name="keywords" content={t('seo.keywords')} />
                <meta name="description" content={t('seo.description')} />
                <meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no" />
                {
                    router.locales.map((item, index) => {
                        const urlFix = item === 'en' ? `${Config.websiteDomain}${asPathFix}` : `${Config.websiteDomain}/${item}${asPathFix}`;
                        
                        return (
                            <link key={index} rel="alternate" href={urlFix} hrefLang={item} />
                        )
                    })
                }
                <link rel="alternate" href={`${Config.websiteDomain}${asPathFix}`} hrefLang="x-default" />
                <link rel="canonical" href={canonicalURL} />
            </Head>
            <StoreContext.Provider value={store}>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </StoreContext.Provider>
        </>
    )
};

export default MyApp;
