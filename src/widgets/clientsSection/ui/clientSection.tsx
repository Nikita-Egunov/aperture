import { Client, ClientProps } from "../lib"


type ClientSectionProps = {
  title: string,
  subTitle: string,
  clients: ClientProps[]
}
export default function ClientSection({
  title,
  subTitle,
  clients
}: ClientSectionProps) {
  return (
    <section id="clients">
      <div className="container m-[120px] mb-[100px]">
        <h2 className="text-center">{title}</h2>
        <p className="text-center text-neutral-300 text-[24px]">{subTitle}</p>
        <div className="mt-[40px] flex flex-col md:flex-row md:justify-between items-center p-[40px] gap-[10px] md:flex-wrap">
          {clients.map(({ imageUrl }: ClientProps) => (
            <Client imageUrl={imageUrl} />
          ))}
        </div>
      </div>
    </section>
  )
}