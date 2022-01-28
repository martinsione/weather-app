import { IoCloseCircleOutline } from "react-icons/io5";
import style from "./index.module.css";
import TempWidget from "./TempWidget";

interface CardProps {
  name: string;
  max: number;
  min: number;
  img: string;
  onClose: () => void;
}

export default function Card({ name, max, min, img, onClose }: CardProps) {
  return (
    <div className={style.container}>
      <div className={style.header}>
        <h3 className={style.name}>{name}</h3>
        <button className={style.button} onClick={onClose}>
          <IoCloseCircleOutline />
        </button>
      </div>
      <div>
        <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt="" />
      </div>
      <div className={style.tempContainer}>
        <TempWidget className={style.temp} label="Min" temp={min} />
        <TempWidget className={style.temp} label="Max" temp={max} />
      </div>
    </div>
  );
}
