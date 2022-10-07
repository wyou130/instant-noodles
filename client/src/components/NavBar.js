import { NavLink, Link } from "react-router-dom";

function NavBar({ currentUser, onLogOut }) {

    function handleLogOut() {
        fetch('/logout', {
            method: 'DELETE'
        })
            .then(() => onLogOut())
    }

    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" exact="true" to="/">
                    🍜 Instant Reviewdle
                </Link>
                {/* <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                    >
                    <span className="navbar-toggler-icon"></span>
                </button> */}
                {/* <div className="collapse navbar-collapse" id="navbarNavAltMarkup"> */}
                    <div className="navbar-nav">
                        <NavLink className="nav-link" to="/noodles">Noodles</NavLink>
                        <NavLink className="nav-link" to="/reviews">Reviews</NavLink>
                        { currentUser ? 
                            <>
                                <NavLink className="nav-link" to="/users">Reviewers</NavLink> 
                                <NavLink className="nav-link" to="/login" onClick={handleLogOut}>Log Out</NavLink>
                            </>
                            : 
                                <NavLink className="nav-link" to="/login">Log In / Register</NavLink>
                        }
                    </div>
                {/* </div> */}
                { currentUser ? <p class="navbar-text">Signed in as {currentUser.name}</p> : null }
            </div>
        </nav>
    )
}

export default NavBar