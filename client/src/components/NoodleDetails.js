import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

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
                        <p>{displayItem.reviews.map(review => review.overall_comment)}</p>
                    </div>
                </div>
                    : 
                <p>Loading...</p>}
        </div>
    )
}

export default NoodleDetails