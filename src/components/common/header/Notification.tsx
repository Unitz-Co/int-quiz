import bell from "public/svg/bell.svg";
import avtnoti from "public/thewk.webp";
import { useEffect, useRef, useState } from "react";
export interface NotificationProps {}

export function Notification() {
  const node: any = useRef();
  const [isActive, setIsActive] = useState(false);
  const showdate = new Date();
  const prepend = showdate.getHours() >= 12 ? "PM" : "AM";

  const handleClickNotice = (e: any) => {
    setIsActive(!isActive);
  };

  const clickOutside = (e: any) => {
    if (node.current.contains(e.target)) {
      return;
    }
    setIsActive(false);
  };

  useEffect(() => {
    document.addEventListener("mousedown", clickOutside);
    return () => {
      document.removeEventListener("mousedown", clickOutside);
    };
  }, [isActive]);

  const displaytime =
    showdate.getHours() + ":" + showdate.getMinutes() + " " + prepend;

  return (
    <div className="relative z-10">
      <div
        className="dot-red"
        ref={node}
        onClick={() => handleClickNotice(isActive)}
      >
        <img className="mx-5 pt-1 w-5" src={bell} alt="notification" />
      </div>
      <div
        className={`${
          isActive && `active`
        } menu-avatar absolute w-[350px] right-4 top-8 rounded-lg bg-white shadow-xl p-5`}
      >
        <ul className="text-sm font-normal">
          <li className="mb-5 font-medium">
            <p>Notification</p>
          </li>
          <li className="flex mb-3">
            <p className="w-[50px] relative flex-shrink mr-2">
              <img
                className="rounded-full"
                src={avtnoti}
                alt="avatar notification"
              />
              <div className="w-3 h-3 bg-green-500 absolute right-0 bottom-0 rounded-full border-2 border-white"></div>
            </p>
            <div className="w-full">
              <div className="flex items-center justify-between">
                <p className="font-medium">Christian Bale</p>
                <p className="text-xs text-slate-400 ml-auto whitespace-nowrap">
                  <input
                    type="text"
                    className="text-end"
                    value={displaytime}
                    readOnly={true}
                  />
                </p>
              </div>
              <p className="line-clamp-1 w-full text-slate-500 mt-0.5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                deserunt quidem non mollitia labore eum facilis accusamus, nam
                pariatur laborum animi quae neque, distinctio aspernatur veniam
                esse minima eos! Quaerat.
              </p>
            </div>
          </li>
          <li className="flex mb-3">
            <p className="w-[50px] relative flex-shrink mr-2">
              <img
                className="rounded-full"
                src={avtnoti}
                alt="avatar notification"
              />
              <div className="w-3 h-3 bg-green-500 absolute right-0 bottom-0 rounded-full border-2 border-white"></div>
            </p>
            <div className="w-full">
              <div className="flex items-center justify-between">
                <p className="font-medium">Jonny Depp</p>
                <p className="text-xs text-slate-400 ml-auto whitespace-nowrap">
                  06:05AM
                </p>
              </div>
              <p className="line-clamp-1 w-full text-slate-500 mt-0.5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                deserunt quidem non mollitia labore eum facilis accusamus, nam
                pariatur laborum animi quae neque, distinctio aspernatur veniam
                esse minima eos! Quaerat.
              </p>
            </div>
          </li>
          <li className="flex mb-3">
            <p className="w-[50px] relative flex-shrink mr-2">
              <img
                className="rounded-full"
                src={avtnoti}
                alt="avatar notification"
              />
              <div className="w-3 h-3 bg-green-500 absolute right-0 bottom-0 rounded-full border-2 border-white"></div>
            </p>
            <div className="w-full">
              <div className="flex items-center justify-between">
                <p className="font-medium">Robert DeNiro</p>
                <p className="text-xs text-slate-400 ml-auto whitespace-nowrap">
                  06:05AM
                </p>
              </div>
              <p className="line-clamp-1 w-full text-slate-500 mt-0.5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                deserunt quidem non mollitia labore eum facilis accusamus, nam
                pariatur laborum animi quae neque, distinctio aspernatur veniam
                esse minima eos! Quaerat.
              </p>
            </div>
          </li>
          <li className="flex mb-3">
            <p className="w-[50px] relative flex-shrink mr-2">
              <img
                className="rounded-full"
                src={avtnoti}
                alt="avatar notification"
              />
              <div className="w-3 h-3 bg-green-500 absolute right-0 bottom-0 rounded-full border-2 border-white"></div>
            </p>
            <div className="w-full">
              <div className="flex items-center justify-between">
                <p className="font-medium">Morgan Freeman</p>
                <p className="text-xs text-slate-400 ml-auto whitespace-nowrap">
                  05:09AM
                </p>
              </div>
              <p className="line-clamp-1 w-full text-slate-500 mt-0.5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                deserunt quidem non mollitia labore eum facilis accusamus, nam
                pariatur laborum animi quae neque, distinctio aspernatur veniam
                esse minima eos! Quaerat.
              </p>
            </div>
          </li>
          <li className="flex mb-3">
            <p className="w-[50px] relative flex-shrink mr-2">
              <img
                className="rounded-full"
                src={avtnoti}
                alt="avatar notification"
              />
              <div className="w-3 h-3 bg-green-500 absolute right-0 bottom-0 rounded-full border-2 border-white"></div>
            </p>
            <div className="w-full">
              <div className="flex  items-center justify-between">
                <p className="font-medium">Russell Crowe</p>
                <p className="text-xs text-slate-400 ml-auto whitespace-nowrap">
                  1:15PM
                </p>
              </div>
              <p className="line-clamp-1 w-full text-slate-500 mt-0.5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                deserunt quidem non mollitia labore eum facilis accusamus, nam
                pariatur laborum animi quae neque, distinctio aspernatur veniam
                esse minima eos! Quaerat.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
