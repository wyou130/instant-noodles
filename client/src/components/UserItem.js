import { Link } from 'react-router-dom'

function UserItem({ user }) {
    return(
        <div>
            <Link to={`/users/${user.id}`}>
                <h3>{user.name}</h3>
                <p>From: {user.location}</p>
                <p>{user.number_of_reviews} Reviews</p>
                <p>See {user.name}'s Full Profile & Reviews</p>
            </Link>
        </div>
    )
}

export default UserItem