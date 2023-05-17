import { createContext, useContext } from "react";
import { useReducer } from "react";
import { filterReducer } from "../reducers";
const filterInitialState = {
    productList: [],
    onlyStock: false,
    bestSellerOnly: false,
    sortBy: null,
    raTings: null,
};

export const FilterContext = createContext(filterInitialState);
export const FilterProvider = ({ children }) => {
    const [state, dispatch] = useReducer(filterReducer, filterInitialState);
    function initialProductList(products) {
        dispatch({
            type: "PRODUCT_LIST",
            payload: {
                products: products,
            },
        });
    }

    function bestSeller(products) {
        return state.bestSellerOnly
            ? products.filter((product) => product.best_seller === true)
            : products;
    }

    function inStock(products) {
        return state.onlyStock
            ? products.filter((product) => product.in_stock === true)
            : products;
    }

    function sort(products) {
        if (state.sortBy === "lowToHigh") {
            products.sort((a, b) => Number(a.price) - Number(b.price));
        }

        if (state.sortBy === "highToLow") {
            return products.sort((a, b) => Number(b.price) - Number(a.price));
        }
        return products;
    }

    function rating(products) {
        if (state.raTings === "4STARSABOVE") {
            return products.filter((product) => product.rating >= 4);
        }
        if (state.raTings === "3STARSABOVE") {
            return products.filter((product) => product.rating >= 3);
        }
        if (state.raTings === "2STARSABOVE") {
            return products.filter((product) => product.rating >= 2);
        }
        if (state.raTings === "1STARSABOVE") {
            return products.filter((product) => product.rating >= 1);
        }

        return products;
    }
    const filteredProductList = sort(
        rating(inStock(bestSeller(state.productList)))
    );
    const value = {
        state,
        dispatch,
        products: filteredProductList,
        initialProductList,
    };
    return (
        <FilterContext.Provider value={value}>
            {children}
        </FilterContext.Provider>
    );
};
export const useFilter = () => {
    // console.log(FilterContext, 1111111);
    const context = useContext(FilterContext);
    // console.log(context, 222222);
    return context;
};
