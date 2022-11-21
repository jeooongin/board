import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

/* api 역할을 담당할 sleep 함수 구현
나중에 비동기 액션의 sleep 함수를 api를 받아오도록 변경 */
function sleep(ms, data = null) {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve(data);
    }, ms)
  );
}

// 더미 데이터
const dummyUser = (data) => ({
  ...data,
  id: 1,
  email: "gildong@naver.com",
  name: "홍길동",
  nickName: "의적",
  introduce: "홍길동입니다.",
});

// initialState
const initialState = {
  me: null,
  logInLoading: false,
  logInDone: false,
  logInFailure: null,
  logOutFailure: null,
  signUpLoading: false,
  signUpDone: false,
  signUpFailure: null,
};

// 비동기 액션
export const logIn = createAsyncThunk("user/login", async (data, thunkAPI) => {
  try {
    const response = await sleep(1000);
    return response;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

export const logOut = createAsyncThunk("user/logout", async () => {
  const response = await sleep(1000);
  return response;
});

export const signUp = createAsyncThunk(
  "user/signup",
  async (data, thunkAPI) => {
    try {
      const response = await sleep(1000);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

// reducer
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(logIn.pending, (state) => {
        state.logInLoading = true;
        state.logInDone = false;
        state.logInFailure = null;
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.logInLoading = false;
        state.logInDone = true;
        state.me = dummyUser(action.payload);
      })
      .addCase(logIn.rejected, (state, action) => {
        state.logInLoading = false;
        state.logInDone = false;
        state.logInFailure = action.payload;
      })
      .addCase(logOut.pending, (state) => {
        state.logInDone = true;
        state.logOutFailure = null;
      })
      .addCase(logOut.fulfilled, (state) => {
        state.logInDone = false;
        state.me = null;
      })
      .addCase(logOut.rejected, (state, action) => {
        state.logInDone = true;
        state.logOutFailure = action.payload;
      })
      .addCase(signUp.pending, (state) => {
        state.signUpLoading = true;
        state.signUpDone = false;
        state.signUpFailure = null;
      })
      .addCase(signUp.fulfilled, (state) => {
        state.signUpLoading = false;
        state.signUpDone = true;
      })
      .addCase(signUp.rejected, (state, action) => {
        state.signUpLoading = false;
        state.signUpDone = false;
        state.signUpFailure = action.payload;
      }),
});

export default userSlice;
