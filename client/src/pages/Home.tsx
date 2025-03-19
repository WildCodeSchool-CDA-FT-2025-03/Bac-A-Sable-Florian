import useRepos from "../services/useRepos";
 import RepoCard from "../components/RepoCard";
 
 function Home() {
   const { data } = useRepos();
   return (
     <>
       <h1>voici mes repos</h1>
       {data.map((repo) => (
         <RepoCard repo={repo} key={repo.url} />
          
         
       ))}
       ;
     </>
   );
 }
 
 export default Home;