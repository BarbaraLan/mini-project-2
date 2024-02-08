import "./Sidebar.css" 
import { Link } from "react-router-dom";

function Sidebar () {
    return (
        
        <div id="sideBar"> 
        <h5> <Link to = "/"> Home </Link> </h5>

        
<h4>  <Link to= '/about'>About</Link> </h4>
        </div>
        
    )
}
export default Sidebar;