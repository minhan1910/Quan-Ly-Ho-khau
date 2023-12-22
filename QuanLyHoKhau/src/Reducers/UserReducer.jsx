import { createSlice } from "@reduxjs/toolkit";
import { userList } from "./Data";

const userSlice = createSlice({
  name: "users",
  initialState: userList,
  reducers: {
    addUser: (state, action) => {
      state.push(action.payload);
      state.sort((a, b) => b.userId - a.userId);
    },
    editUser: (state, action) => {
        const existingUserIdx = state.findIndex(user => user.userId == action.payload.userId);
        if (existingUserIdx != -1) {
            state[existingUserIdx] = {...action.payload};            
            const userHistory = `Đã chỉnh sửa ${action.payload.name} lúc ${new Date().toUTCString()}`;

            if (localStorage.getItem("userHistory") !== null) {

              const userHistoryFromLocal = JSON.parse(localStorage.getItem("userHistory"));
              userHistoryFromLocal.push(userHistory);
              

              localStorage.setItem("userHistory", JSON.stringify(userHistoryFromLocal));
            } else {
              localStorage.setItem("userHistory", JSON.stringify([userHistory]));
            }
        }
    },
    deleteUser: (state, action) => {
        const existingUserIdx = state.findIndex(user => user.userId == action.payload.userId);
        if (existingUserIdx != -1) {
            state.splice(existingUserIdx, 1);
        }
    },
  },
});

export const { addUser, editUser, deleteUser } = userSlice.actions;

export default userSlice.reducer;
