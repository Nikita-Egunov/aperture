import { Button } from "@/shared"

export default function NavMenu() {
  const menuItems = [
    { text: 'Business areas', href: '/' },
    { text: 'Featured images', href: '/' },
    { text: 'Gear cage', href: '/' },
    { text: 'Contact', href: '/' },
    { text: 'Get template', href: '/' },
  ]
  return (
    <nav className="">
      <ul className="flex items-center gap-[31px]">
        {menuItems.map(({ text, href }, index) => {
          if (index === menuItems.length - 1) {
            return (
              <Button key={index} url={href} size="medium">
                {text}
              </Button>
            )
          }
          return (
            <a href={href} key={index} className="hidden lg:block">
              {text}
            </a>
          )
        })}
      </ul>
    </nav>
  )
}