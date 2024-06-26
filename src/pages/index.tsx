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
      try {
        const data = await getData()
        setLatestNews(data)
      } catch (error) {
        setLatestNews([])
        console.error(error)
      }
    }
    fetchData()
  }, [])

  return (
    <>
      <Title>Hot Topics</Title>
      {latestNews.length > 0 && <HotTopics article={latestNews[0]} />}

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

async function getData() {
  const res = await fetch(`api/latestNews`)

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  
  const obj = await res.json()
  return obj.data.articles
}
