import React from 'react'
import { useStateValue } from './StateProvider';
import "./Checkout.css";
import CheckoutProduct from './CheckoutProduct';
import Subtotal from "./Subtotal";
import { getBasketTotal } from './reducer';

function Checkout() {
const [{ basket }] = useStateValue();

    return (
        <div className = 'checkout'>
                
            <div className='checkout__left'>
                
                {basket.length === 0 ? (
                    <div className='checkout__basket'>
                        <h2 className='checkout__title'>Your shopping basket is empty</h2>
                    </div>
                ) : (
                    <div className='checkout__basket'>
                        <h2 className='checkout__title'>Your shopping basket: </h2>
                        {basket.map(item => (
                        <CheckoutProduct
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                        />
                        ))}
                    </div>
                    
                        
                )}
            </div>
            <div className='checkout__right'>
                <div>
                    <Subtotal
                        items={basket.length}
                        prefix='$'
                        price={getBasketTotal(basket)}
                    />
                </div>
            </div>
        </div>
    )
}

export default Checkout
