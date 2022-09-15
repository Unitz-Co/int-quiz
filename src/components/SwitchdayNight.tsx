import { ThemeContext, useTheme } from "@/context";
import { useContext, useState } from "react";

export interface SwitchdayNightProps {}

export function SwitchdayNight() {
  const { theme, toggleTheme }: any = useTheme();
  console.log(theme);
  const [isActive, setIsActice] = useState(false);
  const handleClickSwitch = (e: any) => {
    toggleTheme()
    setIsActice(!isActive);
  };
  return (
    <div className={`${theme} dark-mode-switcher cursor-pointer shadow-md fixed bottom-0 right-0 box dark:bg-dark-2 border rounded-full w-40 h-12 flex items-center justify-center z-50 mb-10 mr-10`}>
      <div className={`${theme}  mr-4 text-gray-700 dark:text-gray-300`}>Dark Mode</div>
      <div
        onClick={handleClickSwitch}
        className={`${
          isActive && `dark-mode`
        }  switch-light w-[38px] h-6 cursor-pointer rounded-full p-[1px] relative outline-1 outline outline-transparent outline-offset-1 border`}
      ></div>
    </div>
  );
}
