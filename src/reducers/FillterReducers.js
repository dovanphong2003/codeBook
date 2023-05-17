export const filterReducer = (state, action) => {
    const { type, payload } = action;
    switch (type) {
        case "PRODUCT_LIST":
            return { productList: payload.products };
        case "SORT_BY":
            return { ...state, sortBy: payload.sortBy };
        case "RATING":
            return { ...state, raTings: payload.raTings };
        case "BEST_SELLER_ONLY":
            return { ...state, bestSellerOnly: payload.bestSellerOnly };
        case "ONLY_IN_STOCK":
            return { ...state, onlyStock: payload.onlyStock };
        case "CLEAR_FILTER":
            return {
                productList: payload.products,
            };
        default:
            throw new Error("No case found!");
    }
};
