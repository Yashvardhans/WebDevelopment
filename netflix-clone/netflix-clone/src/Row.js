import React , { useEffect, useState } from "react";
import axios from "./axios" ;
import './Row.css'
import MovieSum from "./MovieSum";


function Row(props) {
    
    const base_url = "http://image.tmdb.org/t/p/w500//"

    const [movies , setMovies] = useState([])
    const [isShown , SetIsShown] = useState(false)
    

    useEffect (() => {
        async function fetchData(){
            const request = await axios.get(props.url);
            setMovies(request.data.results);
            
            return request;
        }
        fetchData();

    } , [props.url]);
    
const handleClick = (movie) =>{
    if(isShown){
        SetIsShown("");
    }else{
        SetIsShown(
            <MovieSum
            url = {base_url + movie.poster_path}
            overview = {movie.overview}
            name = {movie.title || movie.original_name}
            />
        );
        
    }
    
    
}

    


    return (
        <div className="row">
             
            <h2 className="title">{props.title}</h2>
            <div className="row-posters">
                 {movies.map( movie => (
                    <img 
                    key={movie.id}
                    onClick = {() => handleClick(movie)}
                    className={`row-poster ${props.isLargeRow && "row-posterLarge"}`}
                    src={`${(base_url+ (props.isLargeRow ? movie.poster_path : movie.backdrop_path))}`} alt = {movie.name}/>
                    
                 )

                )}      
            </div>
            {isShown}
        
        </div>
    );
}




export default Row;