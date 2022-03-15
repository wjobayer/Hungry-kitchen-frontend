import {
  createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile
} from "firebase/auth";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import initializeAuthentication from "../Firebase/firebase.init";

// initialize firebase app
initializeAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [authError, setAuthError] = useState("");
  const [admin, setAdmin] = useState(false);

  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  let navigate = useNavigate();

  // login with google
  const loginWithGoogle = () => {

    const test = () => {
      signInWithPopup(auth, googleProvider)
        .then(result => {
          console.log(result)
          console.log(result.user.email)
          console.log(result.user.displayName)
          setUser(result.user);
          const phoneNumber = '';
          const role = 'customer'
          saveUser(result.user.email, result.user.displayName, role, phoneNumber, "POST");
          console.log(result.user.displayName);
        })
        .catch((error) => { setAuthError(error.message) })
    }


    return test();

    // return signInWithPopup(auth, googleProvider);

    // navigate('/');
  };

  // const loginWithGoogle = () => {

  //   setIsLoading(true);
  //   signInWithPopup(auth, googleProvider)
  //     .then((result) => {
  //       const user = result.user;
  //       // const phoneNumber = '';
  //       // const role = 'customer'
  //       saveUser(user.email, user.displayName, "PUT");
  //       setAuthError("");
  //     })
  //     .catch((error) => {
  //       setAuthError(error.message);
  //     })
  //     .finally(() => setIsLoading(false));
  // };





  // register
  const registerUser = (email, name, role, phoneNumber, password, history) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setAuthError("");
        const newUser = { email, displayName: name };
        setUser(newUser);
        // send and save user to mongodb
        saveUser(email, name, role, phoneNumber, "POST");
        // send name to firebase after creation
        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then(() => { })
          .catch((error) => { });
        navigate("/");
      })
      .catch((error) => {
        const errorMessage = error.message;
        setAuthError(errorMessage);
      })
      .finally(() => setIsLoading(false));
  };

  // login
  const loginUser = (email, password, location, history) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // const loggedinUser = userCredential;
        // console.log(loggedinUser);
        const destination = location?.state?.from || "/";
        navigate(destination);
        setAuthError("");
      })
      .catch((error) => {
        const errorMessage = error.message;
        setAuthError(errorMessage);
      })
      .finally(() => setIsLoading(false));
  };

  // observer state
  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribed;
  }, []);

  // logout
  const logout = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      })
      .finally(() => setIsLoading(false));
  };

  // isAdmin
  useEffect(() => {
    fetch(`https://hungry-kitchen-app.herokuapp.com/users/${user.email}`)
      .then((res) => res.json())
      .then((data) => console.log(data.admin));
  }, [user.email]);

  // send login data to mongodb
  const saveUser = (email, displayName, method) => {
    const user = { email, displayName };
    fetch("https://hungry-kitchen-app.herokuapp.com/users", {
      method: method,
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    }).then();
  };

  // send login with google data to mongodb
  // const phoneNumber = '';
  // const role = 'customer'
  // saveUser(user.email, user.displayName, role, phoneNumber, "POST");

  // console.log(authError);

  return {
    user,
    admin,
    isLoading,
    authError,
    loginWithGoogle,
    registerUser,
    loginUser,
    logout,
  };
};

export default useFirebase;
