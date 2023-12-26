import Login from "./Login";
import { RootState } from "../redux/store/store";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { login } from "./../redux/slice/userSlice";
import { useDispatch } from "react-redux";
import Navbar from "../components/Navbar";

const Home = () => {
  const navigate = useNavigate();
  const isLogin = useSelector((state: RootState) => state.user.isLogin);
  console.log(isLogin);
  const [users, setUsers] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get("http://localhost:5000/home", {
        headers: {
          Authorization: `barear ${token}`,
        },
      })
      .then((res) => {
        setUsers(res.data);
      });
  }, []);

  console.log(users);
  return (
    <div>
      {isLogin ? (
        <>
          <Navbar />
          {/* <button
            onClick={() => {
              localStorage.clear();
              navigate("/login");
              dispatch(login(false));
            }}
          >
            Log out
          </button> */}
          <ul>
            {users &&
              users.map((item, i) => {
                return <li key={i}>{item.name}</li>;
              })}
          </ul>
        </>
      ) : (
        <Login />
      )}
    </div>
  );
};

export default Home;
