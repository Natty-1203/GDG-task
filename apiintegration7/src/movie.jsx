import { useState, useEffect } from 'react'

import './custom.css'

function Movies() {
const [data, setData] = useState([])
const [loading, setLoading] = useState(true)

  const API = 'https://api.themoviedb.org/3/movie/popular?api_key=dbfd40aeb2e63847a250245cb0ef004b'
  const Images = "https://image.tmdb.org/t/p/w300/"
  useEffect(()=>{
    const fetchData = async ()=>{
      try {
        const response = await fetch(API);
        const result = await response.json();
        setData(result.results)
        setLoading(false)
      }catch(error){
        console.error('Error fatching data', error)
        
      } 
    }
    fetchData();
  }, []);


  return (
    <>
    <div className='header-top'>
        <h1>Popular Movies</h1>
        <button className='cart'>add</button>
      </div>
     
     {
      loading? <p>Loading...</p>:
      (
        <div className='cont'>
            {
                data.map(
                    movie=>(
                        <div key={movie.id} className='movie-cont'>
                         <p>{movie.title}</p>
                         <img src={`${Images}${movie.poster_path}`} alt="movie poster" />
                         <button className='add-but'>Add to watchlist</button>
                        </div>
     
                            )
                        )
            }
        </div>
       
      )
     }
      
    </>
  )
}



export {Movies}
