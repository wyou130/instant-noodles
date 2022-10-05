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

    // console.log(displayItem)

    return(
        <div>
            Individual Noodle Details 
            {displayItem ? 
                <div>
                    <p>{displayItem.brand} {displayItem.flavor}</p>
                    <p>Birthplace: {displayItem.birthplace}</p> 
                    <p>Style: {displayItem.style}</p>
                </div>
                : 
                <p>Loading...</p>}
        </div>
    )
}

export default NoodleDetails