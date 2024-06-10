import NewsCard from "@/components/newsCard";
import { useEffect, useState } from "react";
import { Article } from "@/types";
import HotTopics from "@/components/hotTopics";
import { roboto } from "@/utils/fonts";
import Title from "@/components/title";


export default function Home() {
  const [latestNews, setLatestNews] = useState<Article[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const data = await getData()
      setLatestNews(data)
    }
    fetchData()
  }, [])

  return (
    <>
      <Title>Hot Topics</Title>
      {latestNews[0] && <HotTopics article={latestNews[0]} />}

      <h2 className={`font-bold text-4xl mt-14 ${roboto.className}`}>Latest News</h2>
      <div className="flex flex-wrap w-full justify-between mt-6">
        {latestNews.map((article, index) => (
          index >= 1 && article.source.id && <NewsCard key={index} article={article} />
        ))}
      </div>
    </>
  );
}

async function getData(): Promise<Article[]> {
  const res = await fetch('api/latestNews')
  const obj = await res.json()

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return obj.data.articles
}
