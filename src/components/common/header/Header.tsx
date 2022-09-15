import Logo from "public/Logo/logo.svg";

import { Avatar } from "./Avatar";
import { Link } from "react-router-dom";
import { Notification } from "./Notification";
import { Search } from "./Search";
import { useTheme } from "@/context";

export interface HeaderProps {
  name?: string;
}

export function Header({ name }: HeaderProps) {
  const {theme}: any = useTheme()
  return (
    <div className="relative">
      <div className="z-10 fixed h-[65px] bg-slate-200 opacity-40 right-0 bottom-0 left-0 top-2.5 rounded-lg ml-7 mr-7"></div>
      <div className={`${theme} top-bar-boxed bg-colorprimary h-[70px] md:h-[65px] mt-12 md:mt-0 sm:-mx-8 md:mx-3 lg:mt-5 px-7 elative md:fixed md:inset-x-0 rounded-xl z-50`}>
        <div className="h-full flex justify-between">
          <div className="flex items-center">
            <Link to="/" className="logo -intro-x md:flex xl:w-[180px] block">
              <img src={Logo} className="logo__image w-6" alt="Logo demo" />
              <span className="logo__text text-white text-lg ml-3">Enigma</span>
            </Link>
            <nav aria-label="breadcrumb" className="-intro-x mr-auto ml-10">
              <ol className="breadcrumb breadcrumb-light text-white font-light items-center flex">
                <li className="breadcrumb-item text-sm font-light">
                  <a href="#">Application</a>
                </li>
                <li
                  className="breadcrumb-item active ml-5 text-sm font-light"
                  aria-current="page"
                >
                  Dashboard
                </li>
              </ol>
            </nav>
          </div>
          <div className="right-side mr-3 sm:mr-6 lg:mr-3 flex items-center">
            <Search />
            <Notification />
            <Avatar />
          </div>
        </div>
      </div>
    </div>
  );
}
