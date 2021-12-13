import React from 'react'
import { Link } from 'react-router-dom';

function Cart() {
    return (
        <div style={{display:'flex',flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
            <h2>Cart is empty</h2>

            <br/>
           <Link to='/' style={{textDecoration:'none'}}>
           <button>
                Add course
            </button>
           </Link>
        </div>
    )
}

export default Cart
