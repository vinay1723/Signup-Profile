import "./Profile.css";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setUser, setToken } from "./userSlice";
import { useNavigate } from "react-router-dom";

function Profile() {
  const [nativeuser, setNativeUser] = useState();
  let token = useSelector((state) => state.User.token);
  let dispatch = useDispatch();
  let navigate = useNavigate();

  useEffect(
    function () {
      if (!token) {
        navigate("/signup");
        return;
      }
      const user = JSON.parse(localStorage.getItem(token)) || "";
      setNativeUser(user);
    },
    [token, navigate]
  );

  function handleLogout() {
    if (token) {
      dispatch(setToken(""));
      dispatch(setUser(null));
    }

    navigate("/signup");
  }
  return (
    <div>
      <ul id="profile-data">
        <li>Profile</li>
        <li>Full Name: {nativeuser && nativeuser.fullname}</li>
        <li>Email: {nativeuser && nativeuser.email}</li>
        <li>Password: {nativeuser && nativeuser.password}</li>
        <button onClick={handleLogout} id="logout">
          {token ? "Logout" : "Signup"}
        </button>
      </ul>
    </div>
  );
}

export default Profile;
