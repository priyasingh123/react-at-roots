import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    //name, initialState and reducers
    name: 'cart',
    initialState: {
        items:[]
    },
    reducers: {
        //addItem is reducer is mapped to action addItem
        addItem: (state, action)=> {
            //we are mutating state directly which was 
            //earlier not recommended in original redux
            state.items.push(action.payload)
        },
        removeItem: (state, action) => {
            state.items = state.items.filter((item) => {
                return item != action.payload
            })
        },
        clearCart: (state) => {
            /*
            //to print state use "current" for redux
            console.log ('first state',current (state))
            //doing state=[], wont work as state would mean local variable 
            state = []
            */
            state.items.length = 0
        }
    }
})


export const {addItem, removeItem, clearCart} = cartSlice.actions;
//here is it reducer
//default will be reducer
export default cartSlice.reducer;