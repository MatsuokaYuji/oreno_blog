import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import Head from 'next/head'
import Layout, { siteTitle } from "../../components/Layout";
import utilStyles from "../../styles/utils.module.css"
import homeStyles from "../../styles/Home.module.css"

import { getQiitaPosts } from '../../lib/api'




const inter = Inter({ subsets: ['latin'] })

// SSGの場合
export async function getStaticProps(){
  
  // console.log(allPostsData);
  const qiita = await getQiitaPosts();

  return {
    props:{
      qiita,
    },
  };
}

export default function Qiita({qiita}) {
    return (
      <Layout >
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <section className={utilStyles.headingMd}>
          <p>
            西村まるです。よろしくお願いいたします。
          </p>
        </section>
  
        <section>
            <h2>⭐️Qiita Trend</h2>
            <div className={homeStyles.grid}>
  
            {qiita.map(({id,title,url,created_at,user}) => (
              <article key={id}>
                <Link legacyBehavior href={url}>
                <a className={utilStyles.boldText}>{title}</a>
                </Link>
                <Link href={user.website_url}>
                <img src={`${user.profile_image_url}`}
                className={homeStyles.qiitaThumbnailImage} />
                </Link>
              
              <small className={utilStyles.lightText}>
                {created_at}
              </small>
              </article>
            ))}
          </div>
        </section>
        </Layout>
    );
  }
  
  
  // // rendered_body, body, coediting, 
  // comments_count, created_at, group, id, 
  // likes_count, private, reactions_count, 
  // stocks_count, tags, title, updated_at, url,
  //  user, page_views_count, team_membership, organization_url_name