import noodleBackground from '../assets/fernando-andrade-noodle-block.jpg'
import { Link } from 'react-router-dom'

function Home({ currentUser }) {
    return(
        <div>
            <div>
                <img src={noodleBackground} alt="Noodle block"></img>
            </div>
            <h1>Instant Noodle Reviews</h1>
            <h3>{currentUser ? `Welcome, ${currentUser.name}!` : "for all your noodle needs"}</h3>
            <div>
                {currentUser ?
                    <Link to='/reviews'>
                        <button>Browse Reviews</button>
                    </Link>
                    : 
                    <Link to='/login'>
                        <button>Log In / Sign Up</button>
                    </Link>
                }
                <br/>
                <Link to='/noodles'>
                    <button>Browse Noods</button>
                </Link>
            </div>
        </div>
    )
}

export default Home 