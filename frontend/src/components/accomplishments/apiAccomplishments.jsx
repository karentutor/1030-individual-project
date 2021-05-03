export const create = (userId, token, patient) => {
    return fetch(`${process.env.REACT_APP_API_URL}/accomplishment/new/${userId}`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`
        },
   body: patient
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};
export const getThings = () => {
    return fetch(`${process.env.REACT_APP_API_URL}/accomplishment`, {
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
    return fetch(`${process.env.REACT_APP_API_URL}/accomplishment/${portfolioId}`, {
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

export const singleAccomplishment = accomplishmentId => {

    return fetch(`${process.env.REACT_APP_API_URL}/accomplishment/${accomplishmentId}`, {
        method: "GET"
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

export const update = (accomplishmentId, token, accomplishment) => {
    
    return fetch(`${process.env.REACT_APP_API_URL}/accomplishment/${accomplishmentId}`, {
        method: "PUT",
        headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`
        },
        body: accomplishment
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

