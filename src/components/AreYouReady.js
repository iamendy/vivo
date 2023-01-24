import {motion} from "framer-motion";

const AreYourReady = () => {
  return (
    <div className="ayr container md:flex md:items-center rounded-sm md:justify-between overflow-hidden">

      <div className="text-white text-center md:w-[200px] md:ml-12">
        <p className="font-bold text-2xl mb-7 pt-16 md:leading-9 md:text-2xl"> Are You Ready To Get Started? </p>
        <a href="#" className="w-[30px] mx-auto border border-white rounded-lg text-xs px-6 py-4"> Trade Now</a>
      </div>

      <div className="mt-20 flex items-center justify-center md:flex-4 items-end">
        <img src="/img/small-preview.png" alt="app preview" className="transform translate-y-[10%]"/>
        <img src="/img/big-preview.png" alt="app preview" className="hidden lg:block lg:ml-5"/>
      </div>

    </div>
  );
};

export default AreYourReady;
