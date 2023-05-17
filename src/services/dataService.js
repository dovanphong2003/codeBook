function getSession() {
    const token = JSON.parse(sessionStorage.getItem("token"));
    const cbid = JSON.parse(sessionStorage.getItem("cbid"));
    return { token, cbid };
}

export async function getInfoUser() {
    const browserData = getSession();

    const requestOptions = {
        method: "GET",
        headers: {
            "content-Type": "application/json",
            Authorization: `Bearer ${browserData.token}`,
        },
    };
    const response = await fetch(
        `${process.env.REACT_APP_HOST}/600/users/${browserData.cbid}`,
        requestOptions
    );
    const data = await response.json();
    return data;
}

export async function getUser() {
    const browserData = getSession();
    const requestOptions = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${browserData.token}`,
        },
    };
    const response = await fetch(
        `${process.env.REACT_APP_HOST}/600/users/${browserData.cbid}`,
        requestOptions
    );
    const data = await response.json();
    return data;
}
export async function createOrder(cartList, total, user) {
    const token = JSON.parse(sessionStorage.getItem("token"));
    const order = {
        cartList: cartList,
        amount_paid: total,
        quantity: cartList.length,
        user: {
            name: user.name,
            email: user.email,
            id: user.id,
        },
    };
    const requestOptions = {
        method: "POST",
        headers: {
            "content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(order),
    };
    const response = await fetch(
        `${process.env.REACT_APP_HOST}/660/orders`,
        requestOptions
    );
    const data = await response.json();
    return data;
}
export async function getUserOrders() {
    const browserData = getSession();
    const response = await fetch(
        `${process.env.REACT_APP_HOST}/660/orders?user.id=${browserData.cbid}`,
        {
            method: "GET",
            headers: {
                "content-Type": "application/json",
                Authorization: `Bearer ${browserData.token}`,
            },
        }
    );
    const data = await response.json();
    return data;
}
