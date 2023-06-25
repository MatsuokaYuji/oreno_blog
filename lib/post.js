import path from "path";
import fs from "fs";
import matter from "gray-matter";
import { remark } from "remark";
import html  from "remark-html";


const postsDirectory = path.join(process.cwd(),"posts");

// SSG
// mdファイルのデータを取り出す
export function getPostsData(){
    const fileNames = fs.readdirSync(postsDirectory);
    const allPostsData = fileNames.map((fileName) =>{
        const id = fileName.replace(/\.md$/,""); //ファイル名
        
        // マークダウンファイルを文字列として読み取る
        const fullPath = path.join(postsDirectory,fileName);
        const fileContents = fs.readFileSync(fullPath,"utf8");

        const matterResults = matter(fileContents);

        // idとデータを返す。...はスプレッド構文
        return{
            id,
            ...matterResults.data,
        };
    });
    return allPostsData;
}

// getStaticPathでreturnで使うpathを取得する
export function getAllPostIds(){
    const fileNames = fs.readdirSync(postsDirectory);
    return fileNames.map((fileName) => {
        return {
            params:{
                id: fileName.replace(/\.md$/,""),
            },
        };
    });
}

// idに基づくブログ投稿データを返す
export async function getPostData(id) {
    const fullPath = path.join(postsDirectory,`${id}.md`);
    const fileContents = fs.readFileSync(fullPath,"utf8");
    //メタデータをmatterで
    const matterResult = matter(fileContents);
    //本文をremarkで
    const blogContent = await remark()
        .use(html)
        .process(matterResult.content);
    const blogContentHTML = blogContent.toString();
    console.log(blogContentHTML);
    return {
        id,
        blogContentHTML,
        ...matterResult.data,
    };
}