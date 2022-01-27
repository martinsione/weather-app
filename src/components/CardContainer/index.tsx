import Card from "@/components/Card";
import { DataProps } from "@/data";

interface CardContainerProps {
  cities: DataProps[];
}

export default function CardContainer({ cities }: CardContainerProps) {
  return (
    <>
      {cities.map((city: DataProps) => (
        <Card
          key={city.name}
          max={city.main.temp_max}
          min={city.main.temp_min}
          name={city.name}
          img={city.weather[0].icon}
          onClose={() => alert(city.name)}
        />
      ))}
    </>
  );
}
