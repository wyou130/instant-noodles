import { Link } from 'react-router-dom'

function ReviewItem({ review }) {
    return(
        <div className="card-deck col-sm-3 my-3">
            <div class="card text-card">
                <h4 className='card-title my-3'>Overall Rating: {review.overall_rating}</h4>
                <Link to={`/noodles/${review.noodle.id}`}>
                    <p>{review.noodle.brand} {review.noodle.flavor}</p>
                </Link>
                <Link to={`/users/${review.user.id}`}>
                    <p>By {review.user.name}</p>
                </Link>
                    <p className='card-body'>{review.overall_comment}</p>
            </div>
        </div>
    )
}

export default ReviewItem