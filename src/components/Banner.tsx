import Image, { StaticImageData } from "next/image";

interface IBannerProps extends React.PropsWithChildren {
  title: string;
  image: StaticImageData | string;
}

export default function Banner(props: IBannerProps) {
  return (
    <div className="relative w-full lg:h-[660px]">
      <Image
        src={props.image}
        alt={props.title}
        priority
        height={1000}
        width={1000}
        className="w-full h-[300px] lg:h-[660px] object-cover"
      />
      <div className="absolute bg-black/40 w-full h-full top-0 left-0 z-20"></div>
      <div className="flex absolute top-0 left-0 w-full h-full z-40 container">
        {props.children}
      </div>
    </div>
  );
}
