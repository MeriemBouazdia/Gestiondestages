import StageCard from "./StageCard";

export default function StageList({ stages, role, onDelete }) {
  return (
    <ul className="grid gap-4 md:grid-cols-2">
      {stages.map((s) => <StageCard key={s.id} stage={s} role={role} onDelete={onDelete} />)}
    </ul>
  );
}
