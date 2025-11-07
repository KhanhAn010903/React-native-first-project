import axios from "axios"

export const registerAPI = (email:string,password:string,name:string) => {
    const url = `/api/v1/auth/register`
    return axios.post<IBackendRes<any>>(url, {email,password,name});
}