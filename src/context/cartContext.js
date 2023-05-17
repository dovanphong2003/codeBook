import { createContext, useContext, useReducer } from "react";
import { cartReducer } from "../reducers";
const cartInitialState = {
    cartList: [],
    total: 0,
};

const cartContext = createContext(cartInitialState);
export const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, cartInitialState);
    function addToCart(product) {
        const updateList = state.cartList.concat(product);
        console.log(state);
        const updateTotal = state.total + product.price;
        console.log(product.price);
        console.log(state);
        dispatch({
            type: "ADD_TO_CART",
            payload: { products: updateList, updateTotal: updateTotal },
        });
    }

    function removeFromCart(product) {
        const updatedList = state.cartList.filter(
            (item) => item.id !== product.id
        );
        const updateTotal = state.total - product.price;
        dispatch({
            type: "REMOVE_fROM_CART",
            payload: { products: updatedList, updateTotal: updateTotal },
        });
    }

    function clearCart() {
        dispatch({
            type: "CLEAR_CART",
            payload: { products: [], total: 0 },
        });
    }

    const value = {
        cartList: state.cartList,
        total: state.total,
        addToCart,
        removeFromCart,
        clearCart,
    };
    return (
        <cartContext.Provider value={value}>{children}</cartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(cartContext);
    return context;
};
