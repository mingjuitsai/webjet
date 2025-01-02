import React from 'react';
import Filter from './components/Filter'
import { useHotelsQuery } from './useHotelsQuery';
import HotelCard from './components/HotelCard';
import HotelCardsSkeleton from './components/HotelCardsSkeleton';

const App = () => {
  const { data: hotelsData, loading, error, refetch } = useHotelsQuery();
  const [filters, setFilters] = React.useState({
    name: '',
    ratings: new Set()
  });

  const filteredHotels = hotelsData.filter(hotel => {
    const nameMatch = hotel.name.toLowerCase().includes(filters.name.toLowerCase());
    const ratingMatch = filters.ratings.size === 0 || filters.ratings.has(Math.floor(hotel.rating));
    return nameMatch && ratingMatch;
  }).sort((a, b) => a.price - b.price);

  const handleSearch = (name) => {
    setFilters(prev => ({ ...prev, name }));
  };

  const handleRatingFilter = (rating, checked) => {
    if (checked) {
      filters.ratings.add(rating);
    } else {
      filters.ratings.delete(rating);
    }

    setFilters(prev => ({
      ...prev,
      ratings: filters.ratings
    }));
  }

  return (
    <div className="min-h-screen w-5/6 mx-auto">
      <header className="bg-red-600 py-6">
        <img
          src="https://www.webjet.com.au/wj-assets/images/webjet-flights-logo-2x.png"
          alt="Webjet"
          className="h-12"
        />
      </header>

      <main className="px-4 py-6 bg-gray-50">
        <h1 className="text-2xl text-red-600 font-bold mb-6">
          {loading ? <div className="h-8 bg-gray-200 rounded w-1/2"></div> : `${filteredHotels.length} Hotels Available in Melbourne`}
        </h1>

        <div className="lg:flex lg:gap-6">
          <aside className="lg:w-2/6 mb-6 lg:mb-0 px-4 py-4 bg-gray-200">
            <Filter
              onSearch={handleSearch}
              onRatingFilter={handleRatingFilter}
              disabled={loading}
            />
          </aside>
          <div className="lg:w-4/6 px-4 py-4">
            {error ? (
              <div className="bg-red-50 border-l-4 border-red-600 p-4 rounded">
                <div className="flex justify-between items-center">
                  <p className="text-red-700">{error}</p>
                  <button
                    onClick={refetch}
                    className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
                  >
                    Try Again
                  </button>
                </div>
              </div>
            ) : loading ? <HotelCardsSkeleton /> : filteredHotels.length === 0 ? (
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-8 text-center">
                <p className="text-gray-600 text-lg mb-2">Sorry, no hotels match your search criteria</p>
                <p className="text-gray-500">Try adjusting your filters or search terms</p>
              </div>
            ) : filteredHotels.map(hotel => (
              <HotelCard key={hotel.id} hotel={hotel} />
            ))}
          </div>
        </div>
      </main>


    </div>
  );
};

export default App;