import { IoSearch, IoMenu } from "react-icons/io5";
import Logo from "./logo";
import Link from "next/link";


export default function Header() {
  return (
    <header className="flex py-8 px-32 bg-white100 w-full justify-between items-center fixed top-0 left-0 z-10">
      <Link href='/'>
        <Logo />
      </Link>
      <div className="flex gap-8 text-black60">
        <IoSearch size={28} className="cursor-pointer hover:scale-110 ease-in duration-100" />
        <IoMenu size={28} className="cursor-pointer hover:scale-110 ease-in duration-100" />
      </div>
    </header>
  )
}
