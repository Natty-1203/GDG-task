import React from "react";
import "./custom.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { ADDLIST, REMOVELIST, PAGES } from "./action";
 
export default function Movie() {
 const [data, setData] = useState([]);
 const [loading, setLoading] = useState(true);
const dispatch = useDispatch()
let pages = useSelector((state) => state.NumReducer);
const listData = useSelector((state) => state.ArrayReducer);


 useEffect(() => {

    const fetchData = async () => {
      try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=dbfd40aeb2e63847a250245cb0ef004b&language=en-US&page=${pages}`);
        const result = await response.json();
        setData(result.results);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
 }, [pages]);
 console.log(data)
 console.log("pages")
console.log(pages)
console.log(listData)

    return (
        <>
        <nav>
        <h1 className="head"> Popular Movie </h1>
        <div>
        <Link to="/" className="list-but">Home</Link>
        <Link to="/movielist" className="list-but">Movie List</Link>
        </div>
        </nav>
        <div><h1>Movies</h1></div>
        
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="movie-list">
            {data.map((movie) => (
              <div key={movie.id} className="movie-card">
                <img
                  src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                  alt={movie.title}
                />
                <h2>{movie.title}</h2>
                <p>{movie.release_date}</p>
                <div className="list-cont">
                <button className="add-but" onClick={()=> dispatch(ADDLIST(movie.id))}>Add Movielist</button>
                </div>
               
              </div>
            ))}
          </div>
        )}

        <footer>
            <button className="add-but" onClick={()=> dispatch(PAGES())}>Next</button>
        </footer>

       
        </>
    )
}