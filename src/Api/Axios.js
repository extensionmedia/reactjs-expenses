import axios from "axios";
axios.defaults.withCredentials = true;
export default axios.create({
    baseURL : "https://api.tealwallet.com/api/v1"
})
