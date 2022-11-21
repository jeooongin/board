import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import faker from "faker";
import shortid from "shortid";

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
const generateDummyPost = (number) =>
  Array(number)
    .fill()
    .map(() => ({
      id: shortid.generate(),
      User: {
        id: shortid.generate(),
        nickName: faker.name.findName(),
      },
      content: faker.lorem.paragraph(),
      Comment: [
        {
          User: {
            id: shortid.generate(),
            nickName: faker.name.findName(),
          },
          content: faker.lorem.sentence(),
        },
      ],
    }));

// initialState
const initialState = {
  mainPost: [],
  loadPostLoading: false,
  loadPostDone: false,
  loadPostFailure: null,
};

// 비동기 액션
export const loadPost = createAsyncThunk("post/loadpost", async (thunkAPI) => {
  try {
    const response = await generateDummyPost(10);
    return response;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

// reducer
const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(loadPost.pending, (state) => {
        state.loadPostLoading = true;
        state.loadPostDone = false;
        state.loadPostFailure = null;
      })
      .addCase(loadPost.fulfilled, (state, action) => {
        state.loadPostLoading = false;
        state.loadPostDone = true;
        state.loadPostFailure = null;
        state.mainPost = state.mainPost.concat(generateDummyPost(10));
      })
      .addCase(loadPost.rejected, (state, action) => {
        state.loadPostLoading = false;
        state.loadPostDone = false;
        state.loadPostFailure = action.payload;
      }),
});
export default postSlice;
