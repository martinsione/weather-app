import { HTMLAttributes } from "react";

interface IProps extends HTMLAttributes<HTMLElement> {
  label: string;
  temp: number;
}

export default function TempWidget({ label, temp, ...props }: IProps) {
  return (
    <div {...props}>
      <p>{label}</p>
      <span>{Math.round(temp)}</span>
    </div>
  );
}
