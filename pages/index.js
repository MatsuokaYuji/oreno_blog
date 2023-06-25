import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import Head from 'next/head'
import Layout, { siteTitle } from "../components/Layout";
import utilStyles from "../styles/utils.module.css"
import homeStyles from "../styles/Home.module.css"
import {getPostsData} from "../lib/post";



const inter = Inter({ subsets: ['latin'] })

// SSGの場合
export async function getStaticProps(){
  const allPostsData = getPostsData(); // メタデータが入ってる
  console.log(allPostsData);

  return {
    props:{
      allPostsData,
    },
  };
}

// SSRの場合
// export async function getServerSideProps(context){
//   return {
//     props:{
//       // コンポーネントに渡すためのprops
//     },
//   };
// }

export default function Home({allPostsData}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          西村まるです。よろしくお願いいたします。
        </p>
      </section>

      <section>
        <h2>📝犬好きなエンジニアのブログ</h2>

        <div className={homeStyles.grid}>
          {allPostsData.map(({id,title,date,thumbnail}) =>(
            <article key={id}>
            <Link href={`/posts/${id}`}>
              <img src={`${thumbnail}`}
              className={homeStyles.thumbnailImage} />
            </Link>
            {/* legacyBehaviorを使うことでaタグをLINKに内包できる */}
            <Link legacyBehavior href={`/posts/${id}`}>
            <a className={utilStyles.boldText}>{title}</a>
            </Link>
            <br />
            <small className={utilStyles.lightText}>
              {date}
            </small>
          </article>
          ))}
        </div>
      </section>
      <a href="">hiiiiiiii!</a>
      </Layout>
  );
}
