import axios from "axios";


//const productionUrl = 'http://comfy-store.directus.app/items/';
const productionUrl = 'http://localhost:8055/items';


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

//const productionUrl = 'https://strapi-store-server.onrender.com/api';
