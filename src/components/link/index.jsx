import Link from "next/link";
import Star from "@/components/star";
import Styles from "./style.module.css";

export default function LinkButton({ children, href, addClass = "", addLinkClass = "", target = false }) {
  return (
    <div className={`flex justify-center items-center ${addClass}`}>
      <Link href={href} className={`${Styles.button} ${addLinkClass}`} target={target ? "_blank" : undefined} rel={target ? "noopener noreferrer" : undefined}>
        {children}
        <Star className={Styles.star1} />
        <Star className={Styles.star2} />
        <Star className={Styles.star3} />
        <Star className={Styles.star4} />
        <Star className={Styles.star5} />
        <Star className={Styles.star6} />
      </Link>
    </div>
  );
}