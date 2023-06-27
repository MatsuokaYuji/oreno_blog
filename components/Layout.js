import Head from "next/head";
import styles from "./layout.module.css"
import utilStyles from "../styles/utils.module.css"
import Link from 'next/link'


const name = "まるちゃんブログ"
export const siteTitle = "yuji_blog"

function Layout({children,home}) {
    return (
    <div className={styles.container}> 
        <Head>
        <title>{siteTitle}</title>
        <meta name="desc" content="width=device-width, initial-scale"></meta>
        <link rel="icon" href="/favicon.ico"/>
        <Link href="/qiita" className={utilStyles.lightText}>→Qiitaページへ</Link>
        
        </Head>
        <header className={styles.header}>
            {home ? (
                <>
                <img src="/images/maru_hana_small.jpg" className={utilStyles.borderCircle}/>
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
                </>
            ) : (
                <>
                <img src="/images/maru_hana_small.jpg" className={utilStyles.borderCircle}/>
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
                </>
            )}
            
        </header>
        <main>{children}</main>
        {!home && (
            <div >
                <Link href="/" className={utilStyles.lightText}>← ホームへ戻る</Link>
            </div>
        )}
    </div>
    );
  }
  
export default Layout;