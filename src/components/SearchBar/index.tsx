interface SearchBarProps {
  onSearch: (name: string) => void;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  return (
    <div>
      <input type="text" placeholder="Ciudad..." />
      <button onClick={() => onSearch("Parana")}>Agregar</button>
    </div>
  );
}
