import { useEffect, useState } from "react"
import { getUsers } from "../service/api.js"


const Users = () => {
    const [users, setUsers] = useState([])
    useEffect(() =>{
        getUsers().then(data => setUsers(data))
    }, [])
    return (
        <ul>
         {users.map((user, i) => <li key={i}>{user.user}</li>)}
        </ul>
    )
}

export default Users