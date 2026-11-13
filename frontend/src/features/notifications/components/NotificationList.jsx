import Button from "../../../components/common/Button";

export default function NotificationList({ items, onRead }) {
  return (
    <ul className="space-y-2">
      {items.map((n) => (
        <li key={n.id} className={`flex items-center justify-between gap-3 rounded-lg p-4 shadow-sm ${n.lu ? "bg-white text-slate-500" : "bg-white font-medium"}`}>
          <span>{n.texte}</span>
          {!n.lu && <Button variant="outline" onClick={() => onRead(n.id)}>Marquer comme lue</Button>}
        </li>
      ))}
    </ul>
  );
}
