export const create = (userId, token, patient) => {
    return fetch(`${process.env.REACT_APP_API_URL}/project/new/${userId}`, {
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
    return fetch(`${process.env.REACT_APP_API_URL}/project`, {
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
    return fetch(`${process.env.REACT_APP_API_URL}/project/${portfolioId}`, {
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

export const singleProject = projectId => {

    return fetch(`${process.env.REACT_APP_API_URL}/project/${projectId}`, {
        method: "GET"
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

export const update = (projectId, token, project) => {
    
    return fetch(`${process.env.REACT_APP_API_URL}/project/${projectId}`, {
        method: "PUT",
        headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`
        },
        body: project
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

