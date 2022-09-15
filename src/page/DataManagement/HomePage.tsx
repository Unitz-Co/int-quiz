import MainLayout from "@/components/Layout/MainLayout";
import datalist from "@/components/Data/data.json";
import { createContext, useEffect, useState } from "react";
import { useSearch } from "@/context";
import _ from "lodash";
import ListCandidate from "@/components/ListCandidate";
import imagetheweeknd from "@/public/thewk.webp";

export interface HomepageProps {}

export function Homapage() {
  const [keyword, setKeyword] = useState<string>("");
  const { dataSearch } = useSearch();
  const [resultSearch, setresultSearch] = useState<any[]>();
  useEffect(() => {
    const resultSearch: any =
      datalist.data.advisorProfileCollection.items.filter((list) => {
        if (keyword === "") {
          return list;
        } else if (
          list.displayName.toLowerCase().includes(keyword?.toLowerCase())
        ) {
          console.log(list);
          return list;
        }
      });
    setresultSearch(resultSearch);
  }, [keyword]);

  return (
    <div className="mt-32">
      <input
        type="text"
        className="form-input w-full rounded-lg"
        placeholder="Search Candidate..."
        onChange={(e) => setKeyword(e.target.value)}
      />
      <div className="flex items-center overflow-x-scroll w-[50rem] mt-20">
        {resultSearch &&
          resultSearch.map((listcustomer: any) => (
            <div key={listcustomer.sys.id}>
              <div className="text-center mx-5">
                <p className="w-36 h-36 rounded-lg">
                  <img
                    className="rounded-lg bg-cover"
                    src={`${listcustomer.avatarUrl?.url} `}
                    alt={listcustomer.avatarUrl?.title}
                  />
                </p>
                <div className="font-bold text-lg">
                  {listcustomer.displayName}
                </div>
              </div>
            </div>
          ))}
      </div>
      <div className="mt-20">
        <ListCandidate
          setresultSearch={setresultSearch}
          resultSearch={resultSearch}
        />
      </div>
    </div>
  );
}
