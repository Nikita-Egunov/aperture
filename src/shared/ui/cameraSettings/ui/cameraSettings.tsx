import { CameraSetting, CameraSettingProps } from "../lib"

type CameraSettingsProps = {
  cameraSettings: CameraSettingProps[]
  className?: string
}

export default function CameraSettings({ cameraSettings, className }: CameraSettingsProps) {
  return (
    <div className={`grid grid-cols-2 md:flex items-center gap-4 w-fit ${className ? className : ""}`} >
      {
        cameraSettings.map(({ iconId, text }, index) => (
          <CameraSetting key={index} iconId={iconId} text={text} />
        ))
      }
    </div>
  )
}