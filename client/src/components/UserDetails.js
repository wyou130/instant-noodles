import { useEffect, useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import ReviewItem from './ReviewItem'

function UserDetails({ onSeeDetails, displayItem, currentUser, onDeleteUser, onEditUser }) {

    let { id } = useParams()
    let history = useHistory()
    const [isEditing, setIsEditing] = useState(false)
    const [name, setName] = useState(currentUser.name)
    const [location, setLocation] = useState(currentUser.location)
    const [image, setImage] = useState(currentUser.image)

    useEffect(() => {
        fetch(`/users/${id}`)
        .then(res => {
            if(res.ok) {
                res.json()
                .then(oneUser => onSeeDetails(oneUser))
            }
        })
    }, [id])

    function handleUserEdit() {
        setIsEditing(!isEditing)
    }

    function handleUpdate(e) {
        e.preventDefault()
        let updateInput = {
            name: name,
            location: location,
            image: image
        }
        // console.log(updateInput)
        fetch(`/users/${currentUser.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(updateInput)
        }) 
            .then(res => {
                if(res.ok) {
                    res.json()
                    .then((updatedUser) => onEditUser(updatedUser)) 
                    .then(handleUserEdit)
                }
                alert('Profile successfully updated!')
            })
    }
    
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
                        {isEditing ? 
                            <form onSubmit={handleUpdate}>
                                <label htmlFor="name">Username</label>
                                <input 
                                    type="text" 
                                    name="name" 
                                    value={name}
                                    onChange={e => setName(e.target.value)}
                                />
                                <label htmlFor="location">Location</label>
                                <input 
                                    type="text" 
                                    name="location" 
                                    value={location}
                                    onChange={e => setLocation(e.target.value)}
                                />
                                <label htmlFor="image">Profile Picture</label>
                                <input 
                                    type="text" 
                                    name="image" 
                                    value={image}
                                    onChange={e => setImage(e.target.value)}
                                />
                                <button type="submit">Update</button>
                            </form>
                            :
                            <div>
                                <img alt="me" src={displayItem.image}/>
                                <h3>{displayItem.name}</h3>
                                <p>From: {displayItem.location}</p>
                            </div>
                        }
                        {displayItem.id === currentUser.id && !isEditing ? <div>
                        <button onClick={() => handleUserEdit(currentUser)}>Edit Profile</button>
                        <button onClick={() => handleUserDelete(currentUser)}>Delete Account</button>
                        </div> : null}
                    </div>
                    <div>
                        <h3>All {displayItem.name}'s Reviews</h3>
                        <div>
                            {
                                displayItem.reviews ? 
                                displayItem.reviews.map(review => <ReviewItem key={review.id} review={review}/>) 
                                : null
                            }
                        </div>
                    </div>
                </div>
                    : 
                <p>Loading...</p>}
        </div>
    )
}

export default UserDetails