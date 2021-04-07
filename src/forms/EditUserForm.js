import React, { useState } from 'react';


const EditUserForm=(props)=>{
    const [user, setUser] = useState(props.currentUser)

    const handleChange=(event)=>{
        const {name, value}= event.target

        setUser({...user, [name]:value})
    }

    const handleUpdate=()=>{
        props.updateUser(user.id, user);
    }

    return(
        <form>
            <label>
                Name
            </label>
            <input 
            type="text"
            name="name"
            value={user.name}
            onChange={handleChange}/>
            <label>
                Username
            </label>
            <input
            type="text"
            name="username"
            value={user.username}
            onChange={handleChange}/>
            <input type="button" value="Update User" onClick={handleUpdate}/>
        </form>
    )
}

export default EditUserForm