import Button from "./Button";

// Fenêtre de dialogue. Sans onConfirm, elle sert de conteneur (ex. formulaire).
export default function Modal({ open, title, onClose, onConfirm, confirmLabel = "Confirmer", children }) {
  if (!open) return null;
  return (
    <div role="dialog" aria-modal="true" className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
      <div className="w-full max-w-md space-y-4 rounded-lg bg-white p-5">
        <h2 className="text-lg font-semibold">{title}</h2>
        <div className="text-sm">{children}</div>
        <div className="flex justify-end gap-2">
          <Button variant="outline" type="button" onClick={onClose}>Annuler</Button>
          {onConfirm && <Button variant="danger" type="button" onClick={onConfirm}>{confirmLabel}</Button>}
        </div>
      </div>
    </div>
  );
}
