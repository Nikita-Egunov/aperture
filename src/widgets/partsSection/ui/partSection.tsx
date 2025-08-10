import { Button, CameraSettingProps, CameraSettings } from "@/shared"
import { Image } from "minista"

type PartSectionProps = {
  topTitle: string,
  title: string,
  text: string,
  cameraSettings: CameraSettingProps[]
  imgUrl: string
  url: string
  btnText: string
}

export default function PartSection({
  topTitle,
  title,
  text,
  cameraSettings,
  imgUrl,
  url,
  btnText
}: PartSectionProps) {
  return (
    <section className="relative" id="tools">
      <div className="lg:flex min-h-[540px]">
        <div className="flex flex-1/2 flex-col justify-center mx-[10px] md:mx-[100px] my-[100px] md:my-[150px]">
          <p className="uppercase text-neutral-300 tracking-[0.14em]">{topTitle}</p>
          <h2 className="mt-[6px]">{title}</h2>
          <p className="mt-[14px]">{text}</p>
          <Button className="mt-[20px]" size="small" url={url} text={btnText} />
        </div>
        <div className="relative min-h-[540px] flex-1/2">
          <Image className="absolute top-0 right-0 h-full w-full -z-10 object-center object-cover" src={imgUrl} alt={title} />
          <CameraSettings className="absolute bottom-[40px] right-[40px]" cameraSettings={cameraSettings} />
        </div>
      </div>
    </section>
  )
}