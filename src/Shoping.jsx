import { useState } from "react";

const Cart = () => {
  const [Pname, setPname] = useState("");
  const [Price, setPrice] = useState("");
  const [cart, setCart] = useState([]);

  const addcart = () => {
    if (Pname === "" || Price === "") return;

    setCart([
      ...cart,
      {
        id: crypto.randomUUID(),
        name: Pname,
        price: Number(Price),
        quantity: 1,
      },
    ]);

    setPname("");
    setPrice("");
  };

  const increase = (id) => {
    setCart(
      cart.map(item =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decrease = (id) => {
    setCart(
      cart.map(item =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const removeitem = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <>
      <h1>Simple Shopping Cart</h1>

      <input
        type="text"
        placeholder="Product name"
        value={Pname}
        onChange={(e) => setPname(e.target.value)}
      />

      <input
        type="number"
        placeholder="Price"
        value={Price}
        onChange={(e) => setPrice(e.target.value)}
      />

      <button onClick={addcart}>Add</button>

      <ul>
        {cart.map(item => (
          <li key={item.id}>
            <p><b>{item.name}</b> - ${item.price}</p>

            <p>
              Quantity:
              <button onClick={() => decrease(item.id)}>-</button>
              {item.quantity}
              <button onClick={() => increase(item.id)}>+</button>
            </p>

            <button onClick={() => removeitem(item.id)}>Remove</button>
             <h1>Total Price: ${total}</h1>
          </li>
          
        ))}
      </ul>

     
    </>
  );
};

export default Cart;
