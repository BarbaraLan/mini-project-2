import { Link } from "react-router-dom";

function NavBar () {
    return (
        <nav id="navbar">
        <h2> REACT RECIPES FOR DUMMIES</h2>
        <img id="logo" src="./src/assets/cleaver.jpg" alt="" />
        <Link to = "/"> Home </Link>
        <Link to= '/about'>About</Link>
        </nav>
    )
}
export default NavBar;