import { useLoaderData } from 'react-router-dom';
import { customFetch } from '../utils';
import { Link } from 'react-router-dom';
import { useState } from 'react';


export const loader = async ({ params }) => {
    //console.log(params.id)
    const response = await customFetch(`/products/${params.id}`);
    const products = response.data.data;
    //console.log(products)
    return { products };
}

const SingleProduct = () => {
    const { products } = useLoaderData();
    const { image, title, price, description, colors, company } = products.attributes
    return (
        <div className='grid lg:grid-cols-2'>
            <figure className='px-4 pt-4 w-full card'>
                <img
                    src={image}
                    alt={title}
                    className='rounded-xl h-64 md:h-48 w-full object-cover'
                />
            </figure>
            <div className='card-body items-center text-center'>
                <h2 className='card-title capitalize tracking-wider'>{title}</h2>
                <span>{company}</span>
                <span className='text-secondary'>${price / 100}</span>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default SingleProduct
