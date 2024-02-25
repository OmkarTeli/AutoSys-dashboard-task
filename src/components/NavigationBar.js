import React, { Children, useState } from "react";
import Logo from "../assets/money.png";
import { motion } from "framer-motion";
import {
  LayoutDashboard,
  Clock3,
  BarChart2,
  ArrowRightLeft,
  HelpCircleIcon,
  ChevronRightCircle,
} from "lucide-react";
import { NavLink } from "react-router-dom";
import "../component.css";

const navLinks = [
  {
    path: "/",
    name: "Dashboard",
    icon: LayoutDashboard,
  },
  {
    path: "/analytics",
    name: "Analytics",
    icon: BarChart2,
  },
  {
    path: "/tasks",
    name: "Tasks",
    icon: Clock3,
  },
  {
    path: "/transactions",
    name: "Transactions",
    icon: ArrowRightLeft,
  },
  {
    path: "/help",
    name: "Help",
    icon: HelpCircleIcon,
  },
];

const variants = {
  expaded: { width: "20%" },
  nonExpanded: { width: "5%" },
};

const NavigationBar = ({ Children }) => {
  const [activeNav, setActiveNav] = useState(0);
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <>
      <motion.div
        animate={isExpanded ? "expanded" : "nonExpanded"}
        variants={variants}
        className={
          "py-1 flex flex-col border border-r-1 w-1/5 h-screen relative " +
          (isExpanded ? "px-10" : "px-2")
        }
      >
        {/* <div className="logo-div flex space-x-3 items-center">
          <img src={Logo} />
          <span className={isExpanded ? "block" : "hidden"}>Money</span>
        </div> */}

        <div
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-7 h-7 gradient rounded-full absolute -right-4 top-[87px] flex items-center justify-center white"
        >
          <ChevronRightCircle class={"text-white"} />
        </div>

        <div className="mt-10 flex flex-col space-y-8">
          {navLinks.map((item, index) => (
            <NavLink
              to={item.path}
              key={index}
              className={
                "flex space-x-3 p-2 rounded" +
                (activeNav === index
                  ? " gradient text-white font-semibold"
                  : "")
              }
              onClick={() => setActiveNav(index)}
            >
              <item.icon />
              <span className={isExpanded ? "block" : "hidden"}>
                {item?.name}
              </span>
            </NavLink>
          ))}
        </div>
        {/* <main>{Children}</main> */}
      </motion.div>
    </>
  );
};

export default NavigationBar;
