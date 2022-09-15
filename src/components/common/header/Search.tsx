import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faInbox, faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import search from "public/svg/search.svg";
import avtsearch from "public/thewk.webp";
import { useEffect, useRef, useState } from "react";

export interface SearchProps {}

export function Search() {
  const node: any = useRef();

  const [isActive, setIsActive] = useState(false);

  const handleClickSearch = (e: any) => {
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

  return (
    <section className="relative z-10">
      <form className="relative">
        <input
          ref={node}
          onClick={() => handleClickSearch(isActive)}
          type="text"
          className="rounded-full px-3 py-3 text-xs w-56 focus:w-72 transition-width bg-slate-100 duration-300 ease-in-out placeholder:text-sm placeholder:opacity-50 focus-visible:outline-none"
          placeholder="Search..."
        />
        <p className="absolute right-2 top-2 w-5 opacity-50">
          <img src={search} alt="search bar" />
        </p>
      </form>
      <div
        className={`${
          isActive && `active`
        } menu-avatar absolute w-[450px] bg-white rounded-lg shadow-md p-5 right-0 top-11`}
      >
        <p className="font-medium mb-2">Pages</p>
        <div className="text-slate-700 text-sm">
          <div>
            <div className="flex items-center">
              <div className="mr-2">
                <FontAwesomeIcon
                  className="text-green-500 p-3 bg-green-100 rounded-full"
                  icon={faEnvelope}
                />
              </div>
              Mail Setting
            </div>
            <div className="flex items-center mt-1">
              <div className="mr-2">
                <FontAwesomeIcon
                  className="text-amber-500 p-3 bg-orange-100 rounded-full text-xs"
                  icon={faUserGroup}
                />
              </div>
              User &amp; Permissions
            </div>

            <div className="flex items-center mt-1">
              <div className="mr-2">
                <FontAwesomeIcon
                  className="text-sky-800 p-3 bg-slate-100 rounded-full text-base"
                  icon={faInbox}
                />
              </div>
              Transactions Report
            </div>
          </div>
        </div>
        <div>
          <p className="font-medium mb-2 mt-2">Users</p>
          <div className="text-sm text-slate-700">
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <p className="w-10 relative flex-shrink mr-2">
                  <img
                    src={avtsearch}
                    className="rounded-full"
                    alt="avatar search"
                  />
                </p>
                <p>Christian Bale</p>
              </div>
              <p className="text-slate-500">christianbale@left4code.com</p>
            </div>
            <div className="flex justify-between items-center mt-1">
              <div className="flex items-center">
                <p className="w-10 relative flex-shrink mr-2">
                  <img
                    src={avtsearch}
                    className="rounded-full"
                    alt="avatar search"
                  />
                </p>
                <p>Jonny Deep</p>
              </div>
              <p className="text-slate-500">johnnydepp@left4code.com</p>
            </div>
            <div className="flex justify-between items-center mt-1">
              <div className="flex items-center">
                <p className="w-10 relative flex-shrink mr-2">
                  <img
                    src={avtsearch}
                    className="rounded-full"
                    alt="avatar search"
                  />
                </p>
                <p>Robert DeNiro</p>
              </div>
              <p className="text-slate-500">christianbale@left4code.com</p>
            </div>
            <div className="flex justify-between items-center mt-1">
              <div className="flex items-center">
                <p className="w-10 relative flex-shrink mr-2">
                  <img
                    src={avtsearch}
                    className="rounded-full"
                    alt="avatar search"
                  />
                </p>
                <p>Morgan Freeman</p>
              </div>
              <p className="text-slate-500">christianbale@left4code.com</p>
            </div>
          </div>
        </div>
        <div>
          <p className="font-medium mb-2 mt-2">Products</p>
          <div className="text-sm text-slate-700">
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <p className="w-10 relative flex-shrink mr-2">
                  <img
                    src={avtsearch}
                    className="rounded-full"
                    alt="avatar search"
                  />
                </p>
                <p>Samsung Q90 QLED TV</p>
              </div>
              <p className="text-slate-500">Electronic</p>
            </div>
            <div className="flex justify-between items-center mt-1">
              <div className="flex items-center">
                <p className="w-10 relative flex-shrink mr-2">
                  <img
                    src={avtsearch}
                    className="rounded-full"
                    alt="avatar search"
                  />
                </p>
                <p>Sonny A7 III</p>
              </div>
              <p className="text-slate-500">Photography</p>
            </div>
            <div className="flex justify-between items-center mt-1">
              <div className="flex items-center">
                <p className="w-10 relative flex-shrink mr-2">
                  <img
                    src={avtsearch}
                    className="rounded-full"
                    alt="avatar search"
                  />
                </p>
                <p>Dell XPS 13</p>
              </div>
              <p className="text-slate-500">PC & Laptop</p>
            </div>
            <div className="flex justify-between items-center mt-1">
              <div className="flex items-center">
                <p className="w-10 relative flex-shrink mr-2">
                  <img
                    src={avtsearch}
                    className="rounded-full"
                    alt="avatar search"
                  />
                </p>
                <p>Nike Tanjun</p>
              </div>
              <p className="text-slate-500">Sport &amp; Outdoor </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
