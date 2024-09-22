import { Filters, PaginationContainer, ProductsContainer } from "../components"
import { customFetch } from "../utils"
const url = '/Products'

export const loader = async () => {
    const response = await customFetch(url)
    const products = response.data;
    //console.log(products)
    return { products };
}



// const test = () => {
//     fetch('http://localhost:8055/items/Products')
//         .then(async (res) => {
//             const data = await res.json();
//             return console.log(data);
//         })
// }

//test();

const Products = () => {
    return (
        <div>
            <ProductsContainer></ProductsContainer>
        </div>
    )
}

export default Products

// export const loader = async ({ request }) => {
//     const params = Object.fromEntries([
//         ...new URL(request.url).searchParams.entries(),
//     ]);
//     const response = await customFetch(url, { params });
//     console.log(response)

//     const products = response.data.data;
//     const meta = response.data.meta;

//     return { products, meta, params };
// };


// const Products = () => {
//     return (
//         <div>
//             <Filters></Filters>
//             <ProductsContainer></ProductsContainer>
//             <PaginationContainer></PaginationContainer>
//         </div>
//     )
// }
