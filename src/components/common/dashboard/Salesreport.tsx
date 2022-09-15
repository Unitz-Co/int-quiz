import { Calender } from "@/components/Calender";
import { Chart } from "@/components/Charts";
import { DropdownData } from "@/components/Data";
import { faCalendar } from "@fortawesome/free-regular-svg-icons";
import { faAngleDown, faAnglesDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";

export interface SalereportProps {}

export function Salereport() {
  const node: any = useRef();
  const [isActice, setIsActive] = useState(false);
  const handleClickReport = (e: any) => {
    setIsActive(!isActice);
  };

  const clicOutside = (e:any) => {
    if(node.current.contains(e.target)) {
      return
    }
    setIsActive(false)
  }

  useEffect(()=> {
    document.addEventListener("mousedown", clicOutside);
    return ()=> {
      document.removeEventListener("mousedown", clicOutside);
    }
  }, [isActice]);

  return (
    <section className="col-span-12 lg:col-span-6 mt-8">
      <div className="block sm:flex items-center h-10">
        <h2 className="text-lg font-medium truncate mr-5">Sales Report</h2>
        <div className="sm:ml-auto mt-3 sm:mt-0 relative text-slate-500 flex items-center">
          <Calender />
        </div>
      </div>
      <div className="p-5 mt-12 sm:mt-5 bg-white rounded-lg">
        <div className="flex flex-col md:flex-row md:items-center">
          <div className="flex">
            <div>
              <div className="text-colorprimary dark:text-slate-300 text-lg xl:text-xl font-medium">
                $15,000
              </div>
              <div className="mt-0.5 text-slate-500">This Month</div>
            </div>
            <div className="w-px h-12 border border-r border-dashed border-slate-200 dark:border-darkmode-300 mx-4 xl:mx-5"></div>
            <div>
              <div className="text-slate-500 text-lg xl:text-xl font-medium">
                $10,000
              </div>
              <div className="mt-0.5 text-slate-500">Last Month</div>
            </div>
          </div>
          <div className="dropdown md:ml-auto mt-5 md:mt-0 relative">
            <button
            ref={node}
              onClick={() => handleClickReport(isActice)}
              className="font-normal inline-flex cursor-pointer items-center justify-center rounded-md border-spacing-[1px] py-2 px-3 shadow-sm text-slate-500 border-stone-500 hover:bg-slate-100 border"
            >
              Filter by Category
              <FontAwesomeIcon className="ml-2" icon={faAngleDown} />
            </button>
            <div
              className={`${
                isActice && `datadisplay`
              } datadropdown w-40 absolute rounded-lg shadow-lg bg-white py-4 px-2 z-20`}
            >
              <ul className="mt-1 overflow-y-auto h-32 ">
                {DropdownData.map((data: any, index: any) => {
                  return <li className="py-3 px-2 cursor-pointer hover:bg-slate-100 rounded-lg" key={index}>{data.title}</li>;
                })}
              </ul>
            </div>
          </div>
        </div>
        <div className="chart">
                <Chart/>
        </div>
      </div>
    </section>
  );
}
