import {
  faAngleUp,
  faHouse,
  faWaveSquare,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link } from "react-router-dom";

export interface SubMenuProps {
  items?: any;
  index?: any;
  onClick?: () => void;
  isActice?: string;
}

export function SubMenu({ items, index, onClick, isActice }: SubMenuProps) {
  return (
    <div key={index} className="mt-3 block">
      <div
        onClick={onClick}
        id="dashboard"
        className="flex justify-between w-full bg-white text-slate-700 rounded-lg py-3 px-5"
      >
        <div className="flex items-center">
          <p className="mr-4">
            <FontAwesomeIcon icon={faHouse} />
          </p>
          <div className="font-medium text-sm ">
            {items.path && (
              <Link
                to={items.path}
                className="hover:no-underline hover:text-colorprimary cursor-pointer"
              >
                {items.title}
              </Link>
            )}
          </div>
        </div>
        <p
          className={`${
            isActice === items.title ? `rotate-180 transform` : ""
          } duration-100 ease-in-out`}
        >
          <FontAwesomeIcon icon={faAngleUp} />
        </p>
      </div>
      <div
        className={`${
          isActice === items.title ? `active` : ""
        } dasboard-droplist mt-2 p-4 bg-white rounded-lg`}
      >
        <ul>
          <li>
            <div>
              {items.subNav &&
                items.subNav.map((item: any, index: any) => {
                  return (
                    <div
                      key={index}
                      className="mb-5 flex items-center cursor-pointer hover:text-slate-800 last:mb-0"
                    >
                      <p>{item.icon}</p>
                      <p className="font-medium text-sm ml-3 mt-0">
                        {item.path && <Link to={item.path}>{item.title}</Link>}
                      </p>
                    </div>
                  );
                })}
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
