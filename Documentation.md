# Train Location Tracker

This is a React app that shows real-time train locations using data from the DigiTraffic API. It uses Leaflet.js to display the map and axios to get the data. The backend is built with Node.js and Express.js.  

## Key Features:
•	Displays real-time train locations on a map.  
•	Shows train details like train number and speed.  
•	The map updates every 10 seconds with the latest train data.  

## Technologies Used:  

### Frontend:  
**React.js:** Used to create the UI and handle updates, like showing new train data, as things change in the app.  
**Leaflet.js:** A lightweight library for interactive maps.  
**axios:** For making API requests.  

### Backend:
**Node.js with Express.js:** Used to get data from the DigiTraffic API and send it to the frontend.  
**DigiTraffic API:** Public API that provides real-time train data in Finland.  

## Installation Instructions:  

**1.	Clone the Repository:**  
First, I cloned the repository to my laptop:  
git clone https://github.com/katherinesebastin/TrainTracker.git  

**2.	Install Dependencies:**  
- Navigated to the backend folder and installed the backend dependencies:  
cd backend  
npm install  
- Then, navigated to the frontend folder and installed the frontend dependencies:  
cd frontend  
npm install

**3.	Run the Backend:**  
To start the backend server, I used this command:  
cd backend  
node server.js  
The server runs on http://localhost:4000/api/trains.  

**4.	Run the Frontend:**
To start the React frontend, I navigated to the frontend folder and ran:  
cd frontend  
npm start  
The frontend runs on http://localhost:3000.  

## API Endpoint:
**•	URL:** http://localhost:5000/api/trains  
•	The API returns a list of trains with the following details:  
- Train number  
- Speed (in km/h)  

## How It Works:  
**1.	Backend:**  
- The backend makes requests to the DigiTraffic API to get real-time train data.
- This data is then sent to the frontend through a REST API endpoint (/api/trains).  

**2.	Frontend:**  
- The React frontend uses axios to request updated train data every 10 seconds.
- The train data is displayed on the map using Leaflet.js.  
- Each train is marked on the map, and clicking a marker shows a popup with details like train number and speed.  

**Automatic Updates:** The app updates the train locations automatically every 10 seconds to make sure the map always shows the latest information.  
