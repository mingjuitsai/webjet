import React from 'react';
import { Search } from 'lucide-react';
import StarRating from './StarRating';

const Filter = ({ onSearch, onRatingFilter, disabled }) => {
    const [showHotelDropdown, setShowHotelDropdown] = React.useState(true);
    const [showRatingDropdown, setShowRatingDropdown] = React.useState(false);
    const [searchText, setSearchText] = React.useState('');
  
    const handleSearch = () => {
      onSearch(searchText);
    };
  
    return (
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="mb-6">
          <div className="rounded-lg mb-2">
            <button 
              onClick={() => setShowHotelDropdown(!showHotelDropdown)}
              className="w-full text-left text-gray-700 focus:outline-none"
            >
              <span className="transform transition-transform duration-200  mr-1 text-sm">
                {showHotelDropdown ? '▲' : '▼'}
              </span>
              <span>Hotel Name</span>
            </button>
          </div>
          
          {showHotelDropdown && (
            <div className="mt-2">
              <div className="flex gap-2">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
                  <input
                    type="text"
                    placeholder="Enter Hotel Name"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    disabled={disabled}
                    className={`w-full pl-10 pr-4 py-2 border rounded-lg ${
                      disabled ? 'bg-gray-100 cursor-not-allowed' : 'bg-white'
                    }`}
                  />
                </div>
                <button
                  onClick={handleSearch}
                  disabled={disabled}
                  className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 disabled:opacity-50"
                >
                  Go
                </button>
              </div>
            </div>
          )}
        </div>
  
        <div>
          <div className="rounded-lg mb-2">
            <button 
              onClick={() => setShowRatingDropdown(!showRatingDropdown)}
              className="w-full text-left text-gray-700 focus:outline-none"
            >
              <span className="transform transition-transform duration-200 mr-1 text-sm">
                {showRatingDropdown ? '▲' : '▼'}
              </span>
              <span>Quality Rating</span>
            </button>
          </div>
          
          {showRatingDropdown && (
            <div className="mt-2 space-y-4">
              {[5, 4, 3, 2].map(rating => (
                <label key={rating} className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="checkbox"
                    id={`rating-${rating}`}
                    disabled={disabled}
                    onChange={(e) => onRatingFilter(rating, e.target.checked)}
                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500 h-4 w-4"
                  />
                  <div className="flex items-center">
                    <StarRating rating={rating} />
                  </div>
                </label>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  };

  export default Filter;