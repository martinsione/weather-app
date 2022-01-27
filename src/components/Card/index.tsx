import { IoCloseCircleOutline } from "react-icons/io5";
import style from "./index.module.css";

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
        <div className={style.temp}>
          <p>Min</p>
          <span>{Math.round(min)}</span>
        </div>
        <div className={style.temp}>
          <p>Max</p>
          <span>{Math.round(max)}</span>
        </div>
      </div>
    </div>
  );
}
