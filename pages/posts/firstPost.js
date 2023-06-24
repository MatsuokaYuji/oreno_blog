import Head from "next/head";
import Link from "next/link";


export default function FirstPost() {
    return (
    <div>
        <Head>
        <title>初登校</title>
        <meta name="desc" content="width=device-width, initial-scale"></meta>
        <link rel="icon" href="/favicon.ico"/>
        </Head>
        <h1>お試し</h1>
        <Link href="/">戻る</Link>
    </div>
    );
}