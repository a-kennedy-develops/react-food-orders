import { useState } from "react";

import Header from "./components/Layout/Header.js";
import Meals from "./components/Meals/Meals.js";
import Cart from "./components/Cart/Cart.js";
import CartProvider from "./store/CartProvider.js";

function App() {
  const [showingCart, setShowingCart] = useState(false);

  const showCartHandler = () => {
    setShowingCart(true);
  };

  const hideCartHandler = () => {
    setShowingCart(false);
  };

  return (
    <CartProvider>
      {showingCart && <Cart onClose={hideCartHandler}/>}
      <Header onShowCart={showCartHandler}/>
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
