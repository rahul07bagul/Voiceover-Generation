# Text-to-Speech Voiceover Generator

This project utilizes the Kokoro Voice Model to generate high-quality AI voiceovers. Users can input text, select from multiple voice options, and generate realistic audio.

![Demo](https://github.com/rahul07bagul/Voiceover-Generation/blob/main/project_demo.gif)

## Tech Stack:
- Frontend: React (with Framer Motion for animations)
- Backend: Flask (handles text-to-speech processing)
- Audio Processing: Combines multiple short audio clips into a seamless voiceover
- https://huggingface.co/hexgrad/Kokoro-82M
  
## Installation
### Prerequisites
Ensure you have Python 3.8+ and Node.js installed on your system.

### Backend Setup (Flask Server)
### Step 1: Clone the Repository
```sh
git clone https://github.com/rahul07bagul/Voiceover-Generation.git
cd voiceover-generation/server
```
### Step 2: Create a virtual environment 
```sh
python -m venv venv
source venv/bin/activate  # On macOS/Linux
venv\\Scripts\\activate   # On Windows
```
### Step 3: Install dependencies
```sh
pip install -r requirements.txt
```
### Step 4: Run the Flask server
```sh
python server.py
```

### Frontend Setup (React Client)
### Step 1: Navigate to the frontend directory
```sh
cd client/frontend
```
### Step 2: Install dependencies
```sh
npm install
```
### Step 3: Start the development server
```sh
npm start
```
