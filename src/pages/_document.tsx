import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
    render() { 
        return(
            <Html>
                <Head>
                    <link rel="preconnect" href={`https://fonts.googleapis.com`} />
                    <link rel="shortcut icon" href="/favicon.png" type="image/png" />
                    <link href={`https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap`} rel="stylesheet" />
                    <link href={`https://fonts.googleapis.com/css2?family=M+PLUS+1+Code:wght@400;500;700&display=swap`} rel="stylesheet" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}