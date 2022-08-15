import "../styles/globals.css"
import Head from "next/head"
import { MoralisProvider } from "react-moralis"
import Header from "../components/Header"

const APP_ID = process.env.NEXT_PUBLIC_APP_ID
const APP_URL = process.env.NEXT_PUBLIC_APP_URL

function MyApp({ Component, pageProps }) {
    return (
        //initializeOnMount is used for moralis Server which we are going to use later and then it willbe true
        <div>
            <Head>
                <title>NFT Marketplace</title>
                <meta name="description" content="NFT Marketplace" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <MoralisProvider appId={APP_ID} serverUrl={APP_URL}>
                <Header />
                <Component {...pageProps} />
            </MoralisProvider>
        </div>
    )
}

export default MyApp
