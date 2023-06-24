import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import Head from 'next/head'
import Layout from "../components/Layout";
import utilStyles from "../styles/utils.module.css"
import homeStyles from "../styles/Home.module.css"
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Layout>
      <section className={utilStyles.headingMd}>
        <p>
          西村まるです。よろしくお願いいたします。
        </p>
      </section>

      <section>
        <h2>📝犬好きなエンジニアのブログ</h2>

        <div className={homeStyles.grid}>
          <article>
            <Link href="/">
              <img src="/images/thumbnail01.jpg" 
              className={homeStyles.thumbnailImage} />
            </Link>
            {/* legacyBehaviorを使うことでaタグをLINKに内包できる */}
            <Link legacyBehavior href="/">
            <a className={utilStyles.boldText}>まるちゃんはなぜこんな可愛いのか</a>
            </Link>
            <br />
            <small className={utilStyles.lightText}>
              June 25, 2023
            </small>
          </article>
          <article>
            <Link href="/">
              <img src="/images/thumbnail02.jpg" 
              className={homeStyles.thumbnailImage} />
            </Link>
            {/* legacyBehaviorを使うことでaタグをLINKに内包できる */}
            <Link legacyBehavior href="/">
            <a className={utilStyles.boldText}>まるちゃんの食欲について</a>
            </Link>
            <br />
            <small className={utilStyles.lightText}>
              June 25, 2023
            </small>
          </article>
          <article>
            <Link href="/">
              <img src="/images/thumbnail03.jpeg" 
              className={homeStyles.thumbnailImage} />
            </Link>
            {/* legacyBehaviorを使うことでaタグをLINKに内包できる */}
            <Link legacyBehavior href="/">
            <a className={utilStyles.boldText}>破壊神まるちゃん</a>
            </Link>
            <br />
            <small className={utilStyles.lightText}>
              June 25, 2023
            </small>
          </article>
          <article>
            <Link href="/">
              <img src="/images/thumbnail01.jpg" 
              className={homeStyles.thumbnailImage} />
            </Link>
            {/* legacyBehaviorを使うことでaタグをLINKに内包できる */}
            <Link legacyBehavior href="/">
            <a className={utilStyles.boldText}>まるちゃんが好きなおもちゃ</a>
            </Link>
            <br />
            <small className={utilStyles.lightText}>
              June 25, 2023
            </small>
          </article>
        </div>
      </section>
      
      
      
      <a href="">hiiiiiiii!</a>
      </Layout>
  );
}
