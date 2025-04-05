import { useState } from "react";
import { FaBars } from "react-icons/fa";

const HeadCom = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full h-[80px] text-white flex items-center justify-between sm:static relative px-4">    
        <h1 className="md:text-5xl text-4xl uppercase font-bold">Taiyi</h1>
        <nav>
          <ul className={`sm:flex sm:flex-row flex-col list-none py-2 sm:py-0 sm:static absolute top-full left-0 sm:w-auto w-full sm:bg-inherit bg-[#2e313f] ${isOpen ? "block" : "hidden"}`}>
            <li id="#heroSection" className="px-4 py-2 sm:text-xl text-lg cursor-pointer hover:text-gray-300">Home</li>
            <li className="px-4 py-2 sm:text-xl text-lg cursor-pointer hover:text-gray-300">About</li>
            <li className="px-4 py-2 sm:text-xl text-lg cursor-pointer hover:text-gray-300">Projects</li>
            <li className="px-4 py-2 sm:text-xl text-lg cursor-pointer hover:text-gray-300">Contact</li>
          </ul>
          <FaBars className="sm:hidden block text-xl cursor-pointer" onClick={() => setIsOpen(!isOpen)}/> 
        </nav>
    </header>
  );
};

export default HeadCom;
