import Image from "next/image";
import LinkButton from "@/components/link";

export default function Home() {
  return (
    <>
      <main className="container m-auto">
        <article>
          <section className="py-8 px-4">
            <h1><Image src="/images/logo.png" alt="logo" width={1920} height={1080} className="object-cover w-full h-full" /></h1>
            <LinkButton href="/judge" addClass="mt-8" addLinkClass="px-4 py-2 md:px-8 md:py-4">審査員紹介</LinkButton>
          </section>
        </article>
      </main>
      <footer className="text-black md:text-white text-xl my-4">©第5回RUNTEQ祭運営</footer>
    </>
  );
}
