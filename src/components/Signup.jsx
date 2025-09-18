import "./Signup.css";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUser, setToken } from "./userSlice";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [fullname, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("none");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector((state) => state.User.token);

  //   Step 8: Handle Redirects
  // Using useEffect hook to handle redirects based on the user's authentication state.

  useEffect(() => {
    if (token) {
      setTimeout(() => navigate("/profile"), 1000);
    }
  }, [token, navigate]);

  function generateToken(num = 8) {
    let characters = "";
    for (let i = 65; i <= 122; i++) {
      if (i >= 91 && i <= 96) continue;
      characters += String.fromCharCode(i);
    }
    characters += "0123456789";
    let token = "";
    for (let i = 0; i < num; i++) {
      token += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    return token;
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    if (!fullname || !email || !password || !confPassword) {
      setMessage("Error : All the fields are mandatory");
      setStatus("bad");
      return;
    }
    const user = {
      fullname,
      email,
      password,
      confPassword,
    };

    // Using Redux to manage the authentication state of the user. Store user details and access token in Redux state.

    let token = generateToken(); // generating the token
    dispatch(setUser(user)); // storing user information in redux state
    dispatch(setToken(token)); // storing token information in redux state

    localStorage.setItem(`${token}`, JSON.stringify(user));
    setMessage("form successfully submitted");
    setStatus("good");

    setTimeout(() => {
      navigate("/profile"); // using timers to delay the navigation to profile page to ensure success message appearance
    }, 2000);
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <h1>Signup</h1>
      <div>
        <input
          type="text"
          placeholder="Full Name"
          value={fullname}
          onChange={(e) => setFullName(e.target.value)}
        />
      </div>
      <div>
        <input
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div>
        <input
          type="password"
          placeholder="confirmpassword"
          value={confPassword}
          onChange={(e) => setConfPassword(e.target.value)}
        />
      </div>

      {/* Using useState hook to manage success and error messages. Display success message in green text upon successful signup. */}

      {message && (
        <p
          id="message"
          style={{ color: `${status === "good" ? "green" : "red"}` }}
        >
          {message}
        </p>
      )}
      <button id="signup">Signup</button>
    </form>
  );
}

export default Signup;
