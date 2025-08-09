import { Image } from "minista";

export default function Logo(
  { imgUrl }: { imgUrl: string }
) {
  return (
    <a href="/" className="flex items-center justify-center">
      <Image src={imgUrl} />
    </a>
  )
}