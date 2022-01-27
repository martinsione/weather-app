import { IoAdd } from "react-icons/io5";
import style from "./index.module.css";

interface SearchBarProps {
  onSearch: (name: string) => void;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  return (
    <div className={style.container}>
      <input className={style.input} type="text" placeholder="Ciudad..." />
      <button className={style.button} onClick={() => onSearch("Parana")}>
        <IoAdd />
      </button>
    </div>
  );
}
