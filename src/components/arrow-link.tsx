import Link from "next/link";
import { ArrowLeftIcon, ArrowRightIcon } from "./icons";

type Props = {
  href: string;
  direction: "forward" | "back";
  children: React.ReactNode;
  className?: string;
};

export default function ArrowLink({
  href,
  direction,
  children,
  className = "",
}: Props) {
  const arrow = (
    <span className="grid w-14 place-items-center bg-accent transition-colors group-hover/arrow-link:bg-ink">
      {direction === "forward" ? <ArrowRightIcon /> : <ArrowLeftIcon />}
    </span>
  );

  return (
    <Link
      href={href}
      className={`group/arrow-link flex h-18 w-fit font-display text-button text-white uppercase focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink ${className}`}
    >
      {direction === "back" && arrow}
      <span className="flex items-center bg-ink px-8 transition-colors group-hover/arrow-link:bg-accent-deep">
        {children}
      </span>
      {direction === "forward" && arrow}
    </Link>
  );
}
