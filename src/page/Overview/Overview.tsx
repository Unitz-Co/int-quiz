import { DataOverview } from "@/components/Data/DataOverview";
import { Link, Outlet } from "react-router-dom";

export interface OverviewProps {
  id: number;
  title: string;
  information: [
    {
      id: number;
      title: string;
    }
  ];
}

export function Overview() {
  return (
    <div className="mt-20">
      {DataOverview.map((data) => (
        <div key={data.id} className="py-[3.5rem] px-[22px]">
          <ul>
            <li className="text-xl font-bold text-colorprimarymenu">
              {data.title}
            </li>

            <li className="mt-5 border-l-[1px]">
              {data.information &&
                data.information.map((totalData: any) => (
                  <ul
                    key={totalData.id}
                    className="ml-10 pt-2 first:pt-0 cursor-pointer"
                  >
                    {
                      <div>
                        <Link
                          to={`/tongquan/${totalData.id}`}
                          // key={totalData.id}
                        >
                          <li className="hover:underline information-overview">
                            {totalData.title}
                          </li>
                        </Link>
                      </div>
                    }

                    <ul className="ml-10 pt-5">
                      {totalData.children &&
                        totalData.children.map((datainside: any) => (
                          <li className="first:pt-0 pt-2" key={datainside.id}>
                            {datainside.title}
                          </li>
                        ))}
                    </ul>
                  </ul>
                ))}
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
}
