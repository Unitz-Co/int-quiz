import { useSearchParams } from "react-router-dom";

export default function useCustomSearchParams() {
  const [searchParams, setSearchParams] = useSearchParams();

  const setCustomSearchParams = (keyQuery: any, query: any) => {
    const newQuery: any = {};
    searchParams.forEach((value, key) => {
      newQuery[key] = value;
    })
    newQuery[keyQuery] = query;
    setSearchParams(newQuery);
  };


  return [searchParams, setCustomSearchParams] as const;
}