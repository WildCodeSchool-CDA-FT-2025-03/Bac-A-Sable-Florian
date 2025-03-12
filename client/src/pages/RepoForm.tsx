import { useState } from "react";
 import type { Repos } from "../types/repos.type";

/*const initialRepo = {
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
    ]
};*/ 

function RepoForm() {
    const [newRepo, setNewRepo] = useState<Repos>()
    return <form className="container">
        <h1 className= "text center">Ajout d'un repo</h1> 
        <label>
            Nom du repo
            <input type="text"
            value= {newRepo?.name}
            onChange={(e) => setNewRepo({name: e.target.value})}
                />
        </label>
    </form>
}


    



 export default RepoForm;