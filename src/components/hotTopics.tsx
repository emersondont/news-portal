import { Roboto, Playfair_Display } from "next/font/google";
import { Article } from "@/types"
import { differenceBetweenDates } from "@/utils/dateUtils"
import Link from "next/link";
import { useRouter } from "next/router";

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
  const router = useRouter()

  const handleClick = () => {
    router.push({
      pathname: '/article',
      query: {data: JSON.stringify(article)}
    })
  }
  return (
    <div className="flex w-full gap-8">

      <button onClick={handleClick}
        className="rounded-lg group-hover:scale-105 ease-in duration-200 bg-cover bg-center w-full h-52 flex p-8 flex-col justify-end relative group
        md:w-3/4 md:h-96
        sm:h-72
        "
        style={{
          backgroundImage: (article.urlToImage ? `url(${article.urlToImage})` : 'url(news-default.png)'),
        }}
      >
        <div className="rounded-lg absolute inset-0 bg-black opacity-50" />

        <h3 className={`font-bold text-base text-white100 text-wrap mt-4 mb-6 line-clamp-3 w-full drop-shadow group-hover:line-clamp-6 ${playfair_Display.className}
        md:text-3xl md:w-1/2 
        sm:text-2xl
        `}>
          {article.title}
        </h3>

        <div className={`flex gap-4 text-xs text-white100 ${roboto.className}`}>
          <span className="drop-shadow">{differenceBetweenDates(article.publishedAt)}</span>
          <span className="drop-shadow">{article.author}</span>
        </div>
      </button>

      <p className={`w-1/4 text-lg text-black60 ${playfair_Display.className} first-letter:text-4xl hidden
      md:block
      `}>
        {article.description} <Link href={article.url} target="_blank" className="text-black80">Read more</Link>
      </p>
    </div>
  )
}