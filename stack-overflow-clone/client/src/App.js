import { useEffect } from "react";
import {BrowserRouter as Router } from "react-router-dom"
import { useDispatch } from "react-redux";
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import AllRoutes from "./route";
import { fetchAllQuestions } from "./actions/questions";
import { fetchAllUsers } from "./actions/users";
import Chat from "./pages/chat";

function App() {
  const dispatch = useDispatch()

  useEffect(()=>{
     dispatch(fetchAllQuestions())
     dispatch(fetchAllUsers())
  },[dispatch])
  return (

    <div className="App">
      <Router>
      <Chat/>
       <Navbar/>
       <AllRoutes/>
         
      </Router>
      
    </div>
  );
}

export default App;
