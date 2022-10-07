import { Link } from 'react-router-dom'

function UserItem({ user }) {
    return(
        <div className="card-deck col-sm-3 my-3">
            <Link to={`/users/${user.id}`}>
                <div class="card text-card">
                    <img className="card-img-top" alt='me' src={user.image}/>
                    <h4 className='card-title my-3'>{user.name}</h4>
                    <div className='card-body'>
                        <p>From: {user.location}</p>
                        <p>{user.number_of_reviews} Reviews</p>
                        <p>See {user.name}'s Full Profile & Reviews</p>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default UserItem