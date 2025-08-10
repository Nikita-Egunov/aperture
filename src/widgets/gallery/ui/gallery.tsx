import { Card, type CardProps } from "../lib"

type GalleryProps = {
  h2: string,
  text: string,
  cards?: CardProps[]
}

export default function Gallery({ h2, text, cards }: GalleryProps) {

  return (
    <section id="gallery" className="container mt-[120px] mb-[100px]">
      <h2 className="text-center">What we do.</h2>
      <p className="text-neutral-300 text-center">The areas that we're specialized in.</p>
      <div className="mt-[42px] grid grid-cols-1 justify-items-center xl:grid-cols-2 gap-4">
        {cards.map(({ imgUrl, text, title, url }: CardProps, index) => (
          <Card
            imgUrl={imgUrl}
            text={text}
            title={title}
            url={url}
            key={index}
          />
        ))}
      </div>
    </section>
  )
}