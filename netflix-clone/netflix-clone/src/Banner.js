import React  , {useEffect, useState} from 'react';
import axios from './axios';
import './Banner.css' ;
import requests from './requests';

function Banner(props) {
    const base_url = "http://image.tmdb.org/t/p/original"
 const [movie,setMovie] = useState([])

 useEffect(() => {
    async function fetchData(){
      const request = await axios.get(requests.fetchNetflixOriginals);
      
     setMovie(
      request.data.results[
        Math.floor(Math.random() * request.data.results.length - 1)
      ]
     )
     return request;
    }
    fetchData();
  }, [])


 console.log(movie)
 

    return (
     <header className='banner'
     style={{
      backgroundSize : "cover",
      backgroundImage : `url("http://image.tmdb.org/t/p/original/${movie.backdrop_path}")`
     }}
     >
     
      <div className='banner_details'>
        <div className='banner__title'>{movie.title || movie.original_name}</div>
        <div>
          <button className="banner_button">Play</button>
          <button className="banner_button">MyList</button>
          <div className="banner_desc">
            {movie.overview}
          </div>
        </div>

      </div>
     </header>

    );
}

export default Banner;