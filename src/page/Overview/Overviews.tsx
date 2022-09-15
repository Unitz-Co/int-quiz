import { AddContent } from "@/components/AddContent";
import { DataOverview, TitleContent } from "@/components/Data/DataOverview";
import {
  faEllipsis,
  faPlus,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
export interface OverviewsProps {}

export function Overviews() {
  const node: any = useRef();
  const [isActive, setIsActive] = useState(false);
  const handleFormContent = () => {
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

  let params = useParams();
  const handleSwitch = (e: any) => {
    console.log(e.target.value);
  };
  return (
    <div className="py-[3.5rem] px-[22px] mt-20">
      <h1 className="text-3xl">Danh sách nội dung</h1>
      <div className="block">
        <div className="flex items-center relative justify-center">
          <form action="#" className="relative">
            <input
              type="text"
              className="form-input border-none rounded-lg mr-5 w-80"
            />
            <FontAwesomeIcon
              className="absolute right-7 top-3"
              icon={faSearch}
            />
          </form>
          <div>
            <button
              ref={node}
              onClick={handleFormContent}
              type="button"
              className="inline-flex  items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none"
            >
              Thêm
              <p>
                <FontAwesomeIcon className="ml-2" icon={faPlus} />
              </p>
            </button>
            <div className={`${isActive && "contentactice"} addcontent`}>
              <div className="absolute z-10 right-72 top-10">
                <AddContent />
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-5">
          <table className="min-w-full divide-y divide-gray-300">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                >
                  STT
                </th>
                <th
                  scope="col"
                  className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                >
                  Nội dung
                </th>
                <th
                  scope="col"
                  className="px-3 py-3.5 text-center text-sm font-semibold text-gray-900"
                >
                  Dùng thử
                </th>
                <th
                  scope="col"
                  className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                >
                  Chú thích
                </th>
                <th
                  scope="col"
                  className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                >
                  Số thứ tự trong bài viết
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              {TitleContent.map((data) => (
                <tr key={data.id}>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                    {data.id}
                  </td>
                  <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                    {data.title}
                  </td>
                  <td className="whitespace-nowrap py-4 text-sm text-gray-50">
                    <div
                      onClick={handleSwitch}
                      className="switch-right w-[38px] h-6 mx-auto cursor-pointer rounded-full p-[1px] relative outline-1 outline outline-transparent outline-offset-1 border"
                    ></div>
                  </td>

                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-40 ">
                    <p className="w-52 overflow-hidden truncate">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Repudiandae magni modi libero, expedita architecto iusto
                      nisi quos sint ipsum ea corrupti exercitationem quaerat,
                      delectus deleniti repellat unde dolorem consectetur.
                      Recusandae.
                    </p>
                  </td>

                  <td className="whitespace-nowrap px-20 py-4 text-sm text-gray-500">
                    <FontAwesomeIcon icon={faEllipsis} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
