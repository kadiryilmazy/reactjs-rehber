import { createContext, useContext, useState } from "react";

export const CartContext = createContext();

export const useCartContext = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error("useCartContext must be used within a CartContextProvider");
    }
    return context;
};

export function CartContextProvider({ children }) {
    const [cart, setCart] = useState(null);
    return <CartContext.Provider value={{ cart, setCart }}>{children}</CartContext.Provider>;
}
