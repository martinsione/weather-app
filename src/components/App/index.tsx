import Card from "@/components/Card";
import CardContainer from "@/components/CardContainer";
import SearchBar from "@/components/SearchBar";
import data, { Cairns } from "@/data";

export default function App() {
  return (
    <div>
      <div>
        <Card
          max={Cairns.main.temp_max}
          min={Cairns.main.temp_min}
          name={Cairns.name}
          img={Cairns.weather[0].icon}
          onClose={() => alert(Cairns.name)}
        />
      </div>
      <hr />
      <div>
        <CardContainer cities={data} />
      </div>
      <hr />
      <div>
        <SearchBar onSearch={(ciudad) => alert(ciudad)} />
      </div>
    </div>
  );
}
