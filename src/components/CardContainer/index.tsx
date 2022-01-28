import Card from "@/components/Card";
import { DataProps } from "@/types";
import { Link } from "react-router-dom";
import style from "./index.module.css";

interface CardContainerProps {
  cities: DataProps[];
  onClose: (id: number) => void;
}

export default function CardContainer({ cities, onClose }: CardContainerProps) {
  return (
    <div className={style.container}>
      {cities.map((city: DataProps) => (
        <Link to={`/city/${city.id}`}>
          <Card
            key={city.id}
            max={city.main.temp_max}
            min={city.main.temp_min}
            name={city.name}
            img={city.weather[0].icon}
            onClose={() => onClose(city.id)}
          />
        </Link>
      ))}
    </div>
  );
}
