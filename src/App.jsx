import React from 'react';
import Filter from './components/Filter'
import { useHotelsQuery} from './useHotelsQuery';

const App = () => {

  const { data, loading, error } = useHotelsQuery();

  return (
    <div className="min-h-screen w-3/4  mx-auto">
      <header className="bg-red-600 py-6">
        <img
          src="https://www.webjet.com.au/wj-assets/images/webjet-flights-logo-2x.png"
          alt="Webjet"
          className="h-12"
        />
      </header>


      <main className="container mx-auto px-4 py-6 bg-gray-50 bg-gray-50">
        <h1 className="text-2xl font-bold mb-6">550 Hotels Available in Melbourne</h1>

        <div className="lg:flex lg:gap-6">
          <aside className="lg:w-2/6 mb-6 lg:mb-0 px-4 py-2 bg-gray-200">
            <Filter
              onSearch={() => { }}
              onRatingFilter={() => { }}
              disabled={loading}
            />
          </aside>
          <div className="lg:w-4/6 px-4 py-2">
            03
          </div>
        </div>
      </main>


    </div>
  );
};

export default App;