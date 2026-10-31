type Props = {
  className: string;
  linkClassName: string;
};

export default function Signature({ className, linkClassName }: Props) {
  return (
    <p
      className={`absolute inset-x-0 bottom-0.5 text-center text-xs ${className}`}
    >
      Coded by{" "}
      <a
        href="https://www.linkedin.com/in/abdelrhman-vanta/"
        target="_blank"
        rel="noopener noreferrer"
        className={`underline underline-offset-2 ${linkClassName}`}
      >
        Abdelrhman Abdelaal
      </a>
      .
    </p>
  );
}
