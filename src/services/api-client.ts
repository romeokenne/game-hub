import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
    key: '7c9847c43cbd48c3bec5a1cc5951ed3e'
}});