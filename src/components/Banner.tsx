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


export function VideoBanner(props: IBannerProps) {
  return (
    <div className="relative w-full flex lg:h-screen overflow-hidden">
      {/* Background Video */}
      <video
        src={props.image as string}
        className="w-full h-[500px] lg:h-screen object-cover"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/60 to-transparent z-20"></div>

      {/* Floating Shapes Overlay */}
      {/*<motion.div
        className="absolute w-64 h-64 bg-blue-500/20 rounded-full top-20 left-10 z-10"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-72 h-72 bg-purple-500/20 rounded-full bottom-10 right-20 z-10"
        animate={{ y: [0, -20, 0], x: [0, 15, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />*/}

      {/* Main Content */}
      {props.children}

      {/* Subtle Bottom Fade */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-gray-900/70 to-transparent z-30"></div>
    </div>
  );
}

