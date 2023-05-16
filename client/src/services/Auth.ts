import axios from "./axios";

export const verifyPhoneNumber = async (phone_number: string) => {
    try {
        const response = await axios.post(`/accounts/getotp/`, { phone_number });
        return {
            data: response.data,
            error: null
        }
    } catch (err: any) {
        console.log("ERROR ---->", err?.response?.data ?? err);
        return {
            data: null,
            error: err.response?.data ?? {}
        }
    }
}

export const registerUser = async (body: any) => {
    try {
        console.log({ body })
        const response = await axios.post('/accounts/create/user/', body);
        console.log({ response: response })
        if (response.data) {
            return {
                data: response.data,
                error: null
            }
        } else {
            return {
                data: null,
                error: 'Something went wrong'
            };
        }
    } catch (err: any) {
        console.log('ERROR=====>', err)
        return {
            data: null,
            error: err.response ?? {}
        };
    }
}

export const loginUser = async (body: any) => {
    try {
        const response = await axios.post('/accounts/login/', { ...body, is_verified: true });
        console.log({ response })
        if (response.data) {
            return {
                data: response.data,
                error: null
            }
        } else {
            return {
                data: null,
                error: true
            };
        }
    } catch (err: any) {
        console.log("ERROR----->", err.response.data)
        return {
            data: null,
            error: err.response ?? {}
        };
    }
}

export const getMyProfile = async (token?: any) => {
    try {
        let headers: any = {};
        if (token) {
            headers.Authorization = `Bearer ${token.access}`
        }
        const { data } = await axios.get('/profiles/profile_get_front_end_user/', { headers });
        return {
            data,
            error: null
        }
    } catch (err: any) {
        return {
            data: null,
            error: err.response
        }
    }
}

export const updateMyProfile = async (body: any) => {
    try {
        const formData = new FormData();
        formData.append("full_name", body.full_name);
        if (body.image)
            formData.append("image", body.image);
        if (body.address)
            formData.append("address", body.address);
        const { data } = await axios.put('/profiles/profile_update_front_end_user/', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        return {
            data,
            error: null
        }
    } catch (err: any) {
        console.log("ERROR---->", err.response?.data)
        return {
            data: null,
            error: err.response
        }
    }
}