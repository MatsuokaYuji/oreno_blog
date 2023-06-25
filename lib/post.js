import path from "path";
import fs from "fs";
import matter from "gray-matter";


const postsDirectory = path.join(process.cwd(),"posts");

// SSG
// mdファイルのデータを取り出す
export function getPostData(){
    const fileNames = fs.readdirSync(postsDirectory);
    const allPostsData = fileNames.map((fileName) =>{
        const id = fileName.replace(/\.md$/,""); //ファイル名
        
        // マークダウンファイルを文字列として読み取る
        const fullPath = path.join(postsDirectory,fileName);
        const fileContents = fs.readFileSync(fullPath,"utf-8");

        const matterResults = matter(fileContents);

        // idとデータを返す。...はスプレッド構文
        return{
            id,
            ...matterResults.data,
        };
    });
    return allPostsData;
}