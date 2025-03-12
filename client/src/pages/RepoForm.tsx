import { useState } from "react";
 import type { Repos } from "../types/repos.type";
import { string } from "joi";

const initialRepo = {
    id: "",
    isPrivate: false,
    url: "",
    languages: [
        {
          size: 0,
          node: {
            name: "",
          },
        }
    ],
    description: "",
name:"",
} ; 

function RepoForm() {
    const [newRepo, setNewRepo] = useState<Repos>(initialRepo);
    
    const handleNewrepo = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewRepo(() => ({...newRepo, [e.target.name]: e.target.value}));
    };
    return (
         <form className="container">
        <h1 className= "text center">Ajout d'un repo</h1> 
        <label>
            Nom du repo
            <input 
            type="text"
            name="name"
            value= {newRepo?.name}
            onChange={handleNewrepo}
                />
        </label>
        <label>
            contenu
            <input type="text"
            name= "description"
            value= {newRepo?.description}
            onChange={handleNewrepo}
                />
        </label>
    </form>
    );
}

 export default RepoForm;