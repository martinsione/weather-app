import Card from "@/components/Card";
import CardContainer from "@/components/CardContainer";
import SearchBar from "@/components/SearchBar";
import data from "@/data";
import style from "./index.module.css";

export default function App() {
  return (
    <div className={style.background}>
      <div className={style.blur}>
        <div className={style.main}>
          <div>
            <SearchBar onSearch={(ciudad) => alert(ciudad)} />
          </div>
          <div className={style.citiesContainer}>
            <CardContainer cities={data} />
          </div>
        </div>
      </div>
    </div>
  );
}
