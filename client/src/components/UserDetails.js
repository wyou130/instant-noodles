import { useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import ReviewItem from './ReviewItem'

function UserDetails({ onSeeDetails, displayItem, currentUser, onDeleteUser }) {

    let { id } = useParams()
    let history = useHistory()

    useEffect(() => {
        fetch(`/users/${id}`)
        .then(res => {
            if(res.ok) {
                res.json()
                .then(oneUser => onSeeDetails(oneUser))
            }
        })
    }, [id])
    
    function handleUserDelete(currentUser) {
        if(window.confirm('Are you sure you want to delete your account?')) {
            fetch(`/users/${currentUser.id}`, {
                method: 'DELETE'
              })
              .then(() => {
                  onDeleteUser(currentUser)
                  history.push('/login')
              })
        } 
    }

    return(
        <div>
            User Profile
            {displayItem ? 
                <div>
                    <div>
                        <h3>{displayItem.name}</h3>
                        <p>From: {displayItem.location}</p> 
                    </div>
                    <div>
                        <h3>All {displayItem.name}'s Reviews</h3>
                        <div>
                            {displayItem.reviews.map(review => <ReviewItem key={review.id} review={review}/>)}
                        </div>
                    </div>
                    {displayItem.id === currentUser.id ? <div>
                        <button>Edit Profile</button>
                        <button onClick={() => handleUserDelete(currentUser)}>Delete Account</button>
                    </div> : null}
                </div>
                    : 
                <p>Loading...</p>}
        </div>
    )
}

export default UserDetails