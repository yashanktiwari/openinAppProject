import { Outlet, useNavigate } from "react-router-dom";
import { auth } from "./utils/firebase";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";

const App = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        navigate("/dashboard");
      } else {
        // User is signed out
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <>
      <Outlet />
    </>
  )
}

export default App
