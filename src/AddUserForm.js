import React, { useState } from 'react'


const AddUserForm =(props)=>{
    const initialFormState = { id: null, name: '', username: '' }
    const [userData, setUserData]= useState(initialFormState)

    const handleForm=(event)=>{
        
        const {name, value}= event.target

        
        setUserData({...userData, [name]: value})
    }

    const handleSubmit=()=>{
        props.addUser(userData)
        setUserData(initialFormState)
    }

    return(
        <form>
            <label>Name</label>
            <input type="text" name="name" value={userData.name} onChange={handleForm}/>
            <label>Username</label>
            <input type="text" name="username" value={userData.username} onChange={handleForm}/>
            <input type="button" onClick={handleSubmit} value="Add user"/>
        </form>
    )
}
export default AddUserForm