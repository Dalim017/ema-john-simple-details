import React from 'react';
import './Cart.css'

const Cart = ({cart, handleRemoveFromCart}) => {
    //conditional rendering options
    //1.Element variable
    //2.ternary operator 
    let command;

    if(cart.length === 0){
        command =<p>Please Add at least one item!!!</p>
    }

    else if(cart.length === 1){
         command =<p>Please add more...</p>
    }
    else{
        command= <p><small>Thanks for adding item</small></p>
    }
    
    return (
        <div>
            <h2>Items selected:{cart.length}</h2>
            
            {
            cart.map(tshirt=> <p>
                {tshirt.name}
                <button onClick={()=> handleRemoveFromCart(tshirt)} >x</button>
                </p>)
            }
            {command}

            {cart.length < 4 ? <p>Keep adding</p> : <button>Remove All</button> }
        </div>
    );
};

export default Cart;