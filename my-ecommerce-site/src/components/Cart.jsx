export default function Cart() {
  const cartItems = [
    { id: 1, name: 'Product 1', price: 100, quantity: 1 },
    { id: 2, name: 'Product 2', price: 200, quantity: 2 },
    { id: 2, name: 'Product 2', price: 100, quantity: 2 },
  ];

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Cart</h1>
      {cartItems.map(item => (
        <div key={item.id} className="border-b py-2">
          <p>{item.name} - ${item.price} x {item.quantity}</p>
        </div>
      ))}
      <p className="mt-4 font-bold">Total: ${total}</p>
      <button className="mt-4 bg-green-500 text-white py-2 px-4 rounded hover:bg-green-700">Checkout</button>
    </div>
  );
}