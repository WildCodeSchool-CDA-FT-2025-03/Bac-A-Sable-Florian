
 import { Link } from "react-router-dom";
import { Repos } from "../types/repos.type";

 
 type Props = {
    repo: Repos
 }
 function RepoCard({ repo }:Props) {
   return (
     <>
       <h2 >{repo.url}</h2>
       <Link to={`/repos/${repo.id}`}>{repo.id}</Link>
       
     </>
   )}
   export default RepoCard;