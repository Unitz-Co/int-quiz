import { useTheme } from "@/context";
import React, { Children } from "react";
import { Outlet } from "react-router-dom";
import { Footer } from "../common";
import { Header } from "../common/header";
import { Sidebar } from "../common/sidebar";
import { SwitchdayNight } from "../SwitchdayNight";

interface MainLayoutProps {
  children?: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  const { theme }: any = useTheme();
  return (
    <div className="relative">
      <Header />
      <div className="flex">
        <div className={`${theme} flex-[0_0_18.5%]`}>
          <section className={`sidebar-darkmode h-full px-5 bg-slate-200`}>
            <Sidebar />
          </section>
        </div>

        <section
          className={`${theme} flex justify-center w-full bg-slate-100 h-full`}
        >
          {/* {children} */}
          <Outlet />
        </section>
      </div>
      <div className="absolute bottom-10 right-20">
        <SwitchdayNight />
      </div>
    </div>
  );
}
