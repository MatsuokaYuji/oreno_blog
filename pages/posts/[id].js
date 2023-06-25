import Layout from "@/components/Layout";
import Head from "next/head";
import Link from "next/link";
import {getAllPostIds,getPostData} from "../../lib/post"
import utilStyles from "../../styles/utils.module.css"
// fallbackがtrue時に読み込み画面追加
// import { useRouter } from "next/router"



export async function getStaticPaths() {
    // Return a list of possible value for id
    const paths = getAllPostIds();
    return {
        paths,
        fallback:false,
    };
  }
  
  export async function getStaticProps({ params }) {
    // Fetch necessary data for the blog post using params.id
    const postData = await getPostData(params.id);
    return {
        props: {
          postData,
        },
      };
  }

export default function Post({postData}) {
    // const router = useRouter()
    // if (router.isFallback) {
    //     return <div>Loading...</div>
    //   }

    return (
    <Layout>
        <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>{postData.date}</div>
        {/* サニタイズする必要あり */}
        <div dangerouslySetInnerHTML={{__html: postData.blogContentHTML}}/>
        </article>
    </Layout>
    );
    
}


