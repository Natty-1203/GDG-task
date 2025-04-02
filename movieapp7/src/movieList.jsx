import {React, useEffect, useState} from 'react'
import "./custom.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { REMOVELIST } from './action';
export default function MovieList() {
   const [data2, setData] = useState([]);
   const [loading, setLoading] = useState(true);
   const dispatch = useDispatch();
   const listData = useSelector((state) => state.ArrayReducer);
   const pages = useSelector((state) => state.NumReducer);

   useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=dbfd40aeb2e63847a250245cb0ef004b&language=en-US&page=${pages}`);
        const result = await response.json();
  
        const filteredMovies = result.results.filter(movie => listData.includes(movie.id));
        console.log("Filtered Movies:")
        console.log(filteredMovies);

        console.log("api:")
        console.log(result.results)
  
        setData(filteredMovies);
  
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
  
    fetchData();
  }, [listData, pages]);
  


 console.log(listData)
 console.log(data2)

  return (
    <div>
        <nav>
        <h1 className="head"> Popular Movie </h1>
        <div>
        <Link to="/" className="list-but">Home</Link>
        <Link to="/movielist" className="list-but">Movie List</Link>
        </div>
        </nav>
        <div className="listHead">
        <h1> Movie List</h1>
        </div>
     

       {loading ? (
                <p>Loading...</p>
              ) : (
                <div className="movie-list">
                  {data2.map((movie) => (

                    <div key={movie.id} className="movie-card">
                      <img
                        src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                        alt={movie.title}
                      />
                      <h2>{movie.title}</h2>
                      <p>{movie.release_date}</p>
                      <div className="list-cont">
                      <button className="remove-but" onClick={()=> dispatch(REMOVELIST(movie.id))}>Remove</button>
                      </div>
                     
                    </div>
                  ))}
                </div>
              )}
    </div>
  )
}
