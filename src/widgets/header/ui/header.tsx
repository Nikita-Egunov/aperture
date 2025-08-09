import { Button, Logo } from "@/shared";
import { NavMenu } from "../lib";

export default function Header() {
  return (
    <header className="flex justify-between py-[20px] container">
      <Logo imgUrl="/src/assets/images/logo.png" />
      <NavMenu />
    </header>
  )
}