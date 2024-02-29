import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, deleteUser, updateEmail, updateName } from './features/Users';
import { useState } from 'react';
import { nanoid } from '@reduxjs/toolkit';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {

  const dispatch = useDispatch()
  const userList = useSelector((state) => state.users.value)
  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [newEmail,setNewEmail] = useState('')
  const [newName,setNewName] = useState('')


  const handleSubmit = (e) => {
    e.preventDefault()
    setName('')
    setEmail('')
    setNewEmail('')
    setNewName('')
  }

  return (
    <div className="bg-gray-300 rounded-[30px]">
      <h1 className='text-[40px] text-center'>My Todo List</h1>
        <div className=' w-[500px] h-auto pt-[30px] mx-auto my-auto'>
          <form onSubmit={handleSubmit}>
            <input type='text' placeholder='       Enter Name...' className='rounded-[10px]' value={name} onChange={(e) => {setName(e.target.value)}} />
            <input type='email' placeholder='      Enter Email...' className='ml-2 rounded-[10px]' value={email} onChange={(e) => {setEmail(e.target.value)}}/>
            <button type='submit' className='bg-gray-800 p-1 rounded-[10px] text-white ml-2' onClick={() => {dispatch(addUser({id:nanoid(),name,email}))}}>Add User</button>
          </form>
        </div>
      <div className='w-[500px] mx-auto pb-[30px]'>
        {userList.map((user) => {
          return( 
          <div className='w-[410px] h-[200px] bg-gray-500 my-[10px] p-[5px] rounded-[20px]'>
            <h1 className='text-center text-[30px]'>{user.name}</h1>
            <h1 className='text-center mb-[10px]'>{user.email}</h1>
            <form onSubmit={handleSubmit}>
              <input type='text' placeholder='         New Name...' value={newName} onChange={(e) => {setNewName(e.target.value)}} className='rounded-[10px]'/>
              <button type='submit' onClick={() => dispatch(updateName({id:user.id, name: newName}))} className='bg-gray-800 p-1 rounded-[10px] text-white ml-2'>Update Name</button>
              <button onClick={() => dispatch(deleteUser({id:user.id}))} className='bg-gray-800 p-1 rounded-[10px] text-white ml-2'>Delete User</button><br/>
              <input type='text' placeholder='         New Email...' value={newEmail} onChange={(e) => {setNewEmail(e.target.value)}} className='rounded-[10px]'/>
              <button type='submit' onClick={() => dispatch(updateEmail({id:user.id, email: newEmail}))} className='bg-gray-800 p-1 rounded-[10px] text-white ml-2 mt-2'>Update Email</button>
            </form>
          </div>
          )
        })}
      </div>
      <ToastContainer />
    </div>
  );
}

export default App;
