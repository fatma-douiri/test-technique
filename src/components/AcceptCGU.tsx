import { useState } from 'react';

export default function AcceptCGU({ label }: { label: string }) {
  const [checked, setChecked] = useState(false);
  return (
    <label className="flex gap-2 items-center">
      <input type="checkbox" checked={checked} onChange={e => setChecked(e.target.checked)} />
      {label}
    </label>
  );
}
