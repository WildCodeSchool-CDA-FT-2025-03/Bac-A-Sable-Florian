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
    console.log(newRepo);
    return <form className="container">
        <h1 className= "text center">Ajout d'un repo</h1> 
        <label>
            Nom du repo
            <input type="text"
            name="name"
            value= {newRepo?.name}
            onChange={(e) => setNewRepo({...newRepo, [e.target.name]: e.target.value})}
                />
        </label>
        <label>
            contenu
            <input type="text"
            name= "description"
            value= {newRepo?.description}
            onChange={(e) => setNewRepo({...newRepo,[e.target.name]: e.target.value})}
                />
        </label>
    </form>
}


    



 export default RepoForm;