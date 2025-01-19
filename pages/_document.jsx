import Document, { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

import { theme } from '@constants/cookies';

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        const cookies = ctx?.req?.cookies || {};
        const lang = ctx?.locale;

        // 将数据作为 props 传递给页面组件
        return { ...initialProps, cookies, lang };
    };
    
    render() {
        const { cookies, lang } = this.props;

        // 设置主题
        const themes = cookies[theme] || 'light';

        return (
            <Html lang={lang} theme={themes} dir="ltr">
                <Head>
                    <meta name="format-detection" content="telephone=no,email=no,address=no" />
                    <meta name="format-detection" content="email=no" />
                    <meta name="format-detection" content="address=no" />
                    <meta name="format-detection" content="telephone=no" />
                    <meta name="mobile-web-app-capable" content="yes" />
                    <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />

                    <Script
                        src="https://www.googletagmanager.com/gtag/js?id=G-FR69PSV58Q"
                        strategy="afterInteractive"
                    />
                    <Script id="google-analytics" strategy="afterInteractive">
                        {`
                            window.dataLayer = window.dataLayer || [];
                            function gtag(){dataLayer.push(arguments);}
                            gtag('js', new Date());
                    
                            gtag('config', 'G-FR69PSV58Q');
                        `}
                    </Script>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
};

export default MyDocument;
