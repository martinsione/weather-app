import CardContainer from "@/components/CardContainer";
import SearchBar from "@/components/SearchBar";
import { DataProps } from "@/types";
import { useState } from "react";
import style from "./index.module.css";

export default function App() {
  const [cities, setCities] = useState<DataProps[]>([]);

  const handleOnSearch = (city: string) => {
    const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
    const API_URL = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    fetch(API_URL)
      .then((data) => data.json())
      .then((data) => {
        if (data.cod === "404") {
          alert(`The city named "${city}" was not found.`);
        } else {
          setCities((prevState) => [...prevState, data]);
        }
      })
      .catch((data) => alert(`Error ${data.cod}.`));
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
