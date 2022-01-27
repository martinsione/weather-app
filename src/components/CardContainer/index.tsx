import Card from "@/components/Card";
import { DataProps } from "@/types";

interface CardContainerProps {
  cities: DataProps[];
  onClose: (id: number) => void;
}

export default function CardContainer({ cities, onClose }: CardContainerProps) {
  return (
    <>
      {cities.map((city: DataProps) => (
        <Card
          key={city.id}
          max={city.main.temp_max}
          min={city.main.temp_min}
          name={city.name}
          img={city.weather[0].icon}
          onClose={() => onClose(city.id)}
        />
      ))}
    </>
  );
}
