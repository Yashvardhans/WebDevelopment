import './App.css';
import Home from './pages/Home';
import { Route,Routes } from 'react-router-dom';
import Recipe from './pages/Recipe';

function App() {
  return (
    <div className="App">
       
       
      <Routes>
           <Route path = "/" element = {<Home/>}></Route>
           <Route path = "/recipe" element = {<Recipe/>}></Route>
      </Routes>
       
      
    </div>
  );
}

export default App;
