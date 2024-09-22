import { Link, useLoaderData } from "react-router-dom"

const ProductsGrid = () => {
    const { products } = useLoaderData();
    const data = products.data
    console.log(products)


    // const directusApi = 'https://comfy-store.directus.app/items/products/';
    // const fileId = image;
    // const accessToken = 'your-access-token';

    // const imageUrl = `${directusApi}/assets/${fileId}?access_token=${accessToken}`;
    // console.log(imageUrl);

    return (
        <div className='pt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3 '>
            {data.map((product) => {
                const { Title, Description, Image, Price } = product;
                return (
                    <Link
                        key={product.id}
                        to={`/products/${product.id}`}
                        className='card w-full  shadow-xl hover:shadow-2xl transition duration-300 '
                    >
                        <figure className='px-4 pt-4'>
                            <img
                                src={"http://localhost:8055/assets/" + Image}
                                alt={Title}
                                className='rounded-xl h-64 md:h-48 w-full object-cover'
                            />
                        </figure>
                        <div className='card-body items-center text-center'>
                            <h2 className='card-title capitalize tracking-wider'>{Title}</h2>
                            <span className='text-secondary'>${Price}</span>

                        </div>
                    </Link>

                );
            })}
        </div>
    );
};
export default ProductsGrid;

// <div className='pt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3 '>
//             {products.map((product) => {
//                 const { title, price, image } = product.attributes;
//                 const dollarsAmount = price;
//                 return (
//                     <Link
//                         key={product.id}
//                         to={`/products/${product.id}`}
//                         className='card w-full  shadow-xl hover:shadow-2xl transition duration-300 '
//                     >
//                         <figure className='px-4 pt-4'>
//                             <img
//                                 src={image}
//                                 alt={title}
//                                 className='rounded-xl h-64 md:h-48 w-full object-cover'
//                             />
//                         </figure>
//                         <div className='card-body items-center text-center'>
//                             <h2 className='card-title capitalize tracking-wider'>{title}</h2>
//                             <span className='text-secondary'>${dollarsAmount / 100}</span>
//                         </div>
//                     </Link>
//                 );
//             })}
//         </div>
