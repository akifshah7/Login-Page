import React,{useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import {auth} from '../firebase'
// import { logout } from '../firebase';

const Confirmation = () => {
  const [authUser,setAuthUser] = useState(null);  
  const navigate = useNavigate();  
  const goBack = () => {
    navigate("/")
  }
  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
        if(user) {
            setAuthUser(user);
        }else {
            setAuthUser(null);
        }
    })

  },[])
  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-100'>
        <div className='bg-white shadow-md rounded px-10 py-8 w-full sm:w-96 '>
            <h1 className='text-center text-2xl font-bold mb-6'>User Authenticated</h1>
            <div className='text-1xl text-center font-bold mb-4'>
                {authUser && <p>{`Signed in as ${authUser.email}`}</p>}
            </div>
            <button className='w-1/2 bg-black py-2 px-4 text-white center ml-16 rounded' onClick={goBack}>Go Back</button>
        </div>
    </div>
  )
}

export default Confirmation