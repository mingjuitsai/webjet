# WebJet hotel listing application

## Features
- Responsive layout for mobile, tablet, and desktop screens
- Sort hotels by price in ascending order by default
- Filter hotels by:
  - Hotel name (searching)
  - Star rating 
- Loading states with skeleton UI
- Simulated API service with error handling and retry functionality
- "No results found" message when filters return empty results
- Mobile-optimized design with action buttons
- Collapsible filter sections to save spaces in case of multiple filters

## Assumptions
- Assuming filter is for client-side text filter, instead of API-resolved text filter
- Assuming hotel cards are listed without pagination

## Design Modifications
- Kept filters visible on mobile as users need to filter through large result sets (550+ hotels)
- Changed hotel card CTA button on mobile (green button) for easy navigation
- Centered price text for better readability

## Tech Stack
- React 
- Tailwind CSS for styling
- Lucide React for icons
- Modern JavaScript (ES6+)

## Install dependencies and start dev server
```bash
npm install
npm run dev
```
or
```bash
yarn install
yarn run dev
```