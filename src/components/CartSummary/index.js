// Write your code here
import CartContext from '../../context/CartContext'

import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      let total = 0

      cartList.forEach(eachCartItem => {
        total += eachCartItem.price * eachCartItem.quantity
      })

      return (
        <>
          <div className="cart-summary-container">
            <div className="cart-summary-card">
              <h1 className="order-total-price">
                Order Total: <span>RS {total} /-</span>
              </h1>
              <p className="items-in-cart">{cartList.length} items in cart</p>
              <button type="button" className="checkout-btn">
                Checkout
              </button>
            </div>
          </div>
        </>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
