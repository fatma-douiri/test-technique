import { useState } from 'react';

export default function AcceptCGU({ label, onChange }:{ label: string; onChange?: (value: boolean) => void }) {
  const [checked, setChecked] = useState(false);
  return (
    <label className="flex gap-2 items-center">
      <input type="checkbox" checked={checked} onChange={e => {setChecked(e.target.checked)
         onChange?.(e.target.checked);
      }} />
      {label}
    </label>
  );
}
