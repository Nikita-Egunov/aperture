import { CameraSettingProps, CameraSettings } from "@/shared"
import { Image } from "minista"

type PhotoProps = {
  imgUrl: string,
  h2: string,
  text: string,
  cameraSettings: CameraSettingProps[]
}
export default function Photo({
  imgUrl, h2, text, cameraSettings
}: PhotoProps) {
  return (
    <section className="relative">
      <Image className="-z-10 absolute top-0 object-cover object-center h-full w-full" src={imgUrl} alt={h2} />
      <div className="container flex flex-col items-end justify-center min-h-[600px]">
        <div className="max-w-[300px]">
          <h2 className="[font-size:14px!important] tracking-[0.14em] uppercase">{h2}</h2>
          <p className="text-neutral-300">{text}</p>
        </div>
        <CameraSettings className="absolute bottom-[40px] right-[40px]" cameraSettings={cameraSettings} />
      </div>
    </section>
  )
}