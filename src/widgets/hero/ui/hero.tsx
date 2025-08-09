import { CameraSettings } from "@/shared"
import { Image } from "minista"

type Props = {
  imgUrl: string
  h1Title: string
  topTitle?: string
  subTitle?: string
}


export default function Hero({ imgUrl, h1Title, topTitle, subTitle }: Props) {
  const cameraSettings = [
    { iconId: 'clock', text: '1/2000s' },
    { iconId: 'camera', text: 'f/11' },
    { iconId: 'iso', text: '100' },
    { iconId: 'geo', text: 'Iceland' },
  ]

  return (
    <section className="relative min-h-[716px] px-2.5 md:px-10 flex flex-col justify-center xl:justify-end items-center pb-10">
      <Image
        className="absolute top-0 left-0 w-full h-full -z-10"
        src={imgUrl}
        alt="hero background"
        height={716}
      />
      <div className="max-w-[600px] text-center text-[#c0c0c0] mb-2.5">
        <p className="uppercase text-center">{topTitle}</p>
        <h1 className="text-white">{h1Title}</h1>
        <p>{subTitle}</p>
      </div>

      <CameraSettings className="absolute bottom-0 md:right-[40px] flex-wrap" cameraSettings={cameraSettings} />
    </section>
  )
}