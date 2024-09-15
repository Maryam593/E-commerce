import axios from "axios";

const InstanceAxios = axios.create({
    baseURL : 'https://mocki.io/v1/ae1d0260-208a-400c-ab39-69bb7c476d39'
})

export default InstanceAxios;