import  './header.css';
import { Link } from 'react-router-dom'
import Img from './react2.png'


 
 
 function Header(){
    return (
        <header>
            
            <Link className="logo" to="/"><div> <img src={Img} className='logo-img' alt="React Flix"/> </div> React Flix</Link>
            <Link className="favoritos" to="/favoritos"><p>Minha Lista❤️</p></Link>
        </header>
    )
 }

 export default Header;