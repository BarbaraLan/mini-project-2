import "./Sidebar.css"
import { Link } from "react-router-dom";

function Sidebar() {
    return (

        <div id="sideBar">
            <img className="logo" src="./src/assets/cleaver.jpg" alt="" />
            <h5>
                <Link to="/"> Home </Link>
                <Link to='/about'>About</Link>
            </h5>
        </div>

    )
}
export default Sidebar;