interface CardProps {
  name: string;
  max: number;
  min: number;
  img: string;
  onClose: () => void;
}

export default function Card({ name, max, min, img, onClose }: CardProps) {
  return (
    <div>
      <h3>{name}</h3>
      <div>
        <p>Min {min}</p>
      </div>
      <div>
        <p>Max {max}</p>
      </div>
      <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt="" />
      <button onClick={onClose}>X</button>
    </div>
  );
}
