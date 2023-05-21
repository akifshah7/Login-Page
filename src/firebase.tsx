import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { GoogleAuthProvider, getAuth, signInWithPopup, signInWithEmailAndPassword,createUserWithEmailAndPassword, sendPasswordResetEmail, signOut } from "firebase/auth";
// import { getFirestore, query, getDocs, collection, where, addDoc} from "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC70O0utm_nuytzO1u8iEBiToT4ft8o4WY",
  authDomain: "login-auth-3a352.firebaseapp.com",
  databaseURL: "https://login-auth-3a352-default-rtdb.firebaseio.com",
  projectId: "login-auth-3a352",
  storageBucket: "login-auth-3a352.appspot.com",
  messagingSenderId: "247542083324",
  appId: "1:247542083324:web:2608caedcc1bf80edd7179",
  measurementId: "G-C5WC24Z95V"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {
  auth
}

// module.exports = {
//   stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
//   addons: [
//     '@storybook/addon-links',
//     '@storybook/addon-essentials',
//     '@storybook/preset-create-react-app',
//     '@storybook/addon-interactions',
//   ],
// };
// const db = getFirestore(app);
// const googleProvider = new GoogleAuthProvider();
// const signInWithGoogle = async () => {
//   try {
//     const res = await signInWithPopup(auth, googleProvider);
//     const user = res.user;
//     const q = query(collection(db, "users"), where("uid", "==", user.uid));
//     const docs = await getDocs(q);
//     if (docs.docs.length === 0) {
//       await addDoc(collection(db, "users"), {
//         uid: user.uid,
//         name: user.displayName,
//         authProvider: "google",
//         email: user.email,
//       });
//     }
//   } catch (err) {
//     console.error(err);
//     alert(err.message);
//   }
// };

// const logInWithEmailAndPassword =  async (email,password) => {
//   try {
//     await signInWithEmailAndPassword(auth, email, password);
//   } catch (err) {
//     console.log(err);
//     alert(err.message)
//   }
// };

// const registerWithEmailAndPassword = async (name, email, password) => {
//   try {
//     const res = await createUserWithEmailAndPassword(auth, email, password);
//     const user = res.user;
//     await addDoc(collection(db, "users"), {
//       uid: user.uid,
//       name,
//       authProvider: "local",
//       email,
//     });
//   } catch (err) {
//     console.error(err);
//     alert(err.message);
//   }
// };

// const sendPasswordReset = async(email) => {
//   try {
//     await sendPasswordResetEmail(auth, email);
//     alert("Password reset link sent");
//   }catch(err) {
//     console.log(err);
//     alert(err.message);    
//   }
// }

// const logout = () => {
//   signOut(auth);
// }

// export {
//   auth,
//   db,
//   signInWithGoogle,
//   logInWithEmailAndPassword,
//   registerWithEmailAndPassword,
//   sendPasswordReset,
//   logout,
// };