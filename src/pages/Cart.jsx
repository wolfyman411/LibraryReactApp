import React from 'react'
import CartItem from '../components/ui/CartItem'
import EmptyCart from "../assets/empty_cart.svg"
import { Link } from 'react-router-dom'

export default function Cart({cart, changeQuantity, removeFromCart}) {

    const total = () => {
        let counter = 0
        cart.forEach(item => {
            counter += +((item.salePrice || item.originalPrice) * item.quantity)
        })
        return counter
    }

  return (
    <div id="books__body">
        <main id="books__main">
            <div className="books__container">
                <div className="row">
                    <div className="book__selected--top">
                        <h2 className="cart__title">Cart</h2>
                    </div>
                    <div className="cart">
                        <div className="cart__header">
                            <div className="cart__book">Book</div>
                            <div className="cart__quantity">Quantity</div>
                            <div className="cart__total">Price</div>
                        </div>
                    </div>
                    <div className="cart__body">
                        {
                            cart.map(book => {
                                return <CartItem book={book} changeQuantity={changeQuantity} removeFromCart={removeFromCart}/>
                            })
                        }
                    </div>
                    {cart.length === 0 && <div className="cart__empty">
                        <img src={EmptyCart} className="cart__empty--img" alt="" />
                        <h2>You don't have any books in your cart!</h2>
                        <Link to="/books">
                            <button className='btn'>Browse books</button>
                        </Link>
                    </div>}
                    {cart.length > 0 && <div className="total">
                        <div className="total__item total__sub-total">
                            <span>Subtotal</span>
                            <span>${(total()).toFixed(2)}</span>
                        </div>
                        <div className="total__item total__tax">
                            <span>Tax</span>
                            <span>${(total()*0.1).toFixed(2)}</span>
                        </div>
                        <div className="total__item total__price">
                            <span>Total</span>
                            <span>${(total()*1.1).toFixed(2)}</span>
                        </div>
                        <button className="btn btn__checkout no-cursor" onClick={() => alert("Not implemented yet!")}>
                            Proceed to checkout
                        </button>
                    </div>}
                </div>
            </div>
        </main>
    </div>
  )
}
