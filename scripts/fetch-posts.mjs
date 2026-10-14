import { XMLParser  } from "fast-xml-parser";
import { writeFile, mkdir } from "node:fs/promises";

const RSS_URL = "https://piehyun31.tistory.com/rss";

// 1. 티스토리 RSS 가져오기
const response = await fetch(RSS_URL);

if(!response.ok) {
    throw new Error(`RSS 요청 실패 : ${response.status}`);
}

const xml = await response.text();

// 2. XML을 JavaScript 객체로 변환
const parser = new XMLParser({
  htmlEntities: true,
});

const data = parser.parse(xml);

// 3. 게시글 목록 추출
const items = data.rss.channel.item ?? [];

const posts = (Array.isArray(items) ? items : [items])
    .slice(0, 5)
    .map((item) => ({
        id: item.guid?.["#text"] ?? item.link,
        title: String(item.title ?? "").replaceAll("&mdash;", "—"),
        url: item.link,
        date: new Date(item.pubDate).toISOString().slice(0, 10),
    }));

//4. JSON 파일로 저장
await mkdir("public", { recursive : true });

await writeFile(
    "public/posts.json",
    JSON.stringify(posts, null, 2),
    "utf-8"
);

console.log(`게시글 ${posts.length}개 저장 완료!`);