import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  // Syncronous
  reducers: {
    // We havent defined any name of these actions
    // because redux tool kit will automaticly do that
    // because of that reason we dont use 
    // "counter/increment" ... names
    // When we had syncronous actions we did the reducers first and then we difine the actions
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },

  // Asyncronous
  extraReducers: (builder) => {
    // Builder is a tool that is going to allow us to essentially add cases to reducers
    builder
      .addCase(incrementAsync.pending, () => {
        console.log("incrementAsync.pending");
      })
      .addCase(
        incrementAsync.fulfilled,
        (state, action: PayloadAction<number>) => {
          state.value += action.payload;
        }
      );
  },
});

// In the case of asynchronous functions we had to define our name ourselves
// And In the case of asynchronous functions we always define the action first using createAsyncThunk
export const incrementAsync = createAsyncThunk( // action
  "counter/incrementAsync", // action name
  async (amount: number) => { // actual function
    await new Promise((resolve) => setTimeout(resolve, 2000)); // wait 2 second
    return amount;
  }
);

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;