import { Icon } from "minista"

export type CameraSettingProps = {
  iconId: string,
  text: string
}

export default function CameraSetting({ iconId, text }: CameraSettingProps) {
  return (
    <span className="flex items-center gap-1.5 text-[12px]">
      <Icon className="w-[30px] aspect-square block fill-white" iconId={iconId} />
      {text}
    </span>
  )
}