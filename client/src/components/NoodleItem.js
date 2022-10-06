import { Link } from 'react-router-dom'

function NoodleItem({ noodle }) {
    return(
        <div>
            <Link to={`/noodles/${noodle.id}`}>
                <h3>{noodle.brand} {noodle.flavor}</h3>
                <img alt="instant noodle" src={noodle.image}/>
                <p>Average Rating: {"⭐️".repeat(noodle.average_reviews)}</p>
            </Link>
        </div>
    )
}

export default NoodleItem