import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cookies from "js-cookie";

import Home from "./pages/Home";
import Offers from "./pages/Offers";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

import Header from "./component/Header";

function App() {
  const handleToken = (token) => {
    if (token) {
      Cookies.set("userToken", token, { expire: 7 });
    } else {
      Cookies.remove("userToken");
    }
  };
  return (
    <Router>
      <Header handleToken={handleToken} />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/offer/:Id" element={<Offers />}></Route>
        <Route
          path="/signup"
          element={<Signup handleToken={handleToken} />}
        ></Route>
        <Route
          path="/login"
          element={<Login handleToken={handleToken} />}
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;
