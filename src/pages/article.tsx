import Title from "@/components/title";
import { Article } from "@/types";
import { playfair_Display, roboto } from "@/utils/fonts";
import { Playfair_Display, Roboto } from "next/font/google";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function ArticlePage() {
  const [article, setArticle] = useState<Article | null>(null)
  const router = useRouter()
  const { query: { data } } = router

  useEffect(() => {
    if (!data) {
      router.push('/');
    } else {
      setArticle(JSON.parse(data as string))
    }
  }, [data]);
  if(!article) return <></>;

  return (
    <>
      <Title>{article.title}</Title>

      <div className="flex gap-8 mb-16">
        <div className="flex flex-col w-3/5">
          {article?.urlToImage &&
            <img
              src={article.urlToImage}
              className="rounded-lg group-hover:scale-105 ease-in duration-200 object-cover w-full h-auto"
              alt="News Image"
            />
          }
          <div className={`flex gap-4 text-black40 text-base font-normal mt-3 ${roboto.className}`}>
            <span className="min-w-20">{new Date(article.publishedAt as string).toDateString()}</span>
            <span>{article.author}</span>
          </div>
        </div>

        <p className={`text-xl text-black60 first-letter:text-4xl w-2/5 ${playfair_Display.className}`}>
          {article.content ? article.content.split("[+")[0] : article.description}
          <Link href={article.url} target="_blank" className="text-black80 ml-2">
            Read more.
          </Link>
        </p>
      </div>
    </>
  )
}