'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import { JSX } from "react";


interface Props  {
  path: string;
  icon: JSX.Element;
  title: string;
  subTitle: string;
}



// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SidebarMenuItem = ( {path, icon, title, subTitle }: Props) => {

  const currentPath = usePathname();

  const isActive = currentPath === path;

  return (
    <Link
      href={path}
      className={`w-full px-2  inline-flex space-x-2 items-center justify-around border-l border-slate-700 py-3 hover:bg-white/5 transition ease-linear duration-150 ${isActive ? 'bg-green-800' : ''}`}
  >
      <div>
       <div>{  icon  }</div>
      </div>
      <div className="flex flex-col">
        <span className="text-lg font-bold  leading-5 text-white">
          {  title  }
        </span>
        <span className="text-sm text-white/50 hidden md:block">
          {  subTitle  }
        </span>
      </div>
    </Link>
  );
};

export default SidebarMenuItem;

//

