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
  const [warningMessage, setWarningMessage] = useState('')


  function handleAddToCart(item) {
    if (availableBalance >= item.price) {
      const updatedItems = availableItems.filter(
        (oneItem) => oneItem.id !== item.id
      );

      setAvailableItems(updatedItems);
      setShoppingCart([...shoppingCart, item])
      setAvailableBalance(availableBalance - item.price);
      setWarningMessage('');
    } else {
      setWarningMessage('Insufficient funds. Your balance is too low to purchase this item');

      setTimeout(() => {
        setWarningMessage('');
      }, 4000);
    }
  }

  function handleRemoveFromShoppingCart(item) {
    const updatedCart = shoppingCart.filter(
      (cartItem) => cartItem.id !== item.id
    );

    setShoppingCart(updatedCart);
    setAvailableItems([...availableItems, item]);
    setAvailableBalance(availableBalance + item.price);
  }

  return (
    <div>
      <h1>Sayed Hamed's Closet</h1>
      <div>
        {warningMessage}
      </div>
      <h2>Your Balance: {availableBalance}</h2>

      <h2>Available Items</h2>
      <div>

        {availableItems.map((oneItem) => (
          <p key={oneItem.id}>
            {oneItem.name} - {oneItem.price}
            <button onClick={() => { handleAddToCart(oneItem) }}
            >Add to Cart</button></p>
        ))}
        {availableItems.length === 0 ? 'No item available' : ''}
      </div>
      <h2>Shopping Cart</h2>
      <div>
        {shoppingCart.map((item) => (
          <p key={item.id}>
            {item.name} - {item.price}
            <button onClick={() => handleRemoveFromShoppingCart(item)}>
              Remove from Cart</button>
          </p>

        ))

        }
        {shoppingCart.length === 0 ? 'shopping cart is empty' : ''}

      </div>
    </div>
  );
}

export default App
