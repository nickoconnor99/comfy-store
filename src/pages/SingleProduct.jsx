import { useLoaderData } from 'react-router-dom';
import { customFetch, generateAmount } from '../utils';
import { Link } from 'react-router-dom';
import { useState } from 'react';


export const loader = async ({ params }) => {
    //console.log(params.id)
    const response = await customFetch(`/products/${params.id}`);
    const products = response.data.data;
    //console.log(products.attributes.colors[0])
    return { products };
}

const SingleProduct = () => {
    const { products } = useLoaderData();
    const { image, title, price, description, colors, company } = products.attributes;
    const [productColor, setProductColor] = useState(colors[0]);
    const [amount, setAmount] = useState(1);

    const hadleAmount = (e) => {
        setAmount(parseInt(e.target.value))
    }

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
            <div className='mt-6'>
                <h4 className='text-md font-medium tracking-wider capitalize'>
                    colors
                </h4>
                <div className='mt-2'>
                    {colors.map((color) => {
                        return (
                            <button
                                key={color}
                                type='button'
                                className={`badge w-6 h-6 mr-2 ${color === productColor && 'border-2 border-secondary'
                                    }`}
                                style={{ backgroundColor: color }}
                                onClick={() => setProductColor(color)}
                            ></button>
                        );
                    })}
                </div>
            </div>
            <div className='form-control w-full max-w-xs'>
                <label className='label'>
                    <h4 className='text-md font-medium tracking-wider capitalize'>
                        amount
                    </h4>
                </label>
                <select
                    className='select select-secondary select-bordered select-md'
                    value={amount}
                    onChange={hadleAmount}
                >
                    {generateAmount(20)}
                </select>
            </div>
            {/* CART BUTTON */}
            <div className='mt-10 '>
                <button
                    className='btn btn-secondary btn-md'
                    onClick={() => console.log('add to bag')}
                >
                    Add to bag
                </button>
            </div>

        </div>
    )
}

export default SingleProduct
