export async function getProductList(urlProduct) {
    const response = await fetch(
        `${process.env.REACT_APP_HOST}/products?name_like=${
            urlProduct ? urlProduct : ""
        }`
    );
    if (!response.ok) {
        throw new Error({
            message: response.statusText,
            status: response.status,
        });
    }
    const dataProduct = await response.json();
    return dataProduct;
}
export async function getProduct(id) {
    const promise = await fetch(`${process.env.REACT_APP_HOST}/products/${id}`);
    if (!promise.ok) {
        throw new Error({
            message: promise.statusText,
            status: promise.status,
        });
    }
    const data = await promise.json();
    return data;
}
export async function getFeaturedList() {
    const response = await fetch(
        `${process.env.REACT_APP_HOST}/featured_products`
    );
    if (!response.ok) {
        throw new Error({
            message: response.statusText,
            status: response.status,
        });
    }
    const dataResult = await response.json();
    return dataResult;
}
