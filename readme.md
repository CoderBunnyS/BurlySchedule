# **BurlyCon Schedule Manager**

Welcome to the **BurlyCon Schedule Manager**! This is a web application designed to help attendees and volunteers manage their schedules, register for classes, and stay updated about the BurlyCon convention.

---

## **Features**
- **Class Schedule**: View an agenda of classes, grouped by day and time.
- **Class Registration**: Register for classes and view detailed information about each event.
- **Comment Section**: Leave and read comments for individual classes.
- **Volunteer Dashboard**: Manage volunteer shifts alongside your class schedule.
- **Role-Based Features**: Admin, teacher, and attendee-specific functionalities.
- **Notifications**: Receive reminders for upcoming classes or shifts.

---

## **Technologies Used**
### **Front-End**:
- React
- React Router DOM

### **Back-End**:
- Node.js
- Express
- MongoDB (with Mongoose)
- FusionAuth (for authentication and authorization)

### **Styling**:
- Custom CSS

---

## **Getting Started**

### **Clone the Repository**
```bash
git clone https://github.com/yourusername/burlycon-schedule-manager.git
cd burlycon-schedule-manager
```

### **Set Up the Server**
1. Install server dependencies:
   ```bash
   cd backend
   npm install
   ```
2. Create a `.env` file in the `backend` folder with the following keys:
   ```
   MONGO_URI=your-mongodb-connection-string
   PORT=5000
   ```

3. Start the server:
   ```bash
   npm run dev
   ```

### **Set Up the Client**
1. Install client dependencies:
   ```bash
   cd frontend
   npm install
   ```
2. Start the development server:
   ```bash
   npm start
   ```

---

## **Project Structure**

```
/frontend
  ├── src
  │   ├── components  # Reusable React components (e.g., NavBar, CommentSection)
  │   ├── pages       # Pages (e.g., Home, Register, ClassDetails)
  │   ├── styles      # CSS files
  │   └── App.js      # Main React app
/backend
  ├── models          # Mongoose schemas
  ├── routes          # API routes
  ├── server.js       # Express server entry point
  └── config          # Environment configurations
```

---



## **Future Enhancements**
- Add teacher tools for managing their classes.
- Enable real-time notifications using WebSockets.
- Provide advanced analytics on class and volunteer participation.

---

## **License**
This project is licensed under the [MIT License](LICENSE).

---

## **Contributing**
Contributions are welcome! Feel free to submit a pull request or open an issue.

---

## **Contact**
For any inquiries, please contact:
- **Name**: Bunny Schaefer
- **Email**: Bunny@bunnyschaefer.com

