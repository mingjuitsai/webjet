import React from 'react';
import Filter from './components/Filter'
import { useHotelsQuery} from './useHotelsQuery';
import HotelCard from './components/HotelCard';

const App = () => {
  const { data: hotelsData, loading, error } = useHotelsQuery();
  const [filters, setFilters] = React.useState({
    name: '',
    ratings: new Set()
  });

  const filteredHotels = hotelsData.filter(hotel => {
    const nameMatch = hotel.name.toLowerCase().includes(filters.name.toLowerCase());
    const ratingMatch = filters.ratings.size === 0 || filters.ratings.has(Math.floor(hotel.rating));
    return nameMatch && ratingMatch;
  }).sort((a, b) => a.price - b.price);

  const handleRatingFilter = (rating, checked) => {

    if(checked) {
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
    <div className="min-h-screen w-5/6  mx-auto">
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
          <aside className="lg:w-2/6 mb-6 lg:mb-0 px-4 py-4 bg-gray-200">
            <Filter
              onSearch={() => { }}
              onRatingFilter={handleRatingFilter}
              disabled={loading}
            />
          </aside>
          <div className="lg:w-4/6 px-4 py-4">
          {filteredHotels.map(hotel => (
              <HotelCard key={hotel.id} hotel={hotel} />
            ))}
          </div>
        </div>
      </main>


    </div>
  );
};

export default App;