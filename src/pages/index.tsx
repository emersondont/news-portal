import NewsCard from "@/components/newsCard";
import { useEffect, useState } from "react";
import { Article } from "@/types";
import HotTopics from "@/components/hotTopics";
import { roboto } from "@/utils/fonts";
import Title from "@/components/title";

interface Props {
  articles: Article[]
}

export default function Home({articles}: Props ) {
  const [latestNews, setLatestNews] = useState<Article[]>(articles)

  return (
    <>
      <Title>Hot Topics</Title>
      {latestNews[0] && <HotTopics article={latestNews[0]} />}

      <h2 className={`font-bold text-2xl mt-14 ${roboto.className}
      md:text-4xl
      `}>Latest News</h2>
      <div className="flex flex-wrap w-full justify-between mt-6">
        {latestNews.map((article, index) => (
          index >= 1 && <NewsCard key={index} article={article} />
        ))}
      </div>
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch(`${process.env.HOST}/api/latestNews`)
  const obj = await res.json()

  return { 
    props: { articles: obj.data.articles },
    revalidate: 3600, // Regenerate the page every 1 hour
  }
}
