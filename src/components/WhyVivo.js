import Card from "./Card";
import data from "../data";

const WhyVivo = () => {
  return (
    <div className="container text-white mt-12 sm:mt-5 sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:gap-2 xl:gap-4 py-9 2xl:py-32">

      <div className="why card flex justify-center items-center w-full font-bold rounded-[10px] ">
        Why Vivo Protocol
      </div>

      {data.map((d, i) => (
        <Card key={i} title={d.title} img={d.img} text={d.text} />
      ))}
    </div>
  );
};

export default WhyVivo;
