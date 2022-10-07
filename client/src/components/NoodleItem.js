import { Link } from 'react-router-dom'

function NoodleItem({ noodle }) {
    return(
        <div className="card-deck col-sm-3 my-3">
                <Link to={`/noodles/${noodle.id}`}>
                    <div class="card text-white hover">
                        <img className="card-img" alt="instant noodle" src={noodle.image}/>
                        <div class="card-img-overlay overlay">
                            <h3 className='card-title overlay'>{noodle.brand} {noodle.flavor}</h3>
                            <p className='card-text overlay'>Average Rating: {"⭐️".repeat(noodle.average_reviews)}</p>
                        </div>
                    </div>
                </Link>
        </div>
    )
}

export default NoodleItem