import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ReviewItem from './ReviewItem'

function NoodleDetails({ onSeeDetails, displayItem }) {

    let { id } = useParams()

    // console.log(id)

    useEffect(() => {
        fetch(`/noodles/${id}`)
        .then(res => {
            if(res.ok) {
                res.json()
                .then(oneNoodle => onSeeDetails(oneNoodle))
            }
        })
    }, [id])

    // console.log(displayItem.reviews.map(review => review.overall_comment))

    return(
        <div>
            Individual Noodle Details 
            {displayItem ? 
                <div>
                    <div>
                        <p>{displayItem.brand} {displayItem.flavor}</p>
                        <p>Birthplace: {displayItem.birthplace}</p> 
                        <p>Style: {displayItem.style}</p>
                    </div>
                    <div>
                        <div>{displayItem.reviews.map(review => <ReviewItem key={review.id} review={review}/>)}</div>
                    </div>
                </div>
                    : 
                <p>Loading...</p>}
        </div>
    )
}

export default NoodleDetails