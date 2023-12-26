import Login from "./Login";
import { RootState } from "../redux/store/store";
import { useSelector} from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const isLogin = useSelector((state: RootState) => state.user.isLogin);
  console.log(isLogin);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get("http://localhost:5000/products", {
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
          <h1>Home</h1>
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
