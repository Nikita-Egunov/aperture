import { Button, Hero } from "@/shared"
import { ClientSection, Footer, Gallery, Header, PartSection, Photo } from "@/widgets"
import { type ClientProps } from "@/widgets/clientsSection/lib"
import { CardProps } from "@/widgets/gallery/lib"
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
      url: 'https://t.me/initJs/'
    },
    {
      imgUrl: '/src/assets/images/galley-1.png',
      text: 'Aenean porta neque eget consequat fringilla. Vestibulum ultrices, orci nec egestas pharetra, ligula est semper enim, nec auctor sapien leo nec purus. Fusce tincidunt aliquet sapien, sit amet rhoncus leo imperdiet nec.',
      title: 'Architecture Photography',
      url: 'https://t.me/initJs/'
    },
    {
      imgUrl: '/src/assets/images/gallery-2.png',
      text: 'Mauris euismod elit et nisi ultrices, ut faucibus orci tincidunt. Duis tristique sed lorem a vestibulum. Cras commodo consequat orci, in convallis risus egestas non. Nulla efficitur auctor hendrerit. Etiam ut orci varius, faucibus libero ac, cursus quam.',
      title: 'Drone Photography',
      url: 'https://t.me/initJs/'
    },
    {
      imgUrl: '/src/assets/images/gellery-3.png',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque aliquam odio et faucibus. Nulla rhoncus feugiat eros quis consectetur. Morbi neque ex, condimentum dapibus congue et, vulputate ut ligula. Vestibulum sit amet urna turpis.',
      title: 'Wildlife Photography',
      url: 'https://t.me/initJs/'
    },
  ]
  const cameraSettings = [
    { iconId: 'clock', text: '1/2000s' },
    { iconId: 'camera', text: 'f/11' },
    { iconId: 'iso', text: '100' },
    { iconId: 'geo', text: 'Iceland' },
  ]
  const clients = [
    { imageUrl: '/src/assets/images/clientLogo.png', },
    { imageUrl: '/src/assets/images/clientLogo-1.png', },
    { imageUrl: '/src/assets/images/client-logo-2.png', },
    { imageUrl: '/src/assets/images/clientLogo-3.png', },
    { imageUrl: '/src/assets/images/clientLogo-4.png', },
  ] as ClientProps[]
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
      <Photo
        cameraSettings={[
          { iconId: 'clock', text: '1"' },
          { iconId: 'camera', text: 'f/16' },
          { iconId: 'iso', text: '400' },
          { iconId: 'geo', text: 'Japan' },
        ]}
        h2="Sunset at Mount Fuji"
        text="Duis tristique sed lorem a vestibulum. Cras commodo consequat orci, in convallis risus egestas non."
        imgUrl="/src/assets/images/photo-1.png"
      />
      <PartSection
        btnText="Check it out"
        cameraSettings={
          [
            { iconId: 'clock', text: `0,8'` },
            { iconId: 'camera', text: 'f/5,6' },
            { iconId: 'iso', text: '100' },
            { iconId: 'geo', text: 'Sweden' },
          ]
        }
        imgUrl="/src/assets/images/tools.png"
        text={`The say that "no place is boring if you've had a good night's sleep and have a pocket full of unexposed film". While we don't shoot (a lot) of film these days — these are the tools that we actually use everyday to capture the amazing things around us.`}
        title="The tools that we use."
        topTitle="The Gear cage"
        url="https://t.me/initJs/"
      />
      <Photo
        cameraSettings={
          [
            { iconId: 'clock', text: `1/400s` },
            { iconId: 'camera', text: 'f/3,5' },
            { iconId: 'iso', text: '100' },
            { iconId: 'geo', text: 'Costa Rica' },
          ]
        }
        h2="Monstera Leafs"
        text="Vestibulum sit amet urna turpis. Mauris euismod elit et nisi ultrices, ut faucibus orci tincidunt."
        imgUrl="/src/assets/images/photo.png"
      />
      <ClientSection
        clients={clients}
        title="Past clients"
        subTitle="Trusted by your favourite companies"
      />
      <Photo
        cameraSettings={
          [
            { iconId: 'clock', text: `6"` },
            { iconId: 'camera', text: 'f/11' },
            { iconId: 'iso', text: '800' },
            { iconId: 'geo', text: 'Nepal' },
          ]
        }
        h2="Monstera Leafs"
        text="Vestibulum sit amet urna turpis. Mauris euismod elit et nisi ultrices, ut faucibus orci tincidunt."
        imgUrl="/src/assets/images/photo-2.png"
      />
      <Footer
        btnText="Get in touch"
        subTitle="We're here for you!"
        title="Need help with photography or videography?"
        url="https://t.me/initJs/"
      />
    </>
  )
}
