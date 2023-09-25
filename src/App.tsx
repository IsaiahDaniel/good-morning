import Header from "./components/shared/Header/Header";
import Home from "./pages/Home";

import { useAuthState } from "react-firebase-hooks/auth";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";

import { auth } from "./config/firebase";
import Dashboard from "./pages/Dashboard";

const App = () => {

  // const [user, loading, error] = useAuthState(auth);
  // const navigate = useNavigate();

  // console.log("user", user);

  // if(loading){
  //   return <h2>Loading.....</h2>
  // }

  // useEffect(() => {
  //   if(user){
  //     navigate("/dashboard")
  //   }
  // }, [user]);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;