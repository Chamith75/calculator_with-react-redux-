import { createSlice } from "@reduxjs/toolkit";

const Slice = createSlice({
    name:'Slice',
    initialState:{
        Input : '',

    },
    reducers:{
        onhandleClick(state,action)  {
            const {value } = action.payload
            console.log(value)
            state.Input += value;

        },
        onhandleClear(state){
            state.Input = '';
        },
        onhandleEval(state){
            try {
                state.Input = eval(state.Input).toString();
            } catch (error) {
                state.Input = 'Error';
            }
        }

    }
})


export default Slice;
export const { onhandleClick , onhandleClear , onhandleEval} = Slice.actions