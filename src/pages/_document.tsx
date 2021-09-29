import Document, {Head, Html, Main, NextScript} from 'next/document'

class MyDocument extends Document {

    render() {
        return (
            <Html lang = {"en"}>

                <Head>
                    <script async defer data-website-id="d3c22505-2ae2-413d-8c6d-97e74669575f" src="https://analytics.blamejared.com/umami.js"/>
                </Head>
                <body>
                <Main/> <NextScript/>
                </body>
            </Html>
        )
    }
}

export default MyDocument