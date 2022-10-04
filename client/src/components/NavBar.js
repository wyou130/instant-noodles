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
            { currentUser ? 
                <span>
                    <NavLink to="/users">Reviewers</NavLink> 
                    <NavLink to="/login" onClick={handleLogOut}>Log Out</NavLink>
                </span>
                : 
                <NavLink to="/login">Log In / Register</NavLink>
            }
        </div>
    )
}

export default NavBar