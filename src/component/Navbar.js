import { Link } from "react-router-dom";
const Navbar = () => {
    return ( 
        <div className="navbar">
           <Link to={"/"}><h2>Movie Star</h2></Link>
            <Link to="/"  className="nav-list"><ul>Home</ul></Link>
            
        </div>
     );
}
 
export default Navbar;