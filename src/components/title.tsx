import { roboto } from "@/utils/fonts";

interface Props {
  children: string;
}
export default function Title({children}: Props) {
  return (
    <h1 className={`mt-32 font-bold text-5xl mb-6 ${roboto.className}`}>{children}</h1>
  )
}