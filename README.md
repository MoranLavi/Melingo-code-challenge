# Melingo Code Challenge 
This is a web application that allows users to search for examples of a given word and receive a list of examples in response. The frontend is built with React, and the backend is built with FastAPI and a custom database class.

## Features
* Uses FastAPI as the web framework
* Connects to a database of words and examples
* Enables CORS (Cross-Origin Resource Sharing) to allow for communication between the backend and frontend
* Handles errors and returns appropriate HTTP status codes and error messages

## Getting Started
1. Clone the repository:
```
git clone https://github.com/[USERNAME]/fastapi-app.git
```
2. Install the dependencies:
```
pip install fastapi uvicorn
```
3. Install the dependencies for the frontend:
```
cd frontend
npm install
```
4. Run the app:
```
cd my-app\src\server
uvicorn main:app --port 8000 --reload
```
The server will be available at http://localhost:8000.


5. Test the endpoint by sending a GET request to http://localhost:8000/examples?entry=[WORD], replacing [WORD] with the word you want to search for. You should receive a list of examples in the response.

6. To start the frontend in development mode, with live reloading, run:
```
npm start
```
make sure that the client server is running on port 3000
 

## Dependencies
### Backend
* FastAPI
* uvicorn (for development server)
### Frontend
* react
* axios
* @material-ui/core
