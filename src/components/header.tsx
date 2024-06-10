import { IoSearch, IoMenu } from "react-icons/io5";
import Logo from "./logo";


export default function Header() {
  return (
    <header className="flex py-8 px-32 w-full justify-between items-center fixed top-0 left-0">
      <Logo />
      <div className="flex gap-8 text-black60">
        <IoSearch size={28} className="cursor-pointer hover:text-black40 ease-in duration-100"/>
        <IoMenu size={28} className="cursor-pointer hover:text-black40 ease-in duration-100"/>
      </div>
    </header>
  )
}
