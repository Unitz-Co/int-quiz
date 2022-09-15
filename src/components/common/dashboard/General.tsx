import { useTheme } from "@/context";
import {
  faAngleUp,
  faArrowsRotate,
  faArrowUp,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export interface GeneralProps {}

export function General() {
  const { theme }: any = useTheme();
  return (
    <div className="col-span-12">
      <div className="flex items-center h-10">
        <h2 className="text-lg font-medium truncate mr-5">General Report</h2>
        <a href="#" className="flex items-center ml-auto text-colorprimary">
          <p className="mr-3">
            <FontAwesomeIcon icon={faArrowsRotate} />
          </p>
          <p>Reload Data</p>
        </a>
      </div>
      <div className="grid grid-cols-12 gap-6 mt-5">
        <div className="col-span-12 sm:col-span-6 xl:col-span-3">
          <div className="cursor-pointer hover:scale-105 transform transition duration-300 ">
            <div className={`${theme}`}>
              <div className={`darkmode tag-sale`}>
                <div className=" flex">
                  <p>
                    <FontAwesomeIcon icon={faCartShopping} />
                  </p>
                  <div className="ml-auto flex items-center py-1 px-2 rounded-xl bg-teal-700 text-xs text-white ">
                    <div className="lessxs">33%</div>
                    <p className="ml-0.5">
                      <FontAwesomeIcon icon={faAngleUp} />
                    </p>
                  </div>
                </div>
                <div className="text-3xl font-medium leading-8 mt-6">4.710</div>
                <div className="text-base text-slate-500 mt-1">Item Sales</div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-12 sm:col-span-6 xl:col-span-3">
          <div className="cursor-pointer hover:scale-105 transform transition duration-300 ">
            <div className={`${theme}`}>
              <div className={`darkmode tag-sale`}>
                <div className=" flex">
                  <p>
                    <FontAwesomeIcon icon={faCartShopping} />
                  </p>
                  <div className="ml-auto flex items-center py-1 px-2 rounded-xl bg-teal-700 text-xs text-white ">
                    <div className="lessxs">33%</div>
                    <p className="ml-0.5">
                      <FontAwesomeIcon icon={faAngleUp} />
                    </p>
                  </div>
                </div>
                <div className="text-3xl font-medium leading-8 mt-6">4.710</div>
                <div className="text-base text-slate-500 mt-1">Unique Visitor</div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-12 sm:col-span-6 xl:col-span-3">
          <div className="cursor-pointer hover:scale-105 transform transition duration-300 ">
            <div className={`${theme}`}>
              <div className={`darkmode tag-sale`}>
                <div className=" flex">
                  <p>
                    <FontAwesomeIcon icon={faCartShopping} />
                  </p>
                  <div className="ml-auto flex items-center py-1 px-2 rounded-xl bg-teal-700 text-xs text-white ">
                    <div className="lessxs">33%</div>
                    <p className="ml-0.5">
                      <FontAwesomeIcon icon={faAngleUp} />
                    </p>
                  </div>
                </div>
                <div className="text-3xl font-medium leading-8 mt-6">4.710</div>
                <div className="text-base text-slate-500 mt-1">New Order</div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-12 sm:col-span-6 xl:col-span-3">
          <div className="cursor-pointer hover:scale-105 transform transition duration-300 ">
            <div className={`${theme}`}>
              <div className={`darkmode tag-sale`}>
                <div className=" flex">
                  <p>
                    <FontAwesomeIcon icon={faCartShopping} />
                  </p>
                  <div className="ml-auto flex items-center py-1 px-2 rounded-xl bg-teal-700 text-xs text-white ">
                    <div className="lessxs">33%</div>
                    <p className="ml-0.5">
                      <FontAwesomeIcon icon={faAngleUp} />
                    </p>
                  </div>
                </div>
                <div className="text-3xl font-medium leading-8 mt-6">4.710</div>
                <div className="text-base text-slate-500 mt-1">Total Product</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
