export default function ProductList() {
  const products = [
    { id: 1, name: 'Product 1', price: 100, image: 'https://images.unsplash.com/photo-1739372425274-d41281e72c5d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8' },
    { id: 2, name: 'Product 2', price: 200, image: 'https://images.unsplash.com/photo-1739372425274-d41281e72c5d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8' },
    { id: 3, name: 'Product 3', price: 300, image: 'https://images.unsplash.com/photo-1739372425274-d41281e72c5d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8' },
    { id: 3, name: 'Product 3', price: 300, image: 'https://images.unsplash.com/photo-1739372425274-d41281e72c5d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8' },
    { id: 3, name: 'Product 3', price: 300, image: 'https://images.unsplash.com/photo-1739372425274-d41281e72c5d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8' },
    { id: 3, name: 'Product 3', price: 300, image: 'https://images.unsplash.com/photo-1739372425274-d41281e72c5d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8' },
    { id: 3, name: 'Product 3', price: 300, image: 'https://images.unsplash.com/photo-1739372425274-d41281e72c5d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8' },
    { id: 3, name: 'Product 3', price: 300, image: 'https://images.unsplash.com/photo-1739372425274-d41281e72c5d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8' },
    { id: 3, name: 'Product 3', price: 300, image: 'https://images.unsplash.com/photo-1739372425274-d41281e72c5d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8' }, { id: 3, name: 'Product 3', price: 300, image: 'https://images.unsplash.com/photo-1739372425274-d41281e72c5d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8' },
    { id: 3, name: 'Product 3', price: 300, image: 'https://images.unsplash.com/photo-1739372425274-d41281e72c5d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8' },
    { id: 3, name: 'Product 3', price: 300, image: 'https://images.unsplash.com/photo-1739372425274-d41281e72c5d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8' },
    { id: 3, name: 'Product 3', price: 300, image: 'https://images.unsplash.com/photo-1739372425274-d41281e72c5d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8' },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
      {products.map(product => (
        <div key={product.id} className="border p-4 rounded-lg shadow-lg">
          <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
          <h2 className="text-xl font-semibold mt-2">{product.name}</h2>
          <p className="text-gray-700">${product.price}</p>
          <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">Add to Cart</button>
        </div>
      ))}
    </div>
  );
}