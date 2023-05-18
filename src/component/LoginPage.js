import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signInWithGoogle, updateProfile } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from '../firebase';
import Confirmation from "./Confirmation";


const LoginPage = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: ""
  });
  const [err,setErr] = useState('');
  // const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  // const logIn = (e) => {
  //   e.preventDefault()    
  //   createUserWithEmailAndPassword(auth, values.email, values.password).then((userCredentials) => {
  //     console.log(userCredentials)
  //   }).catch((error) => {
  //     console.log(error)
  //   })
  // }

  const handleSubmit = () => {
    if ( !values.name  || !values.email|| !values.password) {
      setErr("Fill all fields");
      return
    }
    setErr("");  
    createUserWithEmailAndPassword(auth, values.email, values.password).then(async(userCredentials) => {
      const user = userCredentials.user;
      await updateProfile(user, {
        displayName: values.name,
      });
      navigate("/confirmation")
    }).catch((error) => {
      console.log(error)
    })  
  }

  // useEffect(() => {
  //   if (loading) return;
  //   if (user) navigate("/confirmation");
  // }, [user, loading]);


  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded px-10 py-8 w-full sm:w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
        <div>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-bold text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              onChange={(e) => setValues((prev) => ({...prev, name: e.target.value}))}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-bold text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              value={values.email}
              onChange={(e) => setValues((prev) => ({...prev, email: e.target.value}))}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-bold text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={values.password}
              onChange={(e) => setValues((prev) => ({...prev, password: e.target.value}))}
              placeholder="Password"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <b className="bold text-sm  text-red-500">{err}</b>
            <br/>
            <button
              type="submit"
              className="w-full bg-black text-white font-bold py-2 px-4 rounded  focus:outline-none"
              onClick={handleSubmit}
            >
              Sign Up
            </button>
          </div>
        </div>
        <p className="text-sm text-center text-gray-500">
          Already have an account?{" "}
          <a href="#" className="text-gray-950 underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
