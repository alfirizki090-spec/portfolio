export const ArrowUpRight = ({ className, ...props }: React.ComponentPropsWithoutRef<'svg'>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`w-4 h-4 ${className || ""}`}
    >
      <path d="M7 17L17 7M7 7h10v10" />
    </svg>
  );
}