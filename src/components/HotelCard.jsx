import StarRating from './StarRating';

const HotelCard = ({ hotel }) => (
    <div className="bg-white rounded-lg shadow-md overflow-hidden mb-4">
      <div className="md:flex">
        <div className="md:w-1/3">
          <img 
            src={hotel.image} 
            alt={hotel.name}
            className="w-full h-48 md:h-full object-cover"
          />
        </div>
        <div className="flex-1 flex">
          <div className="p-6 flex-1">
            <h2 className="text-xl font-semibold mb-2">{hotel.name}</h2>
            <StarRating rating={hotel.rating} />
            <p className="text-gray-600 mt-2">Room type: {hotel.roomType}</p>
          </div>
          <div className="bg-gray-100 flex justify-center px-6 basis-1/3">
            <div className="flex items-center">
              <span className="text-2xl font-bold">${hotel.price}</span>
              <div className="md:hidden ml-2">
                <div className="bg-green-500 w-10 h-10 flex items-center justify-center">
                  <span className="text-white text-xl">➜</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

export default HotelCard;