import CardContainer from "@/components/CardContainer";
import SearchBar from "@/components/SearchBar";
import { DataProps } from "@/types";
import { useState } from "react";
import style from "./index.module.css";

export default function App() {
  const [cities, setCities] = useState<DataProps[]>([]);

  const handleOnSearch = (city: string) => {
    const API_KEY = "f6dbe048de2b741234ad3e20e9d74c54";
    const API_URL = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    fetch(API_URL)
      .then((res) => res.json())
      .then((res) => {
        if (res.cod === "404") {
          alert(`The city named "${city}" was not found.`);
        } else {
          setCities([...cities, res]);
        }
      })
      .catch((res) => alert(`Error ${res.cod}.`));
  };

  const handleOnClose = (id: number) => {
    setCities((oldCities) => oldCities.filter((city) => city.id != id));
  };

  return (
    <div className={style.background}>
      <div className={style.blur}>
        <div className={style.main}>
          <div>
            <SearchBar onSearch={handleOnSearch} />
          </div>
          <div className={style.citiesContainer}>
            <CardContainer cities={cities} onClose={handleOnClose} />
          </div>
        </div>
      </div>
    </div>
  );
}
