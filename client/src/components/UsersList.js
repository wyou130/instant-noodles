import { useEffect, useState } from "react"
import UserItem from "./UserItem"

function UsersList() {

    const [usersList, setUsersList] = useState([])

    useEffect(() => {
        fetch('/users')
            .then(res => res.json())
            .then(users => setUsersList(users))
    }, [])

    return(
        <div>
            <h1>
               Reviewers
            </h1>
            <div>
                {usersList.length > 0 ? usersList.map(user => <UserItem key={user.id} user={user}/>) : null}
            </div>
        </div>
    )
}

export default UsersList 