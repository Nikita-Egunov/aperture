import { Button } from "@/shared"
import { Gallery, Header } from "@/widgets"
import { CardProps } from "@/widgets/gallery/lib"
import { Hero } from "@/widgets/hero"
import { Head, Metadata } from "minista"

export const metadata: Metadata = {
  title: "Home",
}
export default function () {
  const cards: CardProps[] = [
    {
      imgUrl: '/src/assets/images/card.png',
      text: 'Cras commodo consequat orci, in convallis risus egestas non. Nulla efficitur auctor hendrerit. Etiam ut orci varius, faucibus libero ac, cursus quam.',
      title: 'Product Photography',
      url: '/'
    },
    {
      imgUrl: '/src/assets/images/card.png',
      text: 'Cras commodo consequat orci, in convallis risus egestas non. Nulla efficitur auctor hendrerit. Etiam ut orci varius, faucibus libero ac, cursus quam.',
      title: 'Product Photography',
      url: '/'
    },
    {
      imgUrl: '/src/assets/images/card.png',
      text: 'Cras commodo consequat orci, in convallis risus egestas non. Nulla efficitur auctor hendrerit. Etiam ut orci varius, faucibus libero ac, cursus quam.',
      title: 'Product Photography',
      url: '/'
    },
    {
      imgUrl: '/src/assets/images/card.png',
      text: 'Cras commodo consequat orci, in convallis risus egestas non. Nulla efficitur auctor hendrerit. Etiam ut orci varius, faucibus libero ac, cursus quam.',
      title: 'Product Photography',
      url: '/'
    },
  ]
  return (
    <>
      <Header />
      <Hero
        h1Title="Aperture Studios"
        imgUrl="/src/assets/images/hero.png"
        topTitle="Photographer & Filmmaker"
        subTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere."
      />
      <Gallery cards={cards} h2='What we do.' text="The areas that we're specialized in." />
    </>
  )
}
