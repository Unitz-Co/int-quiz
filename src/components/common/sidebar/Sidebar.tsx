import { SidebarData } from "@/components/Data/SidebarData";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import {
  faAngleUp,
  faHouse,
  faInbox,
  faUserGroup,
  faWaveSquare,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link } from "react-router-dom";
import { SubMenu } from "./SubMenu";
export interface SidebarProps {}

export function Sidebar() {
  const [isActive, setIsActice] = useState("");

  const handleClickSidebar = (title: string) => {
    if (title === isActive) {
      setIsActice("");
    } else {
      setIsActice(title);
    }
  };

  return (
    <div className="mt-2 py-20 side-bar">
      <div className="block w-full">
        {SidebarData.map((items, index) => {
          return (
            <SubMenu
              key={index}
              items={items}
              onClick={() => handleClickSidebar(items.title)}
              isActice={isActive}
            />
          );
        })}
      </div>
    </div>
  );
}
