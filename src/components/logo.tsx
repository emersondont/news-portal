import { Playfair_Display } from "next/font/google";

const font = Playfair_Display({ subsets: ["latin"] });

export default function Logo() {
  return (
    <div className={`flex cursor-pointer gap-2 items-center text-base font-bold ${font.className}`}>
      <div className="p-2 rounded bg-black80 text-white">
        <p>News</p>
      </div>
      <p>Portal</p>
    </div>
  )
}