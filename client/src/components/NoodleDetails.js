import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ReviewForm from './ReviewForm'
import ReviewItem from './ReviewItem'

function NoodleDetails({ onSeeDetails, displayItem, currentUser }) {

    let { id } = useParams()

    const [formShowing, setFormShowing] = useState(false)
    const [currentReviews, setCurrentReviews] = useState([])

    // console.log(id)

    useEffect(() => {
        fetch(`/noodles/${id}`)
        .then(res => {
            if(res.ok) {
                res.json()
                .then(oneNoodle => {
                    onSeeDetails(oneNoodle)
                    setCurrentReviews(oneNoodle.reviews)
                })
            }
        })
    }, [id])

    function toggleForm() {
        setFormShowing(!formShowing)
    }

    function onSubmitNewReview(newReview) {
        setCurrentReviews([...currentReviews, newReview])
    }

    return(
        <div>
            Individual Noodle Details 
            {displayItem ? 
                <div>
                    <div>
                        <h3>{displayItem.brand} {displayItem.flavor}</h3>
                        <p>Average Review: {"⭐️".repeat(displayItem.average_reviews)}</p> 
                        <p>Birthplace: {displayItem.birthplace}</p> 
                        <p>Style: {displayItem.style}</p>
                    </div>
                    <div>
                        <button onClick={toggleForm}>{formShowing ? "Cancel" : "Add Review"}</button>
                        {formShowing ? <ReviewForm currentUser={currentUser} displayItem={displayItem} onSubmitNewReview={onSubmitNewReview}/> : null}
                        <h3>Reviews for {displayItem.brand} {displayItem.flavor}</h3>
                        <div>
                            {currentReviews.map(review => <ReviewItem key={review.id} review={review}/>)}
                        </div>
                    </div>
                </div>
                    : 
                <p>Loading...</p>}
        </div>
    )
}

export default NoodleDetails