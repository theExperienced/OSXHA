import axios from "axios";

const api = axios.create({
    baseURL: 'http://localhost:3000',
    // withCredentials: true, credentials: 'include'
    // withCredentials: true
});


export const signUp = (username, password) => {
    const userInfo = JSON.stringify({
        username,
        password
    });

    return api.post('/user/signup', userInfo, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(result => {
            console.log(result);
            return result;
        })
        .catch(err => {
            console.log(err)
        });
};

export const logIn = (username, password) => {
    const userInfo = JSON.stringify({
        username,
        password
    });

    return api.post('/user/login', userInfo, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(result => {
            console.log('SUCCESS IN LOGIN', result);
            return result;
        })
        .catch(err => {
            console.log('ERROR IN LOGGING IN', err)
        });
};

export const logOut = () => {
    // const userInfo = JSON.stringify({
    //     username,
    //     password
    // });

    return api.post('/user/logout', {
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(result => {
            console.log('SUCCESS IN LOGOUT', result);
            return result;
        })
        .catch(err => {
            console.log('ERROR IN LOGGING OUT', err)
        });
};