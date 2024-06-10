import NewsCard from "@/components/newsCard";
import Title from "@/components/title";
import { Article } from "@/types";
import { Roboto } from "next/font/google";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";


const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin'],
});

export default function Search() {
  const [news, setNews] = useState<Article[] | null>(null)
  const router = useRouter()
  const { query: { q } } = router

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getData(q as string)
        setNews(data)
      } catch (error) {
        setNews([])
        console.error(error)
      }
    }
    fetchData()
  }, [q])

  return (
    <>
      <Title>{JSON.parse(q as string)}</Title>

      <div className="flex flex-wrap w-full justify-between mt-6">
        {news?.map((article, index) => (
          <NewsCard key={index} article={article} />
        ))}
      </div>
      {
        news?.length === 0 &&
        <p className={`text-black80 text-xl mt-6 text-center ${roboto.className}`}>
          No news found
        </p>
      }
      {
        news === null &&
        <p className={`text-black80 text-xl mt-6 text-center ${roboto.className}`}>
          Loading...
        </p>
      }
    </>
  )
}

async function getData(q: string): Promise<Article[]> {
  const res = await fetch(`api/searchNews?q=${q}`)
  const obj = await res.json()

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return obj.data.articles
}