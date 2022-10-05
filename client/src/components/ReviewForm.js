import { useState } from 'react'

function ReviewForm({ currentUser, displayItem, onSubmitNewReview }) {

    const [noodleRating, setNoodleRating] = useState("")
    const [noodleComment, setNoodleComment] = useState("")
    const [toppingsRating, setToppingsRating] = useState("")
    const [toppingsComment, setToppingsComment] = useState("")
    const [spiceRating, setSpiceRating] = useState("")
    const [spiceComment, setSpiceComment] = useState("")
    const [overallRating, setOverallRating] = useState("")
    const [overallComment, setOverallComment] = useState("")

    function handleSubmit(e) {
        e.preventDefault()
        let reviewInput = {
            noodle_rating: noodleRating,
            noodle_comment: noodleComment,
            toppings_rating: toppingsRating,
            toppings_comment: toppingsComment,
            spice_rating: spiceRating,
            spice_comment: spiceComment,
            overall_rating: overallRating,
            overall_comment: overallComment,
            user_id: currentUser.id,
            noodle_id: displayItem.id
        }
        // console.log(reviewInput)
        fetch('/reviews', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(reviewInput)
        })
            .then(res => {
                if(res.ok) {
                    res.json()
                    .then(newReview => onSubmitNewReview(newReview))
                }
            })
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <datalist id="tickmarks">
                    <option value="0" label="0"></option>
                    <option value="1" label="1"></option>
                    <option value="2" label="2"></option>
                    <option value="3" label="3"></option>
                    <option value="4" label="4"></option>
                    <option value="5" label="5"></option>
                </datalist>
                <label htmlFor="noodleRating">Noodle Rating</label>
                <input  
                    className='rating'
                    type="range" 
                    min="0"
                    max="5"
                    step="0.5"
                    list="tickmarks"
                    name="noodleRating" 
                    value={noodleRating}
                    onChange={e => setNoodleRating(e.target.value)}
                />
                <label htmlFor="noodleComment">Noodle Comment</label>
                <input
                    type="text" 
                    name="noodleComment" 
                    value={noodleComment}
                    onChange={e => setNoodleComment(e.target.value)}
                />
                <br/>
                <label htmlFor="toppingsRating">Toppings Rating</label>
                <input  
                    className='rating'
                    type="range" 
                    min="0"
                    max="5"
                    step="0.5"
                    list="tickmarks"
                    name="toppingsRating" 
                    value={toppingsRating}
                    onChange={e => setToppingsRating(e.target.value)}
                />
                <label htmlFor="toppingsComment">Toppings Comment</label>
                <input
                    type="text" 
                    name="toppingsComment" 
                    value={toppingsComment}
                    onChange={e => setToppingsComment(e.target.value)}
                />
                <br/>
                <label htmlFor="spiceRating">Spice Rating</label>
                <input  
                    className='rating'
                    type="range" 
                    min="0"
                    max="5"
                    step="0.5"
                    list="tickmarks"
                    name="spiceRating" 
                    value={spiceRating}
                    onChange={e => setSpiceRating(e.target.value)}
                />
                <label htmlFor="spiceComment">Spice Comment</label>
                <input
                    type="text" 
                    name="spiceComment" 
                    value={spiceComment}
                    onChange={e => setSpiceComment(e.target.value)}
                />
                <br/>
                <label htmlFor="overallRating">Overall Rating</label>
                <input  
                    required 
                    className='rating'
                    type="range" 
                    min="0"
                    max="5"
                    step="0.5"
                    list="tickmarks"
                    name="overallRating" 
                    value={overallRating}
                    onChange={e => setOverallRating(e.target.value)}
                />
                <label htmlFor="overallComment">Overall Comment</label>
                <input 
                    required
                    type="text" 
                    name="overallComment" 
                    value={overallComment}
                    onChange={e => setOverallComment(e.target.value)}
                />
                <br/>
                <button type="submit">Submit Review</button>
            </form>
        </div>
    )
}

export default ReviewForm