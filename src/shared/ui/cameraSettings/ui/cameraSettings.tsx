import { CameraSetting } from "../lib"

type CameraSettingsProps = {
  cameraSettings: {
    iconId: string
    text: string
  }[]
  className?: string
}

export default function CameraSettings({ cameraSettings, className }: CameraSettingsProps) {
  return (
    <div className={`grid grid-cols-2 md:flex items-center gap-4 w-fit ${className}`} >
      {
        cameraSettings.map(({ iconId, text }, index) => (
          <CameraSetting key={index} iconId={iconId} text={text} />
        ))
      }
    </div>
  )
}