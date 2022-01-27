import { useState } from "react";
import { IoAdd } from "react-icons/io5";
import style from "./index.module.css";

interface SearchBarProps {
  onSearch: (name: string) => void;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  const [value, setValue] = useState("");
  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSearch(value);
    setValue("");
  };

  return (
    <form className={style.container} onSubmit={handleOnSubmit}>
      <input
        className={style.input}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Ciudad..."
        type="text"
        value={value}
      />
      <button className={style.button}>
        <IoAdd />
      </button>
    </form>
  );
}
