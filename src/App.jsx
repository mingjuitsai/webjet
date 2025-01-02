import { useState } from 'react';


const App = () => {
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  return (
    <div className="min-h-screen w-3/4  mx-auto">
      <header className="bg-red-600 py-6">
        <div className="container mx-auto">
          <img
            src="https://www.webjet.com.au/wj-assets/images/webjet-flights-logo-2x.png"
            alt="Webjet"
            className="h-12"
          />
        </div>
      </header>

      <main className="container mx-auto px-4 py-6 bg-gray-50 bg-gray-50">
        <h1 className="text-2xl font-bold mb-6">550 Hotels Available in Melbourne</h1>

        <div className="grid md:grid-cols-3 gap-4">
          <div className="container px-4 py-2 bg-gray-200">
            02
          </div>
          <div className="container px-4 py-2 col-span-1 md:col-span-2">
            03
          </div>
        </div>
      </main>


    </div>
  );
};

export default App;