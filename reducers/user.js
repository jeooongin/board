import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

/* 
  api 역할을 담당할 sleep 함수 구현
  나중에 비동기 액션의 sleep 함수를 api를 받아오도록 변경
*/
function sleep(ms, data = null) {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve(data);
    }, ms)
  );
}

// initialState
const initialState = {
  me: null,
  signUpLoading: false,
  signUpDone: false,
  signUpFailure: null,
};

// 비동기 액션
export const signUp = createAsyncThunk(
  "user/signup",
  async (data, thunkAPI) => {
    try {
      const response = await sleep(1000);
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
