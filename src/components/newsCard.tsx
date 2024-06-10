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
    <button onClick={handleClick} className="w-36 flex flex-col mb-8 group 
    md:w-270 md:mb-16
    sm:w-52 sm:mb-10
    ">
      <img
        src={(article.urlToImage ? `${article.urlToImage}` : 'news-default.png')}
        className="rounded-lg group-hover:scale-105 ease-in duration-200 object-cover w-full h-24
        md:h-44
        sm:h-32
        "
        alt="News Image"
      />

      <h3 className={`font-bold text-base text-left text-wrap mt-2 mb-4 line-clamp-2 ${playfair_Display.className}
      md:text-2xl 
      sm:text-lg sm:mb-6 sm:mt-4
      `}>
        {article.title}
      </h3>

      <div className={`flex gap-4 text-black20 text-xs font-normal ${roboto.className}`}>
        <span className="text-left line-clamp-1 w-1/2 sm:line-clamp-none sm:w-20">{differenceBetweenDates(article.publishedAt)}</span>
        <span className="line-clamp-1 w-1/2">{article.author}</span>
      </div>
    </button>
  )
}


