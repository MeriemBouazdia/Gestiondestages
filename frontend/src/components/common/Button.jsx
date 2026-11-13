const VARIANTS = {
  primary: "bg-brand text-white hover:opacity-90",
  outline: "border hover:bg-slate-50",
  danger: "bg-rose-600 text-white hover:opacity-90",
};

export default function Button({ variant = "primary", className = "", ...props }) {
  return (
    <button
      className={`rounded px-3 py-1.5 text-sm font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-brand disabled:opacity-60 ${VARIANTS[variant]} ${className}`}
      {...props}
    />
  );
}
