import { useState } from "react";

const API = "http://localhost:5000/order";

export default function App() {
  const [productId, setProductId] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [message, setMessage] = useState("");

  const placeOrder = async () => {
    const res = await fetch(API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ productId, quantity: Number(quantity) }),
    });

    const data = await res.json();
    setMessage(res.ok ? data.message : data.error);
  };

  return (
    <div style={{ width: 300, margin: "80px auto" }}>
      <h3>Place Order</h3>

      <input
        placeholder="Product ID"
        value={productId}
        onChange={e => setProductId(e.target.value)}
      />

      <input
        type="number"
        min="1"
        value={quantity}
        onChange={e => setQuantity(e.target.value)}
      />

      <button onClick={placeOrder}>Submit</button>

      <p>{message}</p>
    </div>
  );
}
