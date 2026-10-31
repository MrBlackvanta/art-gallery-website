export default function LocationIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="66"
      height="88"
      viewBox="0 0 66 88"
      aria-hidden="true"
      {...props}
    >
      <path d="M0 56V0h66v56H45L33 88 21 56H0Z" className="fill-ink" />
      <circle cx="33" cy="28" r="12" className="fill-accent" />
    </svg>
  );
}
