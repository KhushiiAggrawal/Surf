import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createUser, login, updateUser, changePassword } from "../api/Auth_api";
import { toast } from "react-toastify";

const initialState = {
  user: null,
  status: "idle",
};

export const createUserAsync = createAsyncThunk(
  "Auth/createUSer",
  async (userData) => {
    const data = await createUser(userData);
    return data;
  }
);
export const loginAsync = createAsyncThunk("Auth/login", async (userInput) => {
  const data = await login(userInput);
  return data;
});
export const updateUserAsync = createAsyncThunk(
  "Auth/userUpdate",
  async (userId, newData) => {
    const data = await updateUser(userId, newData);
    return data;
  }
);
export const changePasswordAsync = createAsyncThunk(
  "Auth/passChange",
  async (passwordObj) => {
    const data = await changePassword(passwordObj.userId, {
      currentPass: passwordObj.currentPass,
      newPass: passwordObj.newPass,
    });
    return data;
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createUserAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(createUserAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.user = action.payload;
        toast.success("🦄 Account created", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      })
      .addCase(loginAsync.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(loginAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.user = action.payload;
        state.error = null;
        toast.success("🦄 Login Success", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      })
      .addCase(loginAsync.rejected, (state, action) => {
        state.status = "idle";
        toast.error(action.error.message, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      })
      .addCase(updateUserAsync.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(updateUserAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.user = action.payload;
        state.error = null;
        toast.success("User Updated", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      })
      .addCase(changePasswordAsync.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(changePasswordAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.user = action.payload;
        state.error = null;
        toast.success("Password Changed!", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      })
      .addCase(changePasswordAsync.rejected, (state, action) => {
        state.status = "idle";
        toast.error(action.error.message, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      });
  },
});

export const { increment } = authSlice.actions;

export default authSlice.reducer;
