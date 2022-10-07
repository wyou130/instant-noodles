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
        onSeeDetails(displayItem)
        toggleForm()
    }

    return(
        <div>
            {displayItem ? 
                <div>
                    <div className='card mb-3 mx-auto'>
                        <div className='row no-gutters flexCont'>
                            <div className="col-md-4">
                                <img
                                    src={displayItem.image}
                                    className="card-img my-5 mx-5"
                                    alt="Instant noodle"
                                ></img>
                            </div>
                            <div className='col-md-8'>
                                <h3 className='card-title my-5'>{displayItem.brand} {displayItem.flavor}</h3>
                                <p>Average Review: {"⭐️".repeat(displayItem.average_reviews)}</p> 
                                <p>Birthplace: {displayItem.birthplace}</p> 
                                <p>Style: {displayItem.style}</p>
                            </div>
                        </div>
                    </div>
                    <br/>
                    <div>
                        <div>
                            <h3>Reviews for {displayItem.brand} {displayItem.flavor} &#40;{displayItem.total_reviews}&#41;</h3>
                        </div>
                        <br/>
                        <div>
                            <button className='btn btn-secondary' onClick={toggleForm}>{formShowing ? "Cancel" : "Add Review"}</button>
                            {formShowing ? <ReviewForm currentUser={currentUser} displayItem={displayItem} onSubmitNewReview={onSubmitNewReview}/> : null}
                        </div>
                        <br/>
                        <div className="container-fluid">
                            <div className="row">
                                {currentReviews.map(review => <ReviewItem key={review.id} review={review}/>)}
                            </div>
                        </div>
                    </div>
                </div>
                    : 
                <p>Loading...</p>}
        </div>
    )
}

export default NoodleDetails