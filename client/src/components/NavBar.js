import { NavLink } from "react-router-dom";

function NavBar({ currentUser, onLogOut }) {

    function handleLogOut() {
        fetch('/logout', {
            method: 'DELETE'
        })
            .then(() => onLogOut())
    }

    return (
        <div>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/noodles">Noodles</NavLink>
            <NavLink to="/reviews">Reviews</NavLink>
            <NavLink to="/users">Reviewers</NavLink>
            { currentUser ? 
                <NavLink to="/login" onClick={handleLogOut}>Log Out</NavLink>
                : 
                <NavLink to="/login">Log In / Register</NavLink>
            }
        </div>
    )
}

export default NavBar