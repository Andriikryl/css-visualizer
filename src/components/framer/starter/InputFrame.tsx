import style from "./style.module.css";
interface InputProps {
  children: string;
  value: number;
  set: (newValue: number) => void;
  min?: number;
  max?: number;
}

export function InputFrame({
  value,
  children,
  set,
  min = -500,
  max = 500,
}: InputProps) {
  return (
    <label className={style.label__box}>
      <code className={style.label}>{children}</code>
      <input
        value={value}
        type="range"
        min={min}
        max={max}
        onChange={(e) => set(parseFloat(e.target.value))}
      />
      <input
        type="number"
        value={value}
        min={min}
        max={max}
        onChange={(e) => set(parseFloat(e.target.value) || 0)}
      />
    </label>
  );
}
