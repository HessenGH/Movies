import MoviesList from "./MoviesList";
import useFetch from "./useFetch";

const Home = () => {
    
    const {data}=useFetch('https://jsonplaceholder.typicode.com/photos')
    return ( 
        <div>
           
               {data && <MoviesList movies={data} /> }
        </div>
     );
}
 
export default Home;