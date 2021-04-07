import React, { useState } from 'react';
import UserTable from './table/UserTable'
import AddUserForm from './AddUserForm';
import EditUserForm from './forms/EditUserForm'

const App=()=>{

  const userData=[
    {id: 1, name: 'shubham', username:"shubhamvinayak"},
    {id: 2, name: 'ram', username:"ramananda"},
    {id: 3, name: 'alec', username:"jhonson alec"},
  ]

  const [users, setUser]= useState(userData)
  const [editing, setEditing] = useState(false)

  const initialFormState={
    id: null,
    name:'',
    username:''
  }

  const [currentUser, setCurrentUser]= useState(initialFormState)

  const editUser=(user)=>{
    setEditing(true);

    setCurrentUser({id: user.id, name: user.name, username: user.username})
  }


  const addUser=(user)=>{
    user.id= users.length +1;
    setUser([...users, user])
  }

  const deleteUser=(id)=>{
    setUser(users.filter((el)=> el.id !== id))
  }

  const updateUser = (id, updatedUser) => {
    setEditing(false)
  
    setUser(users.map((user) => (user.id === id ? updatedUser : user)))
  }


  return(
    <div className='container'>
      <h1> CRUD app with react hooks</h1>
      <div className='flex-row'>
        <div className='flex-large'>
          {editing ?
        (<div>
          <h2>Edit User</h2>
          <EditUserForm setEditing={setEditing} currentUser={currentUser} updateUser={updateUser}/>
        </div> ) :
        (
          <div>
          <h2>Add user</h2>
          <AddUserForm addUser={addUser}/>
        </div>
        )
        }
        </div>
        <div className='flex-large'>
          <h2>View User</h2>
          <UserTable user={users} editUser={editUser} deleteUser={deleteUser}/>
        </div>
      </div>
    </div>
  )
}
export default App