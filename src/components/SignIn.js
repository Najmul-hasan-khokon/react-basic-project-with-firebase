import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import React, { useState } from "react";
import "../Firebase"; // app object from firebase.

const SignIn = () => {
  const [user, setUser] = useState({
    // state update hole value gula update hobe. state er vitore multiple value o dite pari.
    isSignIn: false,
    display: "",
    emails: "",
  });

  const provider = new GoogleAuthProvider();
  const auth = getAuth();

  // signin handler fucntion with google
  const signInHandler = () => {
    // signin with popup
    signInWithPopup(auth, provider)
      .then((res) => {
        // The signed-in user info.
        const { displayName, email } = res.user; // destructure from res.user

        const result = { isSignIn: true, name: displayName, email: email }; // custom keys with destructuring value
        setUser(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // signOut fucntion
  const signOutHandler = () => {
    signOut(auth)
      .then((res) => {
        // signOut e click korle setUser ke abar ager jaygay niye jabe.
        setUser({ isSignIn: false, display: "", emails: "" });
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
      });
  };

  return (
    <div>
      <h1>signin here</h1>
      <button onClick={signInHandler}>sign in</button>
      <button onClick={signOutHandler}>signOut</button>

      {user.isSignIn && (
        <div>
          <h1>username : {user.name}</h1>
          <h3>email : {user.email}</h3>
        </div>
      )}
    </div>
  );
};

export default SignIn;
