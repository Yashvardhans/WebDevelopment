import {useEffect , useState} from 'react';

import logo from "../../assets/logo.png"
import burger from "../../assets/icons8-hamburger-menu-32.png"

import { Link , useNavigate } from 'react-router-dom';
import decode from "jwt-decode"
import search from "../../assets/search-solid.svg";
import "../../components/Navbar/Navbar.css";
import Button from "../../components/Button/Button";
import Avatar from "../../components/Avatar/Avatar";
import {useSelector , useDispatch } from 'react-redux'
import { setCurrentUser } from '../../actions/currentUser';


const Navbar = () => {

  const [open , setOpen] = useState(false);

  console.log(open);


const User = useSelector((state) => (state.currentUserReducer))
const dispatch = useDispatch()
const Navigate = useNavigate()

useEffect(()=>{
  const token = User?.token
  if(token){
    const decodedToken = decode(token);
    if(decodedToken.exp * 1000 < new Date().getTime()){
      handleLogout()
    }
  }
 
  dispatch(setCurrentUser(JSON.parse(localStorage.getItem('Profile'))))
} , [User?.token,dispatch])

const handleLogout = () =>{
  dispatch(({type : 'LOG_OUT'}))
  Navigate('/')
  dispatch(setCurrentUser(null))
}



    return (
       <nav className='main-nav'>
        <div className="navbar">
            <Link to="/" className='nav_item nav-logo'>
               <img src={logo} alt="" srcset="" />
            </Link>
            <div className={open ? "nav_btn_grp active" : "nav_btn_grp"}>
              <Link className="nav_btn nav_item">About</Link>
              <Link className="nav_btn nav_item">Products</Link>
              <Link className="nav_btn nav_item">For Teams</Link>
            </div>
            <form>
                <input type="text" name="" id="" placeholder='Search'/>
                <img src={search} alt="" srcset="" className='search-icon' />
            </form>
            {User === null ? 
               <Link to="/Auth" className="nav_item nav-links">Log In</Link>:
               <>
                 <Avatar backgroundColor="#009dff" borderRadius = "50%" py ="7px" px="10px" ><Link to= {`Users/${User.result?._id}`} style={{color : "white" , textDecoration : "none"}}>{User.result.name.charAt(0).toUpperCase()}</Link></Avatar>
                 <button className='nav_item nav-links' onClick={handleLogout}>Log out</button>
               </>
            }

            <div id="mobile">
              <img onClick={() => setOpen(!open)} src={burger} alt="" srcset="" />
            </div>
        </div>
       </nav>
    );
};

export default Navbar;