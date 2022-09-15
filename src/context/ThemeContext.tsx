import { createContext, useContext, useState } from "react";
import DataCandidate from "@/components/Data/data.json";
export interface ContextProps {
  children?: any;
}

const ThemeContext = createContext({});

function ThemeProvider({ children }: ContextProps) {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const value = {
    theme,
    toggleTheme,
  };
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}
const useTheme = () => {
  return useContext(ThemeContext);
};

const SearchContext = createContext<any>({});

function SearchProvider({ children }: ContextProps) {
  const [dataSearch, setDataSearch] = useState<any[] | undefined>([]);

  const sharedState = {
    dataSearch,
    setDataSearch,
  };

  return (
    <SearchContext.Provider value={sharedState}>
      {children}
    </SearchContext.Provider>
  );
}

const useSearch = () => {
  return useContext(SearchContext);
};

const DatalistContext = createContext<any>({});

function DatalistProvider({ children }: ContextProps) {
  const dataList = DataCandidate.data.advisorProfileCollection.items;
  return (
    <DatalistContext.Provider value={dataList}>
      {children}
    </DatalistContext.Provider>
  );
}

const useDataList = () => {
  return useContext(DatalistContext);
};

export {
  ThemeProvider,
  ThemeContext,
  useTheme,
  SearchProvider,
  useSearch,
  SearchContext,
  useDataList,
  DatalistProvider,
};
