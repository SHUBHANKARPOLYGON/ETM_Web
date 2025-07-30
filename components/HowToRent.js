import { GrMap } from "react-icons/gr";
import { AiOutlineQrcode } from "react-icons/ai";
import { MdOutlineDirectionsBike } from "react-icons/md";

function Card(props) {
  return (
    <div className="card">
      <div className="card__icon">{props.icon}</div>
      <h1 className="card__title">{props.title}</h1>
      <h2 className="card__details">{props.details}</h2>
    </div>
  );
}

export default function HowToRent() {
  return (
    <div className="w-full">
      <div className="container mx-auto pt-20">
        <h1 className="font-[Joyride] text-3xl md:text-4xl font-bold overflow-hidden">
          Start your savings
        </h1>
        <div className="flex justify-center">
          <div className=" ">
            <img src="/coon.jpeg" alt="Step how to join us" />
          </div>
        </div>
      </div>
    </div>
  );
}
