import { createSlice } from "@reduxjs/toolkit";
import { householdList } from "./Data";
// {
//     householdId: 2,
//     householdName: "An",
//     numberOfPersons: 5,
//     address: "Addresss",
//     tamTru: false,
//     tamVang: false
// },
const householdSlice = createSlice({
  name: "households",
  initialState: householdList,
  reducers: {
    addHousehold: (state, action) => {
      state.push(action.payload);
      state.sort((a, b) => b.householdId - a.householdId);
    },
    editHousehold: (state, action) => {
        const idxId = state.findIndex(item => item.householdId == action.payload.householdId)
        if (idxId != -1) {
            state[idxId] = {...action.payload};
        }
    },
    deleteHousehold: (state, action) => {
        const idxId = state.findIndex(item => item.householdId == action.payload.householdId)
        if (idxId != -1) {
            state.splice(idxId, 1);
        }
    }
  },
});

export const { addHousehold, editHousehold, deleteHousehold } = householdSlice.actions;

export default householdSlice.reducer;
