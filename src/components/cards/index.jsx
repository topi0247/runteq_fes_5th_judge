import Image from "next/image";
import LinkButton from "@/components/link";

export default function Cards({ name, term, img, id }) {
  return (
    <section className="px-4 py-6">
      <div className="flex flex-col justify-center items-center gap-4">
        <h2 className="text-center text-2xl"><span className="text-base">{term}</span> {name}</h2>
        <Image src={img} alt="アプリ名" width={1000} height={800} className="object-cover w-full h-full" />
        <div className="flex justify-center items-center gap-4">
          <LinkButton href={`/judge/${id}`} addLinkClass="px-4 py-2">詳細</LinkButton>
        </div>
      </div>
    </section>
  )
}