import axios from "axios";
import Cookies from "cookies-js";


const api = axios.create({
    baseURL: 'http://localhost:3000',
    // withCredentials: true
});

const jwtToken = Cookies.get('jwt');



///////////////////GETTING




export const lookupTenants = name => {
    // const data = JSON.stringify({
    //     name: name.queryKey[1],
    //     token: jwtToken
    // });
    const query = name.queryKey[1];
    console.log('INSIDE NAMEWISE', )

    return api.get(`/tenant/namewise/${query}`, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(result => {
            console.log(result);
            return result.data;
        })
        .catch(err => {
            console.log(err)
        });
};

export const fetchTenants = ({ queryKey }) => {
    const debtQuery = queryKey[1];
    console.log('debtQuery, ', debtQuery)
    const query = debtQuery === 'all'? '/all':(debtQuery === 'debtful'? '/debt': '/debtless')
    
    return api.get(`/tenant${query}`, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(result => {
            console.log(result);
            return result.data;

        })
        .catch(err => {
            console.log(err)
        });
};




////////////////////////////////POSTING ETC.




export const createTenant = tenantInfo => {    
    const data = JSON.stringify({
        tenantInfo, 
        token: jwtToken
    });    
    console.log('CREATEIGN IN API', data)                    
    return api.post('/tenant/new', data, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(result => {
            console.log(result);
            return result.data;
        })
        .catch(err => {
            console.log(err)
        });
};

export const editTenant = tenantInfo => {
    const data = JSON.stringify({
        tenantInfo, 
        token: jwtToken
    });    
    console.log('EDIT TENANT API', data)
    return api.put('/tenant/edit', data, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(result => {
            console.log(result);
            return result.data;
        })
        .catch(err => {
            console.log(err)
        });
};

export const removeTenant = ({ _id }) => {                             ////////////////SENDING ALL DETAILS IN CASE TO BETTER MATCH TENANT sINCE NO ID
    const data = JSON.stringify({
        tenantId: _id,
        token: jwtToken
    }); 
    console.log('ABOUT TO DELETE TENANT', data)
    return api.put('/tenant/delete', data, {
        headers: {
            'Content-Type': 'application/json'
        },
        // data: {
        //     data
        // }
    })
        .then(result => {
            console.log(result);
            return result.data;
        })
        .catch(err => {
            console.log(err)
        });
};
