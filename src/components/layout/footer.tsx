import { Logo } from "@/components/icons";
import { socialLinks } from "@/data";
import Signature from "./signature";

const tones = {
  ink: {
    band: "bg-ink text-white",
    social: "hover:text-accent focus-visible:outline-white",
    credit: "text-white/60",
    creditLink: "text-white",
  },
  accent: {
    band: "bg-accent text-ink",
    social: "hover:text-white focus-visible:outline-ink",
    credit: "text-ink/80",
    creditLink: "text-ink",
  },
};

type Props = {
  tone: keyof typeof tones;
};

export default function Footer({ tone }: Props) {
  const { band, social, credit, creditLink } = tones[tone];

  return (
    <footer
      className={`relative px-8 py-12 md:px-10 md:py-14 lg:py-20 ${band}`}
    >
      <div className="mx-auto flex max-w-277.5 flex-col md:flex-row md:items-start">
        <Logo className="h-10 w-auto shrink-0 self-start lg:h-14.5" />
        <p className="mt-9.5 text-body-xs md:mt-0 md:ml-16 md:max-w-70.25 lg:ml-35 lg:max-w-107.5 lg:text-body-s">
          The Modern Art Gallery is free to all visitors and open seven days a
          week from 8am to 9pm. Find us at 99 King Street, Newport, USA.
        </p>
        <ul className="mt-9.5 flex items-center gap-5 md:mt-0 md:ml-auto">
          {socialLinks.map(({ label, href, icon: Icon }) => (
            <li key={label} className="flex">
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className={`relative flex after:absolute after:-inset-2.5 focus-visible:outline-2 focus-visible:outline-offset-4 ${social}`}
              >
                <Icon className="transition-colors" />
              </a>
            </li>
          ))}
        </ul>
      </div>
      <Signature className={credit} linkClassName={creditLink} />
    </footer>
  );
}
