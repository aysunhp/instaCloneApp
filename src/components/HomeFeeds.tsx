import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { RootState } from "../redux/store/store";
import { useSelector } from "react-redux";
import { createElement, useEffect } from "react";
import { getAllUsers, User, getUser } from "./../redux/slice/userSlice";
import { useDispatch } from "react-redux";

const HomeFeeds = () => {
  const users: User[] = useSelector((state: RootState) => state.user.users);
  const user: User | undefined = useSelector(
    (state: RootState) => state.user.user
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllUsers());
    dispatch(getUser());
  }, [dispatch]);

  const followings = [user?.following];

  let arr;
  arr = followings[0]?.map((item) => {
    return item.posts;
  });

  console.log(arr);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={0}>
        <Grid item xs={10} style={{ margin: "auto" }}>
          <div className="feeds">
            <div className="containerr">
              <div className="card">
                <div className="card-header">
                  <img
                    className="avatar"
                    src="https://placekitten.com/40/40"
                    alt="User Avatar"
                  />
                  <div className="username">john_doe</div>
                </div>
                <div className="caption">
                  Beautiful sunset view 🌅 #nature #sunset
                </div>
                <div className="card-image">
                  <img
                    className="image"
                    src="https://i.pinimg.com/564x/e5/23/c1/e523c14e5ccb6ee7b3e7e2752d2e20c0.jpg"
                    alt="Post Image"
                  />
                </div>
                <div className="card-footer">
                  <div className="likes">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      width="24"
                      viewBox="0 0 512 512"
                    >
                      <path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z" />
                    </svg>
                    <span>234</span>
                  </div>
                  <div className="comments">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      width="24"
                      viewBox="0 0 512 512"
                    >
                      <path d="M168.2 384.9c-15-5.4-31.7-3.1-44.6 6.4c-8.2 6-22.3 14.8-39.4 22.7c5.6-14.7 9.9-31.3 11.3-49.4c1-12.9-3.3-25.7-11.8-35.5C60.4 302.8 48 272 48 240c0-79.5 83.3-160 208-160s208 80.5 208 160s-83.3 160-208 160c-31.6 0-61.3-5.5-87.8-15.1zM26.3 423.8c-1.6 2.7-3.3 5.4-5.1 8.1l-.3 .5c-1.6 2.3-3.2 4.6-4.8 6.9c-3.5 4.7-7.3 9.3-11.3 13.5c-4.6 4.6-5.9 11.4-3.4 17.4c2.5 6 8.3 9.9 14.8 9.9c5.1 0 10.2-.3 15.3-.8l.7-.1c4.4-.5 8.8-1.1 13.2-1.9c.8-.1 1.6-.3 2.4-.5c17.8-3.5 34.9-9.5 50.1-16.1c22.9-10 42.4-21.9 54.3-30.6c31.8 11.5 67 17.9 104.1 17.9c141.4 0 256-93.1 256-208S397.4 32 256 32S0 125.1 0 240c0 45.1 17.7 86.8 47.7 120.9c-1.9 24.5-11.4 46.3-21.4 62.9zM144 272a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm144-32a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm80 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64z" />
                    </svg>
                    <span>94</span>
                  </div>
                </div>
              </div>
              {}
            </div>
          </div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HomeFeeds;
