import { useState } from 'react';


const App = () => {
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-red-600 p-4">
        <div className="container mx-auto">
          <img
            src="https://www.webjet.com.au/wj-assets/images/webjet-flights-logo-2x.png"
            alt="Webjet"
            className="h-8"
          />
        </div>
      </header>

      <main className="container mx-auto px-4 py-6">
        <h1 className="text-2xl font-bold mb-6">550 Hotels Available in Melbourne</h1>

      </main>
    </div>
  );
};

export default App;