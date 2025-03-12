import { useState } from "react";
 import type { Repos } from "../types/repos.type";
import InputForm from "../components/Forms/inputform";

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
        <InputForm
         handleNewRepo={handleNewrepo}
         value={newRepo.name}
         title="Titre du repo"
         name="name"
       />
       <InputForm
         handleNewRepo={handleNewrepo}
         value={newRepo.description}
         title="Description du repo"
         name="description"
       />
       <InputForm
         handleNewRepo={handleNewrepo}
         value={newRepo.url}
         title="Url du repo"
         name="url"
       />
    </form>
    );
}

 export default RepoForm;