// src/App.jsx

import { useState } from "react";

function App() {

  const [availableItems, setAvailableItems] = useState(
    [
      {
        id: 1,
        name: "Black T shirt",
        price: 5
      },
      {
        id: 2,
        name: "Hanger Set",
        price: 8
      },
      {
        id: 3,
        name: "Thoub",
        price: 12
      },
      {
        id: 4,
        name: "Computer Bag",
        price: 20
      },
      {
        id: 5,
        name: "Couch",
        price: 50
      },
      {
        id: 6,
        name: "Gaming Chair",
        price: 70
      }
    ])

  const [shoppingCart, setShoppingCart] = useState([])
  const [availableBalance, setAvailableBalance] = useState(100)


function handleAddToCart(item) {
  const updatedItems = availableItems.filter(
    (oneItem) => oneItem.id !== item.id
  );

  setAvailableItems(updatedItems);
  setShoppingCart([...shoppingCart, item])
}

  return (
    <div>
      <h1>Sayed Hamed's Closet</h1>

      <h2>Your Balance: {availableBalance}</h2>

      <h2>Available Items</h2>
      <div>

        {availableItems.map((oneItem) => (
          <p key={oneItem.id}>
            {oneItem.name} - {oneItem.price}
            <button onClick ={()=>{handleAddToCart(oneItem)}}
>Add to Cart</button></p>
        ))}
        {availableItems.length === 0 ? 'No item available' : ''}
      </div>
      <h2>Shopping Cart</h2>
      <div>
        {shoppingCart.map((item) => (
          <p key={item.id}>
            {item.name} - {item.price}
          </p>
        ))}
        {shoppingCart.length === 0 ? 'shopping cart is empty' : ''}
      </div>
    </div>
  );
}

export default App
