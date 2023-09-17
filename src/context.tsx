"use client";

import { createContext, useContext, useMemo, useState } from "react";

const Context = createContext<any>({});

export default function CreateContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [title, setTitle] = useState("Ma superbe app");

  const fetchProducts = async () => {
    /// ...
    //  setProducts([{ .... }])
  };

  const GlobalContext = useMemo(
    () => ({
      fetchProducts,
      title,
      setTitle,
    }),
    [title]
  );

  return <Context.Provider value={GlobalContext}>{children}</Context.Provider>;
}

export const useGlobalContext = () => {
  const globalContext = useContext(Context);

  return globalContext;
};
