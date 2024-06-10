import { roboto } from "@/utils/fonts";

interface Props {
  children: string;
}
export default function Title({children}: Props) {
  return (
    <h1 className={`mt-28 font-bold text-4xl mb-6 ${roboto.className}
    md:mt-32 md:text-5xl
    `}>{children}</h1>
  )
}