import axios from "axios";

const api = axios.create({
    baseURL: "http://127.0.0.1:8000",
})

export const useApi = () => ({
    register: async (data) =>{
        const response = await api.post('/user', data)
        return response
    },

    login: async (data) => {
        const response = await api.post(`/user/login`, data)
        console.log(response)
        return response
    }
})