import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        addToCart: (state, action) => {
            if (!state.find((item) => item.id == action.payload.id)) {
                state.push({ id: action.payload.id, quantity: 1 });
            } else {
                state.map((item) => {
                    if (item.id == action.payload.id) {
                        item.quantity += 1;
                    }
                });
            }
        },
        decreaseQuantity: (state, action) => {
            state.map((item) => {
                if (item.id == action.payload.id) {
                    if (!(item.quantity == 1)) {
                        item.quantity--;
                        localStorage.setItem("cart", JSON.stringify(state));
                    } else {
                        state.splice(
                            state.findIndex((item) => item.id == action.payload.id),
                            1
                        );
                    }
                }
            });
        },
        deleteItem: (state, action) => {
            state.splice(
                state.findIndex((item) => item.id == action.payload.id),
                1
            );
        }
    }
})


export const { addToCart, decreaseQuantity, deleteItem } = cartSlice.actions;

export default cartSlice.reducer;