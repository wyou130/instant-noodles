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
                    .then((updatedUser) => onSeeDetails(updatedUser)) 
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
            {displayItem ? 
                <div>
                    <div>
                        {isEditing ? 
                            <div>
                                <button className='btn btn-secondary' onClick={() => handleUserEdit(currentUser)}>Cancel</button>
                                <br/>
                                <form onSubmit={handleUpdate}>
                                    <div className='form-group row mx-5 my-2'>
                                        <label className='col-sm-2 col-form-label' htmlFor="name">Username</label>
                                        <div className='col-sm-8'>
                                            <input 
                                                className='form-control'
                                                type="text" 
                                                name="name" 
                                                value={name}
                                                onChange={e => setName(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                    <div className='form-group row mx-5 my-2'>
                                        <label className='col-sm-2 col-form-label' htmlFor="location">Location</label>
                                        <div className='col-sm-8'>
                                            <input 
                                                className='form-control'
                                                type="text" 
                                                name="location" 
                                                value={location}
                                                onChange={e => setLocation(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                    <div className='form-group row mx-5 my-2'>
                                        <label className='col-sm-2 col-form-label' htmlFor="image">Profile Picture</label>
                                        <div className='col-sm-8'>
                                            <input 
                                                className='form-control'
                                                type="text" 
                                                name="image" 
                                                value={image}
                                                onChange={e => setImage(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                    <button className='btn btn-secondary' type="submit">Update</button>
                                </form>
                            </div>
                            :
                            <div className='card mb-3 mx-auto'>
                                <div className='row no-gutters flexCont'>
                                    <div className="col-md-4">
                                        <img className="card-img my-5 mx-5" alt="me" src={displayItem.image}/>
                                    </div>
                                    <div className='col-md-8'>
                                        <h3 className='card-title my-5'>{displayItem.name}</h3>
                                        <p>From: {displayItem.location}</p>
                                    </div>
                                </div>
                            </div>
                        }
                        {displayItem.id === currentUser.id && !isEditing ? 
                            <div>
                                <button className='btn btn-secondary' onClick={() => handleUserEdit(currentUser)}>Edit Profile</button> 
                                <button className='btn btn-secondary' onClick={() => handleUserDelete(currentUser)}>Delete Account</button>
                            </div> 
                            : 
                            null
                        }
                    </div>
                    <br/>
                    <div>
                        <h3>All {displayItem.name}'s Reviews</h3>
                        <div>
                            {displayItem.reviews ? 
                                <div className="container-fluid">
                                    <div className="row">
                                        {displayItem.reviews.map(review => <ReviewItem key={review.id} review={review}/>)}
                                    </div>
                                </div>
                                : 
                                null
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