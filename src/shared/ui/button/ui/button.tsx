import { Icon } from "minista"

type Props = {
  url: string
  children?: React.ReactNode
  size: 'small' | 'medium'
  text?: string
  className?: string
}

export default function Button({ url, children, size, text, className }: Props) {
  return (
    <a href={url} className={`max-w-fit
     rounded-[14px]
      bg-white
       text-black
        flex
         items-center
          gap-1.5 
          ${size === 'small' && 'p-1'}
          ${size === 'medium' && 'px-5 py-[11px]'}
          ${className}
    `}>
      {children ? children : <Icon className="w-[32px] block aspect-square" iconId="btn-icon" />}
      {text}
    </a>
  )
}