import { Button } from "@/shared";

type FooterProps = {
  title: string;
  subTitle: string;
  btnText: string;
  url: string;
}

export default function Footer({
  title,
  subTitle,
  btnText,
  url
}: FooterProps) {
  return (
    <footer id="footer">
      <div className="container text-center my-[100px]">
        <div className="max-w-[600px] mx-auto flex flex-col items-center">
          <h2>{title}</h2>
          <p className="mt-[15px]">{subTitle}</p>
          <Button
            size="small"
            url={url}
            text={btnText}
            className="mt-[22px]"
          />
        </div>
      </div>
    </footer>
  );
}