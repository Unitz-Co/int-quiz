import React, { useEffect } from "react";
import datalist from "@/components/Data/data.json";
import { Link, useParams } from "react-router-dom";

const ListCandidate = ({ setresultSearch, resultSearch }: any) => {
  const handleDisplay = (e: any) => {
    console.log(e.target.value);
    const datafilsearch = datalist.data.advisorProfileCollection.items.filter(
      (optional: any) => {
        if (optional.status === e.target.value) {
          return optional;
        }
      }
    );
    setresultSearch(datafilsearch);
  };
  return (
    <div>
      <label htmlFor="">Online</label>
      <input
        name="status"
        type="radio"
        className="form-radio ml-3"
        value={"online"}
        onChange={handleDisplay}
      />

      <label htmlFor="" className="ml-10">
        Offline
      </label>
      <input
        name="status"
        type="radio"
        className="form-radio ml-3"
        value={"offline"}
        onChange={handleDisplay}
      />
      {resultSearch &&
        resultSearch.map((listpeople: any) => (
          <div key={listpeople.sys.id}>
            <div className="mt-5 flex items-center justify-start hover:cursor-pointer">
              <p className="w-20 h-20">
                <img
                  className="w-full"
                  src={listpeople.avatarUrl?.url}
                  alt={listpeople.avatarUrl?.title}
                />
              </p>
              <div className="ml-5">
                <Link to={`Infomation/${listpeople.sys.id}`}>
                  <p>{listpeople.displayName}</p>
                  <p>{listpeople.phone}</p>
                </Link>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default ListCandidate;
