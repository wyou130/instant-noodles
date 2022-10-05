import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ReviewItem from './ReviewItem'

function UserDetails({ onSeeDetails, displayItem }) {

    let { id } = useParams()

    // console.log(id)

    useEffect(() => {
        fetch(`/users/${id}`)
        .then(res => {
            if(res.ok) {
                res.json()
                .then(oneUser => onSeeDetails(oneUser))
            }
        })
    }, [id])

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
                </div>
                    : 
                <p>Loading...</p>}
        </div>
    )
}

export default UserDetails