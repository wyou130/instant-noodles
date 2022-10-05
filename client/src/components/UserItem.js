import { Link } from 'react-router-dom'

function UserItem({ user }) {
    return(
        <div>
            <Link to={`/users/${user.id}`}>
                <h3>{user.name}</h3>
                <p>From: {user.location}</p>
                <p>{user.number_of_reviews} Reviews</p>
                <p>See {user.name}'s Full Profile & Reviews</p>
                {/* will move map of ReviewItem to UserDetails so can see all reviews only in the profile, will only render full review in the user#show route  */}
                {/* <div> */}
                    {/* <div>{user.reviews.map(review => <ReviewItem key={review.id} review={review}/>)}</div> */}
                {/* </div> */}
            </Link>
        </div>
    )
}

export default UserItem