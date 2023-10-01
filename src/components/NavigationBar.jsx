import React, { useState } from "react";
import Logo from "./../assets/logo.png";
import RightArrow from "./../assets/icons/rightArrow.svg";
import { motion } from "framer-motion";
import {
  LayoutDashboard,
  Clock3,
  BarChart2,
  ArrowRightLeft,
  HelpCircleIcon,
} from "lucide-react";

const navLinks = [
  {
    name: "Dashboards",
    icon: LayoutDashboard,
  },
  {
    name: "Activity",
    icon: Clock3,
  },
  {
    name: "Analyst",
    icon: BarChart2,
  },
  {
    name: "Transactions",
    icon: ArrowRightLeft,
  },
  {
    name: "Help Center",
    icon: HelpCircleIcon,
  },
];

const variants = {
    expanded: { width: "20%"},
    nonExpanded: { width: '6%'}
}

const NavigationBar = () => {
  const [isActive, setIsActive] = useState(0);
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <motion.div
    // animate= {
    //     isExpanded ? "expanded" : "nonExpanded"
    // }
    // variants={variants}
    className={ `m-4 rounded-md py-12 flex flex-col border border-r-1  ${isExpanded?' w-1/5' : 'w-[5%] items-center'} h-screen relative ${isExpanded ? 'px-10': 'px-4'} transition`}>
      <div className="logo-div flex space-x-3 items-center cursor-pointer">
        <img src={Logo} alt="" />
        <span className={isExpanded ? "block" : "hidden"}>Money Tracker</span>
      </div>

      <div className=" bg-[#FF8C8C] text-white w-5 h-5 rounded-full absolute top-14 -right-[10.5px] flex items-center justify-center cursor-pointer hover:scale-110"
      onClick={()=> setIsExpanded(!isExpanded)}
      >
        <img src={RightArrow} className="w-[5px] " alt="" />

      </div>

      <div className="mt-10 flex flex-col space-y-8 ">
        {navLinks.map((item, index) => (
          <div
            key={index}
            className={
              "flex space-x-3 p-2 rounded cursor-pointer hover:scale-110 hover:shadow-sm" +
              (isActive === index
                ? " bg-[#FF8C8C] text-white font-semibold"
                : " ")
            }
            onClick={() => setIsActive(index)}
          >
            <item.icon size={25} />
            <span className={isExpanded ? "block" : "hidden"}>{item.name}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default NavigationBar;
