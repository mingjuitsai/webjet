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
            <div className="p-6 md:w-2/3">
                <div className="flex justify-between items-start">
                    <div>
                        <h2 className="text-xl font-semibold mb-2">{hotel.name}</h2>
                        <StarRating rating={hotel.rating} />
                        <p className="text-gray-600 mt-2">Room type: {hotel.roomType}</p>
                    </div>
                    <div className="text-right">
                        <p className="text-2xl font-bold">${hotel.price}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
);


export default HotelCard;