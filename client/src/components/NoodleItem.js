import { Link } from 'react-router-dom'

function NoodleItem({ noodle }) {
    return(
        <div className="card-deck col-sm-4 my-3">
            {/* <div className="card listcard my-3 mx-4"> */}
                <Link to={`/noodles/${noodle.id}`}>
                    <div class="card text-white">
                        <img className="card-img" alt="instant noodle" src={noodle.image}/>
                        <div class="card-img-overlay">
                            <h3 className='card-title'>{noodle.brand} {noodle.flavor}</h3>
                            <p className='card-text'>Average Rating: {"⭐️".repeat(noodle.average_reviews)}</p>
                        </div>
                    </div>
                </Link>
            {/* </div> */}
        </div>
    )
}

export default NoodleItem