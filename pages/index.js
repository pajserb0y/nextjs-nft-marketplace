import Image from "next/image"
import styles from "../styles/Home.module.css"
import { useMoralisQuery } from "react-moralis"
export default function Home() {
    //how to show recently listed NFTs

    //we will index the events off-chain and then read from out database
    //setup a server to listen those events to be fired,  and we will add them to a database to query

    //isnt't that centralized??
    //1.Moralis does it in centralized way and comes with ton of other features  and is quicker, an your logic is still 100% on chain
    //2.Graph does it in decentralized way
    const { data: listedNfts, isFetching: fetchingListedNfts } = useMoralisQuery(
        "ActiveItem",
        (query) => query.limit(10).descending("tokenId") //.skip(pageNumber)
    )

    console.log(listedNfts)
    return <div className={styles.container}>Hel</div>
}
