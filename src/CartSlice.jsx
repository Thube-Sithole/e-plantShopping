
import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
    },
    reducers: {
        addItem: (state, action) => {
            const { name, image, cost } = action.payload;

            // Check whether the plant already exists in the cart
            const existingItem = state.items.find(
                (item) => item.name === name
            );

            if (existingItem) {
                // Increase quantity if the plant is already in the cart
                existingItem.quantity++;
            } else {
                // Add a new plant with an initial quantity of 1
                state.items.push({
                    name,
                    image,
                    cost,
                    quantity: 1,
                });
            }
        },

        removeItem: (state, action) => {
            // Remove the plant matching the provided name
            state.items = state.items.filter(
                (item) => item.name !== action.payload
            );
        },

        updateQuantity: (state, action) => {
            const { name, quantity } = action.payload;

            // Find the plant to update
            const itemToUpdate = state.items.find(
                (item) => item.name === name
            );

            if (itemToUpdate) {
                // Update the plant's quantity
                itemToUpdate.quantity = quantity;
            }
        },
    },
});

// Export action creators for use in components
export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

// Export the reducer for the Redux store
export default CartSlice.reducer;
