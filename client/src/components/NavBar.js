import { NavLink, Link } from "react-router-dom";

function NavBar({ currentUser, onLogOut }) {

    function handleLogOut() {
        fetch('/logout', {
            method: 'DELETE'
        })
            .then(() => onLogOut())
    }

    return (
        <div>
            <NavLink exact to="/">Home</NavLink>
            <NavLink exact to="/noodles">Noodles</NavLink>
            <NavLink exact to="/reviews">Reviews</NavLink>
            <NavLink exact to="/users">Reviewers</NavLink>
            { currentUser ? 
                <NavLink exact to="/login" onClick={handleLogOut}>Log Out</NavLink>
                : 
                <NavLink exact to="/login">Log In</NavLink>
            }
        </div>
    )
}

export default NavBar