import Link from "next/link";
import {
  RiPhoneLine,
  RiWhatsappLine
} from "react-icons/ri";

export default function HoverContact() {
  return (
    <div className="flex gap-5 bottom-14 left-5 z-40 fixed bottom text-white lg:bottom-5">
      <Link
        href={`tel:+919885786628`}
        target="_blank"
        className="p-2 w-fit h-fit aspect-square rounded-full bg-[royalblue]"
      >
        <RiPhoneLine size={24} />
      </Link>

      <Link
        href={`https://wa.me/${9885786628}`}
        target="_blank"
        className="p-2 w-fit h-fit aspect-square rounded-full bg-secondary"
      >
        <RiWhatsappLine size={24} />
      </Link>
    </div>
  );
}
