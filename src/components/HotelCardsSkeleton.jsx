const HotelCardsSkeleton = function () {
    return (
        <>
            <div className="bg-white rounded-lg shadow-md overflow-hidden mb-4 animate-pulse">
                <div className="md:flex">
                    <div className="md:w-1/3 bg-gray-200 h-48"></div>
                    <div className="p-6 md:w-2/3">
                        <div className="space-y-4">
                            <div className="h-6 bg-gray-200 rounded w-3/4"></div>
                            <div className="h-4 bg-gray-200 rounded w-1/4"></div>
                            <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                            <div className="h-4 bg-gray-200 rounded w-1/3"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden mb-4 animate-pulse">
                <div className="md:flex">
                    <div className="md:w-1/3 bg-gray-200 h-48"></div>
                    <div className="p-6 md:w-2/3">
                        <div className="space-y-4">
                            <div className="h-6 bg-gray-200 rounded w-2/3"></div>
                            <div className="h-4 bg-gray-200 rounded w-1/4"></div>
                            <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                            <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden mb-4 animate-pulse">
                <div className="md:flex">
                    <div className="md:w-1/3 bg-gray-200 h-48"></div>
                    <div className="p-6 md:w-2/3">
                        <div className="space-y-4">
                            <div className="h-6 bg-gray-200 rounded w-1/2"></div>
                            <div className="h-4 bg-gray-200 rounded w-1/4"></div>
                            <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                            <div className="h-4 bg-gray-200 rounded w-1/3"></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HotelCardsSkeleton;