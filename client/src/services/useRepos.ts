import { useEffect, useState } from "react";
import client from "./client";
import type { Repos } from "../types/repos.type";

const useRepos = () => {
  const [data, setData] = useState<Repos[]>([]);
  const [oneRepos, setOneRepos] = useState <Repos>(); 

  const getAllRepos = () => {
    client
      .get("/repos")
      .then((repos) => {
        setData(repos.data as Repos[]);
      })
      .catch((error: any) => {
        console.error(error);
      });
  };

  const getOneRepos = (id: string) => {
    client
      .get(`/repos/${id}`)
      .then((repos) => {
        setOneRepos(repos.data as Repos);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    getAllRepos();
  }, []);

  return {data, oneRepos,getOneRepos};
};

export default useRepos;