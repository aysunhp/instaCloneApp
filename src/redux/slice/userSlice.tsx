import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

export interface User {
  id: string;
  name: string;
  surname: string;
  email: string;
  userName: string;
  password: string;
  userImage: string;
  stories: User[];
  posts: User[];
  notifications: string[];
  isPublic: boolean;
  following: User[];
  follower: User[];
  blockList: User[];
  bio: {
    info: string;
    country: string;
  };
}

interface LoginUser {
  userName: string;
  password: string;
}

export interface UserState {
  users: User[];
  user: User | undefined;
  status: string;
  error: string | null | undefined;
  isLogin: User | null;
}

const initialState: UserState = {
  isLogin: null,
  users: [],
  user: {
    id: "",
    name: "",
    surname: "",
    email: "",
    userName: "",
    userImage: "",
    password: "",
    stories: [],
    posts: [],
    notifications: [],
    isPublic: true,
    following: [],
    follower: [],
    blockList: [],
    bio: {
      info: "",
      country: "",
    },
  },
  status: "idle",
  error: null,
};

export const getAllUsers = createAsyncThunk<User[]>(
  "/getAllUsers",
  async () => {
    try {
      const token = localStorage.getItem("token") || "{}";
      const response = await axios.get("http://localhost:5000/users", {
        headers: {
          Authorization: `bearer ${token}`,
        },
      });

      return response.data;
    } catch (error) {
      console.error("Error fetching users:", error);
      throw error;
    }
  }
);

export const getUser = createAsyncThunk<LoginUser>("/getUser", async () => {
  try {
    const found = JSON.parse(localStorage.getItem("user") || "{}");
    const token = localStorage.getItem("token") || "{}";
    const response = await axios.get("http://localhost:5000/users", {
      headers: {
        Authorization: `bearer ${token}`,
      },
    });

    return found;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
});

export const followUser = createAsyncThunk<User>("/followUser", async (id) => {
  try {
    console.log(" sebine id:", id);
    const localUser = JSON.parse(localStorage.getItem("user") || "{}");

    const token = localStorage.getItem("token") || "{}";
    const response = await axios.get("http://localhost:5000/users", {
      headers: {
        Authorization: `bearer ${token}`,
      },
    });

    const user = response.data.find(
      (item: User) =>
        item.userName == localUser.userName &&
        item.password == localUser.password
    );

    const existingUserData = await axios.get(
      `http://localhost:5000/users/${id}`
    );
    const existingUser = existingUserData.data;

    console.log("Before first patch");
    try {
      const response1 = await axios.patch(`http://localhost:5000/users/${id}`, {
        follower: [...existingUser.follower, user],
      });
      console.log("After first patch", response1.data);
    } catch (error) {
      console.error("Error during first patch:", error);
      throw error; // Rethrow the error to be caught by the calling code
    }

    console.log("Before second patch");
    try {
      const response2 = await axios.patch(
        `http://localhost:5000/users/${user.id}`,
        {
          following: [...user.following, existingUser],
        }
      );
      console.log("After second patch", response2.data);
    } catch (error) {
      console.error("Error during second patch:", error);
      throw error; // Rethrow the error to be caught by the calling code
    }

    return existingUser;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
});

export const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<boolean>) => {
      // state.isLogin = action.payload;
      console.log(action.payload);
    },
    loginUser: (state, action: PayloadAction<User | null>) => {
      console.log(action.payload);
      state.isLogin = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getAllUsers.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getAllUsers.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.users = action.payload;
      })
      .addCase(getAllUsers.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });

    builder
      .addCase(getUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = state.users.find(
          (item) =>
            item.userName == action.payload.userName &&
            item.password == action.payload.password
        );
      })
      .addCase(getUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });

    builder
      .addCase(followUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(followUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        console.log("gelen user", action.payload);

        const updatedUserData = action.payload;
        state.user = {
          ...state.user,
          following: updatedUserData,
        };
        console.log("menim deyisenim", state.user);
      })
      .addCase(followUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { login, loginUser } = UserSlice.actions;

export default UserSlice.reducer;
