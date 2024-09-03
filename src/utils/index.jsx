import axios from "axios";

const productionUrl = 'https://strapi-store-server.onrender.com/api';

export const customFetch = axios.create({
    baseURL: productionUrl,
})

export const generateAmount = (number) => {
    return Array.from({ length: number }, (_, index) => {
        const amount = index + 1;
        return (
            <option key={amount} value={amount}>{amount}</option>
        )
    })
}