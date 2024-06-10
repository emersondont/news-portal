import Header from "./header";

interface Props {
  children: React.ReactNode;
}
export default function Layout({ children }: Props) {
  return (
    <>
      <Header />
      <main className={`flex min-h-screen flex-col px-32`}>
        {children}
      </main>
    </>
  )
}