import { IoSearch, IoClose } from "react-icons/io5";
import Logo from "./logo";
import Link from "next/link";
import { useState } from "react";
import { roboto } from "@/utils/fonts";
import { useRouter } from "next/router";

export default function Header() {
  const [openInput, setOpenInput] = useState(false)
  const [search, setSearch] = useState('')
  const router = useRouter()

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && search !== '') {
      router.push({
        pathname: '/search',
        query: { q: JSON.stringify(search) }
      })
      handleCloseInput()
    }
    else if (e.key === 'Escape') {
      handleCloseInput()
    }
  }

  const handleCloseInput = () => {
    setSearch('')
    setOpenInput(false)
  }

  return (
    <header className="flex py-8 px-9 bg-white100 w-full justify-between items-center fixed top-0 left-0 z-10
      md:px-16
      lg:px-32
    ">
      <Link href='/' onClick={handleCloseInput}>
        <Logo />
      </Link>
      <div className={"flex gap-4 border rounded p-1 " + (openInput ? 'border-black80' : 'border-transparent')}>
        {
          openInput && (
            <input
              type="text"
              className={`outline-none text-black80 rounded ${roboto.className} w-32
              sm:w-auto
              `}
              placeholder="Pesquisar..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={handleKeyPress}
              autoFocus={true}
            />
          )
        }
        <button onClick={() => setOpenInput(!openInput)}>
          {
            openInput ?
              <IoClose size={28} className="cursor-pointer hover:scale-110 ease-in duration-100" />
              :
              <IoSearch size={28} className="cursor-pointer hover:scale-110 ease-in duration-100" />
          }
        </button>
      </div>
    </header>
  )
}
