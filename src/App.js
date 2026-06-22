import Nav from './components/Nav'
import Footer from './components/Footer';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Books from './pages/Books';
import BookInfo from './pages/BookInfo';
import {books} from "./data"
import Cart from './pages/Cart';
import { useEffect, useState } from 'react';
import { faArrowDownUpLock } from '@fortawesome/free-solid-svg-icons';

function App() {
  const [cart, setCart] = useState([])

  function addToCart(book) {
    setCart([...cart, book])
  }

  useEffect(() => {
    console.log(cart)
  }, [cart])

  return (
    <Router>
      <div className="App">
        <Nav/>
        <Routes>
          <Route path="/" exact Component={() => <Home books={books}/>}/>
          <Route path="/books" exact Component={() => <Books books={books}/>}/>
          <Route path="/cart" exact Component={() => <Cart books={books}/>}/>
          <Route path="/books/:id" Component={() => <BookInfo books={books} addToCart={addToCart} cart={cart}/>}/>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
