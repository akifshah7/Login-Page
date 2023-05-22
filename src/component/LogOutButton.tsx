import React, { useState } from 'react';
import { getAuth, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const LogOutButton = () => {
  const [isSuccess, setIsSuccess] = useState(false);
  const auth = getAuth();

  const navigate = useNavigate();

  
  // const goBack = () => {
  //   navigate("/")
  // }

  const handleLogOut = () => {
    signOut(auth).then((res) => {
        console.log(res);        
         setIsSuccess(true);
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

LogOutButton.propTypes = {
  label: PropTypes.string,
  backgroundColor: PropTypes.string,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  handleClick: PropTypes.func

}

export default LogOutButton;  