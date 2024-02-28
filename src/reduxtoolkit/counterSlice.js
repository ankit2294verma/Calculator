import {createSlice} from '@reduxjs/toolkit';

const CounterSlice = createSlice({
    name:'Counter',
    initialState:0,
    reducers:{
        Increment(state,action){
            state=state+1;
            return state
        },
        Decrement(state,action){
            state=state-1;
            return state
        }
    }
})

export const {Increment, Decrement} = CounterSlice.actions;
export default CounterSlice.reducer; 