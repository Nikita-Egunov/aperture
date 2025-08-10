import { Image } from "minista";

export type ClientProps = {
  imageUrl: string;
}
export default function Client({
  imageUrl,
}: ClientProps) {
  return (
    <span>
      <Image src={imageUrl}/>
    </span>
  );
}