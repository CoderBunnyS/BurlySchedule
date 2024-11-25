Burlycon/
├── Burlycon-app-server/    # Back-End (Express + Node.js)
│   ├── routes/               # API routes
│   │   ├── auth.js           # Authentication routes
│   │   ├── classes.js        # Routes for class-related operations
│   │   ├── comments.js       # Routes for comments
│   │   ├── notifications.js  # Routes for notifications
│   │   └── shifts.js         # Routes for volunteer shifts
│   ├── models/               # Database models (MongoDB schemas)
│   │   ├── User.js           # User schema
│   │   ├── Class.js          # Class schema
│   │   ├── Shift.js          # Volunteer shift schema
│   │   └── Comment.js        # Comment schema
│   ├── middleware/           # Custom middleware
│   │   ├── authMiddleware.js # Middleware for role-based access
│   │   └── errorHandler.js   # Error handling middleware
│   ├── config/               # Configuration files
│   │   ├── db.js             # MongoDB connection setup
│   │   └── fusionAuth.js     # FusionAuth setup and utilities
│   ├── .env                  # Environment variables (e.g., DB connection string)
│   ├── index.js              # Main entry point for the server
│   └── package.json          # Back-end dependencies and scripts
├── Burlycon-app-client/    # Front-End (React)
│   ├── public/               # Static assets (index.html, images, etc.)
│   │   └── index.html        # Main HTML file
│   ├── src/                  # React source files
│   │   ├── components/       # Reusable components
│   │   │   ├── LoginForm.js  # Login form component
│   │   │   ├── RegisterForm.js # Registration form
│   │   │   ├── Dashboard.js  # Main dashboard
│   │   │   ├── ClassList.js  # List of classes
│   │   │   ├── ClassDetail.js # Class details and comments
│   │   │   ├── VolunteerSchedule.js # Volunteer schedule view
│   │   │   ├── Notifications.js # Notifications view
│   │   └── App.js            # Root React component
│   ├── styles/               # CSS files for styling (optional)
│   │   └── App.css           # Global styles
│   ├── package.json          # Front-end dependencies and scripts
│   ├── .env                  # Environment variables (API base URL, etc.)
│   └── README.md             # Instructions for setting up the front-end
├── README.md                 # Overall project documentation
└── .gitignore                # Files to ignore in version control
