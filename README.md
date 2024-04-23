# Restaurants Coding Challenge

This project fetches restaurant data from the Just-Eat API based on a given postcode and displays it to the user.

## Features
- Fetch restaurant data from the Just-Eat API
- Display restaurant data including name, cuisine, rating and address
- Allow filtering by postal code
- Display restaurants sorted by highest rating
  
## Technologies used

### Frontend
- React.js
- Axios for making HTTP requests
- CSS for basic styling

### Backend
- Node.js
- Express.js for building the REST API
- Axios for making HTTP requests to the API
- CORS for handling cross-origin resource sharing

## How to Run

### Backend
#### Installation
1. Navigate to the `backend` directory: 
   cd RESTAURANT-CHALLENGE/backend
2. Install dependencies:
   npm install

#### Running the Server
To start the backend server, run: npm run dev
The server will start at `http://localhost:3000`.

#### API Endpoint
GET /restaurants
Fetches restaurant data for a predefined postal code.

### Frontend
#### Installation
1. Navigate to the `frontend` directory:
   cd RESTAURANT-CHALLENGE/frontend
2. Install dependencies:
   npm install

#### Running the Client
To start the frontend development server, run: npm run dev


## Assumptions and Clarifications
- It was unclear if the application should allow users to change between postal codes or if only one postal code should be used in the application.
- The application was assumed to be used in a web browser.
- The challenge was assumend not to require testing for completion


## Improvements
- **Branch Usage:** use feature branches for development and avoid direct commits to the main branch
- **Use of Environment Variables:** utilize environment variables (.env) to save the API URL and ports for better configuration management.
- **Unit Testing:** write tests to ensure the reliability of the application
- **Error Handling:** handle errors and display appropriate messages to the user
- **Performance Optimization:** optimize the application for better performance


