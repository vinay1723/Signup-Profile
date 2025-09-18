import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  useEffect(function () {
    navigate("/signup");
  }, []);
  return <div></div>;
}

export default Home;
