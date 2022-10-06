import { useEffect, useState } from "react"
import ReviewItem from "./ReviewItem"

function ReviewsList() {

    const [reviewsList, setReviewsList] = useState([])

    useEffect(() => {
        fetch('/reviews')
            .then(res => res.json())
            .then(reviews => setReviewsList(reviews))
    }, [])

    return(
        <div>
            <h1>
               Reviews
            </h1>
            <div className="container-fluid">
                <div className="row">
                    {reviewsList.map(review => <ReviewItem key={review.id} review={review}/>)}
                </div>
            </div>
        </div>
    )
}

export default ReviewsList 