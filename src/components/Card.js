import {motion} from "framer-motion";
import {slideIn} from "../utils/motion";

const Card = ({title, text, img}) => {
  return (
    <div className="card border border-gray rounded-[10px] hover:bg-[#E92E5B4D]">
      <div className="flex items-center mb-3">
        <img src={img} alt={title} className="w-9 h-9"/>
        <h3 className="font-medium ml-3"> {title} </h3>
      </div>
      <p className="text-xs leading-[25px] 2xl:text-sm leading-loose">
        {text}
      </p>
    </div>
  );
};

export default Card;
