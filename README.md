# Train Location Tracker
This is a real-time web application that shows train locations in Finland on an interactive map. It uses live data from the DigiTraffic Railway API and updates every 10 seconds.    

This is built with a React frontend and a Node.js + Express backend.  

The backend retreives live train data and the frontend displays it on a Leaflet-based map with interactive markers. Selecting a train marker shows details like train number and current speed.    

## Technologies Used
### Frontend
- **React.js:** Builds the user interface and handles live updates
- **Leaflet.js:** A lightweight library for interactive maps
- **Axios:** Handles API requests

### Backend
- **Node.js with Express.js:** Retrieves and serves train data from the API
- **DigiTraffic Railway API:** Public API that gives real-time train data in Finland

## Data Source (API)
This project uses the official Finnish Transport Infrastructure Agency open data API: `https://rata.digitraffic.fi/api/v1/train-locations/latest/`  

Important Points:  
- Provides real-time train location data in Finland
- Includes train number and speed
- Free and publicly available (no API key required)

## API Endpoint
**Get train data**: `GET /api/trains`  

Returns:  
- Train number
- Speed (km/h)
- Location data (used for mapping)

## How It Works
**Backend**
- The backend makes requests to the DigiTraffic API to get real-time train data
- This data is then sent to the frontend through a REST API endpoint (/api/trains)

**Frontend**
- The React frontend uses axios to request updated train data every 10 seconds
- The train data is displayed on the map using Leaflet.js
- Each train is marked on the map and clicking a marker shows a popup with details like train number and speed.

## Installation & Setup
### 1. Clone the Repository
```bash
git clone https://github.com/katherinesebastin/TrainTracker.git
```
  
```bash
cd TrainTracker
``` 

### 2. Install Dependencies
**Backend**  
```bash
cd backend
```
  
```bash
npm install
```  

**Frontend**  
```bash
cd frontend
```
  
```bash
npm install
``` 

### 3. Run the Backend Server
```bash
cd backend
``` 

```bash
node server.js
```  
Backend will run on: `http://localhost:4000/api/trains`  

### 4. Run the Frontend:
```bash
cd frontend
``` 

```bash
npm start
```  
Frontend will run on: `http://localhost:3000`  
