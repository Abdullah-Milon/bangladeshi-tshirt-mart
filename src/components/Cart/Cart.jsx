import React from 'react';
import './Cart.css'

const Cart = ({ cart, handleRemoveFromCart }) => {
    let message 
    if (cart.length === 0){
        message = <p>Please add some products</p>
    }
    else{
        message = <div>
            <h3>আরে টাকা ওয়াল </h3>
        </div>
    }
    return (
        <div>
            <h2 className={cart.length === 1 ? 'blue': 'red'}>Order summary: {cart.length}</h2>
            <p className={`bold bordered ${cart.length === 3 ? 'yellow' : 'purple'}`}>Something</p>
            {cart.length > 2 ? <span className='purple'>আরও কিনো</span> : <span>তুমি গরিব </span>}
            {message}
            {
                cart.map(tshirt => <p
                    key={tshirt._id}
                >{tshirt.name}
                    <button onClick={() => handleRemoveFromCart(tshirt._id)}>Clear Item</button>
                    {
                        cart.length === 2 && <p>Double bonanzza!!!</p>
                    }
                    {
                        cart.length === 3 || <h3>Tinta to holo na </h3>
                    }
                </p>)
            }
        </div>
    );
};

export default Cart;

/***
 * CONDITIONAL RENDERING
 * 1. use if else to set a variable that will contain an element, components
 * 2. ternary : condition ? 'for true' : 'false'
 * 3. logical &&: (if the condition is true and then the next thing will be displayed)
 * 4. logical || (if the condition id false then then next thing will be displayed)
**/

/**
 *  CONDITIONAL CSS class (eai part ta vlo vabe bujhi nai,fakibazi korci)
 * 1. use ternary
 * 2. ternary inside template string
 *  
 * **/