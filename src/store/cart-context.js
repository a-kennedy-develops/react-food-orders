import React from 'react';

// Manage the items (items, num, add/remove)
const CartContext = React.createContext({
    items: [],
    totalAmount: 0,
    addItem: (item) => {},
    removeItem: (id) => {},
    clearCart: () => {}
});

export default CartContext;