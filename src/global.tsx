import { GlobalProps, Head, Metadata } from "minista";
import '@/shared/styles/index.css'


export default function ({ url, title, children }: GlobalProps) {
  return (
    <>
      <Head
        htmlAttributes={{ lang: "en" }}
      >
        <title>{title}</title>
        <meta property="description" content="description" />
      </Head>
      {children}
    </>
  )
}