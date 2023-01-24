import {motion} from "framer-motion";
import {textVariant} from "../utils/motion";

const Navbar = () => {

  return (
    <motion.nav
      className="container bg-transparent relative flex items-center justify-between py-7"
      animate={{y: 0}} initial={{y: -100}} transition={{delay: .3, type: "spring"}}
    >
      <img src="/img/logo.svg" alt="logo"/>

      <div className="mobile-toggle sm:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" fill="#ffffff" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
        </svg>
      </div>

      {/*For non-mobile menu*/}
      <div className="text-xs hidden sm:block">
        <a href="#">Why Vivo</a>
        <a href="#" className="sm:ml-7 md:ml-9 p-3 nav-trade-btn bg-pink rounded-sm ">Trade now</a>
      </div>

      {/*For mobile menu*/}
      <div className="mobile-menu bg-[#29293A] absolute left-0 top-[100%] w-full h-[150px] hidden">
        <div className="flex flex-col w-full items-center p-9 h-full text-white">
          <a href="#" className=" px-5 py-3"> Why Vivo </a>
          <a href="#" className="bg-[#E92E5B] px-5 py-3 mt-2 rounded-sm"> Trade </a>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;