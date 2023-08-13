"use client";

import { useEffect, type FC, useState } from "react";
import { useHomeStore } from "@/store";
interface NewListProps {
  data: Array<any>;
}

const NewList: FC<NewListProps> = ({ data }) => {
  const { list, setList } = useHomeStore((state) => state);
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setList()
    setIsMounted(true);
  }, [setList])
  if (!isMounted) {
    return null;
  }
  return (
    <div>
      <h1 className=" text-red-500 text-3xl">New List</h1>
      <ul>
        {list.map((item) => {
          return <li className="text-sky-400" key={item.id}>{item.name}</li>;
        })}
      </ul>
    </div>
  );
};

export default NewList;
