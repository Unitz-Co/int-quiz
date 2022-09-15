import {
  faAddressBook,
  faQuestionCircle,
  faUser,
} from "@fortawesome/free-regular-svg-icons";
import { faLock, faToggleOff } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import avt from "public/avt.jfif";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

export interface AvatarProps {
  age?: number;
  contains?: any;
}

export function Avatar({ age }: AvatarProps) {
  const node: any = useRef();

  const [isActive, setIsActice] = useState(false);

  const handleClickAvatar = (e: any) => {
    setIsActice(!isActive);
  };

  const clickOutside = (e: any) => {
    if (node.current.contains(e.target)) {
      return;
    }
    setIsActice(false);
  };

  useEffect(() => {
    document.addEventListener("mousedown", clickOutside);
    return () => {
      document.removeEventListener("mousedown", clickOutside);
    };
  }, [isActive]);
  return (
    <div className="relative">
      <div
        className="avatar"
        ref={node}
        onClick={() => handleClickAvatar(isActive)}
      >
        <p>
          <img className="rounded-full w-8" src={avt} alt="avatar" />
        </p>
      </div>
      <div
        className={`${
          isActive && `active`
        } menu-avatar absolute top-10 rounded-md right-0 w-56 text-white dropdown-content bg-colorprimarymenu`}
      >
        <ul className="p-4 text-sm cursor-pointer">
          <li className="p-0.5">
            <h3>Christian Dog</h3>
            <p className="opacity-30">Frone-End</p>
          </li>
          <li className="p-0.5">
            <p className="border-t bg-white opacity-50 h-[0.1px] -mr-2 -ml-2 my-2"></p>
          </li>
          <Link to="/profile" className="flex items-center">
            <FontAwesomeIcon icon={faUser} />
            <li className="p-1.5 pl-2">Profile</li>
          </Link>
          <Link to="/addacount" className="flex items-center">
            <FontAwesomeIcon icon={faAddressBook} />
            <li className="p-1.5 pl-2">Add Account</li>
          </Link>
          <Link to="/resetpassword" className="flex items-center">
            <FontAwesomeIcon icon={faLock} />
            <li className="p-1.5 pl-2">Reset Password</li>
          </Link>
          <Link to="/help" className="flex items-center">
            <FontAwesomeIcon icon={faQuestionCircle} />
            <li className="p-1.5 pl-2">Help</li>
          </Link>
          <li className="p-0.5">
            <p className="border-t bg-white opacity-50 h-[0.1px] -mr-2 -ml-2 my-2"></p>
          </li>
          <Link to="/logout" className="flex items-center">
            <FontAwesomeIcon icon={faToggleOff} />
            <li className="p-1.5 pl-2">Logout</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}
