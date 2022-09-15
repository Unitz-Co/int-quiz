import React from "react";
import { Link, useParams } from "react-router-dom";
import { useDataList } from "@/context";

export function Information() {
  const dataList = useDataList();
  console.log(dataList);
  const params = useParams();
  const Findindex = dataList.filter((data: any) => data.sys.id === params.Id);
  console.log(params);
  return (
    <div className="mt-5">
      {Findindex.map((newdata: any) => (
        <div className="mt-32" key={newdata.sys.id}>
          {newdata.categoriesCollection.items.map((extend: any) => (
            <div key={extend.sys.id}>
              {extend.displayName}
              <p>
                <img src={extend.avatarUrl.url} alt={extend.avatarUrl.title} />
              </p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
