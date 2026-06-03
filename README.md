# 💬 BartaConnect 

A scalable real-time persistent full-stack chat application built with the MERN stack (MongoDB, Express.js, React.js, Node.js) and Socket.IO.  
BartaConnect supports one-to-one messaging, group chats, real-time communication, and persistent message storage.

---

## 🚀 Live Demo
https://your-deployment-link.com

---

## 📌 Features

### 🔐 Authentication
- Secure user registration and login
- Password hashing using bcrypt
- JWT-based authentication system
- Profile picture upload using Cloudinary

### 💬 Real-Time Chat
- One-to-one private messaging
- Group chat creation and management
- Real-time messaging using Socket.IO
- Typing indicators
- Instant message notifications

### 👥 Group Features
- Create and rename groups
- Add or remove participants
- Admin-only group control

### 🔎 User Features
- Search users to start chat
- Emoji support in messages
- Responsive modern UI using Chakra UI

---

## 🧰 Tech Stack

### Frontend
- React.js
- Chakra UI
- Axios

### Backend
- Node.js
- Express.js
- Socket.IO

### Database
- MongoDB
- Mongoose

### Security & Auth
- JWT (JSON Web Token)
- bcrypt.js

### Media Storage
- Cloudinary

---

## 🏗️ Architecture

Frontend (React)
        ↓
REST API + Socket.IO
        ↓
Backend (Node + Express)
        ↓
MongoDB Database

---

## 📂 Database Models

### Users
- name
- email
- password (hashed)
- pic

### Chats
- chatName
- isGroupChat
- users
- groupAdmin

### Messages
- sender
- content
- chat reference
- timestamps

---

## ⚙️ Installation

### 1. Clone repo
```bash
git clone https://github.com/your-username/bartaconnect.git
cd bartaconnect
2. Install dependencies
Backend
cd backend
npm install
Frontend
cd frontend
npm install
3. Environment variables

Create .env file in backend:

PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret_key
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
4. Run project
Backend
npm run server
Frontend
npm start
📡 Socket.IO Events
setup → user connection
join chat → join chat room
new message → send message
typing → typing indicator
stop typing → stop typing indicator
📈 Future Improvements
Online/Offline status
Read receipts
Voice & video calling (WebRTC)
End-to-end encryption
Message search
File sharing improvements
🚀 Deployment
Frontend: Vercel / Netlify
Backend: Render / Railway
Database: MongoDB Atlas
👨‍💻 Author

Md. Aktaruzzaman Aktar
CSE Student | MERN Stack Developer
