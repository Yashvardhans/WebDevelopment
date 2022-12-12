import {useEffect , useState} from "react";
import axios from "axios";


function Recipe(props){
   
    const [recipes , setRecipe] = useState([]);
    
    console.log(props.query_name);
    

    useEffect(() => {
        async function getData() {
            const res = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?query=${props.query_name}&number=20&addRecipeInformation=true&apiKey=5bd6153192284d45a7b0894470848f72`);
            setRecipe(res.data.results)
            console.log(res.data);
            return res
          }
          getData();
    });

    return(
        <div className="recipe grid grid-cols-4 gap-10">
            {recipes.map(recipe =>(
            <div className="recipe__header place-self-center ">
                <img 
                key={recipe.id}
                src = {`${recipe.image}`}
                alt = {recipe.title.substring(0,27)}
                /> 
                <a href="">
                      <div className="place-self-center ">{recipe.title.substring(0,27)}</div>  
                </a>   
                
                
            </div>
            
         ))}
            
        </div>
    )
 
}

export default Recipe ;