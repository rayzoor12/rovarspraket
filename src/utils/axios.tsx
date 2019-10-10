import {AxiosPromise, AxiosRequestConfig} from "axios";
import axios from "axios";
import { HTTPMethods } from "../api/apiUtils"

export const fetch = (endpoint:string, method: keyof HTTPMethods) : AxiosPromise => {

    let config:AxiosRequestConfig = {method, url: `${endpoint}`, headers: {'Accept': 'application/json'}}

    return axios(config)
}
