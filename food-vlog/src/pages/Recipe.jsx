import {useEffect , useState} from "react";
import axios from "axios";


function Recipe(){
    
    const [recipes , setRecipe] = useState([]);

    const queryParams = {
        query: "pizza"
      };
      const params = new URLSearchParams(queryParams);
      console.log(params.toString());
    

    useEffect(() => {
        async function getData() {
            const res = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?${params.toString()}&number=20&instructionsRequired=true&apiKey=5bd6153192284d45a7b0894470848f72`);
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
                <div className="place-self-center ">{recipe.title.substring(0,27)}</div>
                
            </div>
            
         ))}
            
        </div>
    )
 
}

export default Recipe ;