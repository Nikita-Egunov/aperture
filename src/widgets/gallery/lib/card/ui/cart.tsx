import { Button } from "@/shared"
import { Image } from "minista"

export type CardProps = {
  title: string
  text: string
  imgUrl: string,
  url: string
  className?: string
}

export default function Cart({ title, text, imgUrl, url, className }: CardProps) {
  return (
    <div className={`relative flex items-end p-[30px] min-h-[600px] max-w-[576px] ${className ? className : ""}`}>
      <Image className="absolute top-0 left-0 -z-10 object-cover object-center h-full w-full" src={imgUrl} alt={title} />
      <div>
        <h3 className="uppercase tracking-[0.14em]">{title}</h3>
        <p className="text-[#c0c0c0]">{text}</p>
        <Button className="mt-[10px]" size="small" url={url} text="More info" />
      </div>
    </div>
  )
}