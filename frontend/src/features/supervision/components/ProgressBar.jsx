export default function ProgressBar({ value = 0 }) {
  return (
    <div className="flex items-center gap-2">
      <div role="progressbar" aria-valuenow={value} aria-valuemin="0" aria-valuemax="100" className="h-2 w-40 rounded bg-slate-200">
        <div className="h-2 rounded bg-brand" style={{ width: `${value}%` }} />
      </div>
      <span className="text-sm">{value} %</span>
    </div>
  );
}
