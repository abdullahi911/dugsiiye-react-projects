import { useState } from "react";
import Cardcontext from "./cardcon";

function App() {

  const products = [
    { id: 1, name: "Widget", price: 19.99 },
    { id: 2, name: "Gadget", price: 29.99 }
  ];

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
  };

  const removeFromCart = (index) => {
    setCart((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <Cardcontext.Provider value={{ cart, addToCart, removeFromCart }}>

      <h1>Products</h1>

      {products.map((product) => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>${product.price}</p>
          <button onClick={() => addToCart(product)}>
            Add to Cart
          </button>
        </div>
      ))}

      <hr />

      <h1>Cart Summary</h1>

      <p>Total Items: {cart.length}</p>

      {cart.map((item, index) => (
        <div key={index}>
          {item.name} - ${item.price}
          <button onClick={() => removeFromCart(index)}>
            Delete
          </button>
        </div>
      ))}

    </Cardcontext.Provider>
  );
}

export default App;