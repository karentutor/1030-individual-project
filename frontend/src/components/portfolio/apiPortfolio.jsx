export const create = (userId, token, portfolio) => {
    return fetch(`${process.env.REACT_APP_API_URL}/portfolio/new/${userId}`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`
        },
        body: portfolio
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

export const getThings = () => {
    return fetch(`${process.env.REACT_APP_API_URL}/portfolio`, {
        method: "GET"
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

export const getTypes = () => {
    return fetch(`${process.env.REACT_APP_API_URL}/type`, {
        method: "GET"
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

export const remove = (portfolioId, token) => {
    return fetch(`${process.env.REACT_APP_API_URL}/portfolio/${portfolioId}`, {
        method: "DELETE",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        }
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};