import noodleBackground from '../assets/fernando-andrade-noodle-block.jpg'
import { Link } from 'react-router-dom'

function Home({ currentUser }) {
    return(
        <div className='home-container'>
            {/* <div className="home-img"> */}
                <img className='home-image' src={noodleBackground} alt="Noodle block"></img>
            {/* </div> */}
            <div className="home-text">
                <h1>Instant Reviewdle</h1>
                <h3>{currentUser ? `Welcome, ${currentUser.name}!` : "for all your noodle needs"}</h3>
                <br/>
                <div>
                    <div>
                        {currentUser ?
                            <Link to='/reviews'>
                                <button className='btn btn-secondary btn-lg'>Browse Reviews</button>
                            </Link>
                            : 
                            <Link to='/login'>
                                <button className='btn btn-secondary btn-lg'>Log In / Sign Up</button>
                            </Link>
                        }
                    </div>
                    <div>
                        <Link to='/noodles'>
                            <button className='btn btn-secondary btn-lg'>Browse Noods</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home 