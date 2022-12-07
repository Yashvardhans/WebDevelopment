import './Row.css'
import {Link} from "react-router-dom"

function MovieSum(props){
    return(
        <div className="movie_sum">
            <img
            className='movie_sum_img'
            src={props.url}
            alt = {props.name}
            />
            <div className='movie_sum_desc'>
                <div className='header'>{props.name}</div>
                <p>{props.overview}</p>
              
            </div>
           
            
         
            
            

        </div>
    )
}

export default MovieSum;