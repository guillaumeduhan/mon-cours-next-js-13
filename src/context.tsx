"use client";

import { createContext, useContext, useMemo, useState } from "react";

const Context = createContext<any>({});

export default function CreateContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [title, setTitle] = useState("Ma superbe app");

  const fetchPost = async (postId: string) => {
    const post = await fetch(`/api/posts/${postId}`, {
      method: "GET",
    });
    return post;
  };

  const GlobalContext = useMemo(
    () => ({
      fetchPost,
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
