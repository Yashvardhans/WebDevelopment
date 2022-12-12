import React from 'react';
import { useState  } from 'react';
import Recipe from './Recipe';

const Home = () => {
    const [query , setQuery] = useState('')
 
    const onSubmit  =(e)=> {
        e.preventDefault();
        <Recipe
        query_name = {query}
        />
        console.log(query);
    }
    return (
        <div className='query_form py-5 
        bg-[url("https://cdn.pixabay.com/photo/2017/06/01/18/46/cook-2364221_960_720.jpg")] w-[100vw] h-[100vh]
        bg-no-repeat bg-cover
        '>
            <h1 className='header my-10 text-[4rem] text-white'>Food recipe Search</h1>
            <form action="" className='' onSubmit={onSubmit}>
                <input className="w-[60%] mt-[10%] p-[12px] text-xl border-2" 
                type="text" value={query} onChange= {(e) => setQuery(e.target.value)} placeholder= "Search"/>
                <input type="submit" value="Search" 
                className='ml-[3%] border-2 p-3 w-[100px] text-white bg-black '/>
            </form>
            
        </div>
    );
};

export default Home;