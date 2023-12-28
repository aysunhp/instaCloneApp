import Login from "./Login";
import { RootState } from "../redux/store/store";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser, getAllUsers, User } from "./../redux/slice/userSlice";
import { useDispatch } from "react-redux";
import LeftBar from "../components/LeftBar";
import axios from "axios";

const Home = () => {
  const navigate = useNavigate();
  const isLogin = useSelector((state: RootState) => state.user.isLogin);
  const users: User[] = useSelector((state: RootState) => state.user.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllUsers());
    dispatch(loginUser());
  }, [dispatch]);
  // console.log(data);
  console.log(users);

  return (
    <>
      {isLogin ? (
        <>
          <LeftBar />
        </>
      ) : (
        <Login />
      )}
    </>
  );
};

export default Home;
