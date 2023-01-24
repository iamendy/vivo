import {motion} from "framer-motion";
import {textVariant, textVariant2} from "../utils/motion";

const Hero = () => {
  return (
    <>
      <motion.div className="hero container relative mt-12 sm:mt-5 sm:flex sm:items-center">

        <div className="md:flex-[1.5] lg:flex-[2] items-center lg:space-y-5">
          <motion.p className="font-medium text-2xl
          sm:text-xl md:text-1xl lg:text-3xl
          lg:font-bold leading-10 mb-5 md:mb-0 lg:mt-0 2xl:text-3xl"
             variants={textVariant2} initial={"hidden"} animate={"show"}>
            The first multi-chain, <span className="fast font-bold">fast</span> and scalable perpetual <span className="underline"> futures vAMM </span>
          </motion.p>

          <motion.p className="text-xs leading-6 md:leading-5 mb-9 md:mb-3"
                    variants={textVariant(0.6)} initial={'hidden'} animate={"show"}
          >
            Vivo Protocol constantly offers new innovative products like NFT perpetual futures across multiple chains making us your one-stop for quick, fast and decentralised DEX trading.
          </motion.p>

          <motion.div className="r"
          animate={{x: 0}} initial={{x: 100}} transition={{duration: .5}}>
            <a href="#" className="trade-btn rounded-sm p-3 text-sm mx-auto md:text-xs">
              Trade Now
            </a>
          </motion.div>
        </div>

        <motion.div className="mt-10 md:flex-[2] lg:flex-[3]">
          <img src="/img/trading.png" alt="trading"/>
        </motion.div>

      </motion.div>

      <img src="/img/arrow-down.svg" alt="scroll down"
           className="w-12 h-12 absolute left-[50%] transform translate-x-[-50%]
                        top-[100%] translate-y-[-50%]"/>
    </>
  );
};

export default Hero;
