import React, { useState } from 'react';
import { getAuth, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const LogOutButton = () => {
  const [isSuccess, setIsSuccess] = useState(false);
  const auth = getAuth();
  const navigate = useNavigate();

  
  const goBack = () => {
    navigate("/")
  }

  const handleLogOut = () => {
    signOut(auth).then((res) => {
        console.log(res);        
         setIsSuccess(true);
         if(isSuccess) {
         goBack();
      }
      })  
  }

  return (
    <div>
        <button onClick={handleLogOut} className='w-1/2 bg-black py-2 px-4 text-white center ml-16 rounded'>
            Log Out
        </button>
    </div>
  )
}

export default LogOutButton