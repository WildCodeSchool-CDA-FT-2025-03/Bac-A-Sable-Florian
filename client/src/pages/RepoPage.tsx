import { useEffect } from "react";
 import { useParams } from "react-router-dom";
 import useRepos from "../services/useRepos";
 
 export default function RepoPage() {
   const { id } = useParams();
   const { oneRepos, getOneRepos } = useRepos();
 
   useEffect(() => {
     getOneRepos(id as string);
   }, [id]);
 console.log(oneRepos);    
   return (
     <div>
       <h1>Voici la page avec le repo {id}</h1>
       <h4> {oneRepos?.name}</h4>
     </div>
   );
 }