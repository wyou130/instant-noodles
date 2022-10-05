import { Link } from 'react-router-dom'

function ReviewItem({ review }) {
    return(
        <div>
                <h3>{review.overall_rating}</h3>
            <Link to={`/noodles/${review.noodle.id}`}>
                <p>{review.noodle.brand} {review.noodle.flavor}</p>
            </Link>
                <p>By {review.user.name}</p>
                <p>{review.overall_comment}</p>
        </div>
    )
}

export default ReviewItem