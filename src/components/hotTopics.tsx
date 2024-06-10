import { Roboto, Playfair_Display } from "next/font/google";
import { Article } from "@/types"
import { differenceBetweenDates } from "@/utils/dateUtils"
import Link from "next/link";

interface Props {
  article: Article
}

const playfair_Display = Playfair_Display({ subsets: ["latin"] });
const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin'],
});

interface Props {
  article: Article
}

export default function HotTopics({ article }: Props) {
  return (
    <div className="flex w-full gap-8">

      <div
        className="rounded-lg group-hover:scale-105 ease-in duration-200 bg-cover bg-center w-3/4 h-96 flex p-8 flex-col justify-end relative group"
        style={{
          backgroundImage: (article.urlToImage ? `url(${article.urlToImage})` : 'url(news-default.png)'),
        }}
      >
        <div className="rounded-lg absolute inset-0 bg-black opacity-50" />

        <h3 className={`font-bold text-3xl text-white100 text-wrap mt-4 mb-6 line-clamp-3 w-1/2 drop-shadow group-hover:line-clamp-none ${playfair_Display.className}`}>
          {article.title}
        </h3>

        <div className={`flex gap-4 text-xs text-white100 ${roboto.className}`}>
          <span className="drop-shadow">{differenceBetweenDates(article.publishedAt)}</span>
          <span className="drop-shadow">{article.author}</span>
        </div>
      </div>

      <p className={`w-1/4 text-lg text-black60 ${playfair_Display.className} first-letter:text-4xl`}>
        {article.description} <Link href={article.url} target="_blank" className="text-black80">Read more</Link>
      </p>
    </div>
  )
}