import { Article } from "@/types";
import { differenceBetweenDates } from "@/utils/dateUtils";
import { useRouter } from "next/router";
import { playfair_Display, roboto } from "@/utils/fonts";

interface Props {
  article: Article
}

export default function NewsCard({ article }: Props) {
  const router = useRouter()

  const handleClick = () => {
    router.push({
      pathname: '/article',
      query: {data: JSON.stringify(article)}
    })
  }
  
  if (article.title === '[Removed]') {
    return null;
  }
  return (
    <button onClick={handleClick} className="w-270 flex flex-col mb-16 group">
      <img
        src={(article.urlToImage ? `${article.urlToImage}` : 'news-default.png')}
        className="rounded-lg group-hover:scale-105 ease-in duration-200 object-cover"
        style={{ width: '270px', height: '175px'}}
        alt="News Image"
      />

      <h3 className={`font-bold text-2xl text-left text-wrap mt-4 mb-6 line-clamp-2 ${playfair_Display.className}`}>
        {article.title}
      </h3>

      <div className={`flex gap-4 text-black20 text-xs font-normal ${roboto.className}`}>
        <span className="min-w-20">{differenceBetweenDates(article.publishedAt)}</span>
        <span className="line-clamp-1">{article.author}</span>
      </div>
    </button>
  )
}


