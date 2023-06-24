import Head from "next/head";
import styles from "./layout.module.css"
import utilStyles from "../styles/utils.module.css"

const name = "まるちゃんブログ"
export const siteTitle = "yuji_blog"

function Layout({children}) {
    return (
    <div className={styles.container}> 
        <Head>
        <title>{siteTitle}</title>
        <meta name="desc" content="width=device-width, initial-scale"></meta>
        <link rel="icon" href="/favicon.ico"/>
        </Head>
        <header className={styles.header}>
            <img src="/images/maru_hana_small.jpg" className={utilStyles.borderCircle}/>
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
        </header>
        <main>{children}</main>
    </div>
    );
  }
  
export default Layout;