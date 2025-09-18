import Profile from "./components/Profile";
import Header from "./components/Header";
import Signup from "./components/Signup";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div id="app">
      <Router>
        <Header />
        <Routes>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
