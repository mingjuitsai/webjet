import data from './data.json';

// Simulating fetching API data with error
export const fetchHotels = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.1) {
        reject(new Error('Failed to fetch hotel data. Please try again later.'));
        return;
      }
      resolve(data.hotels);
    }, 1500);
  });
};