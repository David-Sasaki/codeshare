# Live Code Sharing Application

A simple live code-sharing application similar to [codeshare.io](https://codeshare.io) built with React, TypeScript, FastAPI, and MongoDB. Users can create a new session, edit JavaScript code in real-time, and share it with others through a unique session link. The application supports up to 5 users in a single session and the session expires after 5 minutes.

## Features

- Create a new session with a random link.
- Edit JavaScript code using a JavaScript editor.
- Real-time collaboration with other users.
- View cursor positions of other users.
- Sessions expire after 5 minutes.

## Technologies Used

- Frontend: React, TypeScript
- Backend: FastAPI, Python
- Database: MongoDB
- Real-time Communication: WebSockets

## Installation

### Prerequisites

- Node.js and npm
- Python 3.8+
- MongoDB

### Backend Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/live-code-sharing-app.git
   cd live-code-sharing-app/backend
   ```

2. Create a virtual environment and activate it:

   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows use `venv\Scripts\activate`
   ```

3. Install the required dependencies:

   ```bash
   pip install -r requirements.txt
   ```

4. Start the FastAPI server:
   ```bash
   uvicorn main:app --reload
   ```

### Frontend Setup

1. Navigate to the frontend directory:

   ```bash
   cd ../frontend
   ```

2. Install the required dependencies:

   ```bash
   npm install
   ```

3. Start the React development server:
   ```bash
   npm start
   ```

The frontend application will be available at `http://localhost:3000` and the backend server at `http://localhost:8000`.

## Usage

1. Open the frontend application in your browser.
2. Click the "Share Code Now" button to create a new session.
3. Copy the session URL and share it with others.
4. Edit the code in the JavaScript editor. Changes will be visible to all users in the session in real-time.
5. After 5 minutes, the session will expire automatically.

## File Structure

live-code-sharing-app/
├── backend/
│ ├── main.py
│ ├── requirements.txt
├── frontend/
│ ├── public/
│ ├── src/
│ │ ├── App.tsx
│ │ ├── index.tsx
│ ├── package.json
│ ├── tsconfig.json
├── README.md

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any bugs, feature requests, or improvements.

## License

This project is licensed under the MIT License.
