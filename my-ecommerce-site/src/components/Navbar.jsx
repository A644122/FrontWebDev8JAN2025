export default function Navbar() {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            <a href="/" className="flex items-center py-4 px-2">
              <span className="font-semibold text-gray-500 text-lg">My E-Commerce</span>
            </a>
          </div>
          <div className="flex items-center space-x-3">
            <a href="/" className="py-2 px-2 font-medium text-gray-500 hover:text-gray-900">Home</a>
            <a href="/cart" className="py-2 px-2 font-medium text-gray-500 hover:text-gray-900">Cart</a>
          </div>
        </div>
      </div>
    </nav>
  );
}