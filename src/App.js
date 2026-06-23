import Nav from './components/Nav'
import Footer from './components/Footer';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Books from './pages/Books';
import BookInfo from './pages/BookInfo';
import {books} from "./data"
import Cart from './pages/Cart';
import { useEffect, useState } from 'react';

function App() {
  const [cart, setCart] = useState([])

  function numberOfItems() {
    let counter = 0
    cart.forEach(item => {
        counter += +(item.quantity)
    })
    return counter
  }

  function addToCart(book) {
    setCart([...cart, {...book, quantity: 1}])
  }

  function removeFromCart(book) {
    setCart(cart.filter(item => item.id !== book.id))
  }

  function changeQuantity(book, quantity) {
    setCart(cart.map(item =>
      item.id === book.id
        ? {
          ...item,
          quantity:+quantity,
          }
        : item
      )
    )
  }

  useEffect(() => {
    console.log(cart)
  }, [cart])

  return (
    <Router>
      <div className="App">
        <Nav numberOfItems={numberOfItems()}/>
        <Routes>
          <Route path="/" exact Component={() => <Home books={books}/>}/>
          <Route path="/books" exact Component={() => <Books books={books}/>}/>
          <Route path="/cart" exact Component={() => <Cart cart={cart} changeQuantity={changeQuantity} removeFromCart={removeFromCart}/>}/>
          <Route path="/books/:id" Component={() => <BookInfo books={books} addToCart={addToCart} cart={cart}/>}/>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
