// import Image from "next/image";
import {IoLogoReact } from "react-icons/io5";
import SidebarMenuItem from "./SidebarMenuItem";
import { SiComicfury } from "react-icons/si";

const menuItem = [
  // {
  //   path: "/dashboard/main",
  //   icon: <IoBrowsersOutline size={20} />,
  //   title: "Dashboard",
  //   subTitle: "Screen display",
  // },
  // {
  //   path: "/dashboard/counter",
  //   icon: <IoCalculator size={20} />,
  //   title: "Counter",
  //   subTitle: "Client counter",
  // },
  {
    path: "/dashboard/pokemons",
    icon: <SiComicfury size={20} />,
    title: "Pokemons",
    subTitle: "Static",
  },
];

export const Sidebar = () => {
  return (
    <div
      id="menu"
      className="min-h-screen z-10 text-slate-700 w-[400px]  left-0  overflow-y-scroll"
    >
      <div id="logo" className="my-4 px-6">
        <h1 className="flex items-center text-lg md:text-2xl font-bold text-slate-700">
          <IoLogoReact />
          <span className="text-slate-700 ml-2">React</span>
        </h1>
        <p className="text-slate-700 text-sm">Testing Next for React...</p>
      </div>

      <div id="profile" className="px-6 py-10">
        <p className="text-slate-700">Welcome back,</p>
        <a href="#" className="inline-flex space-x-2 items-center">
        </a>
      </div>
      <div id="nav" className="w-full px-6">

        {menuItem.map((item) => (
          <SidebarMenuItem key={item.path} {...item} />
        ))}
      </div>
    </div>
  );
};
