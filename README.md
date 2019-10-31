## Simple Session-based Authentication with Express-session and Passportjs

To possibly be used as a starting point or give you a clear idea how session-based authentication works.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

What things you need to install the software and how to install them

```
git clone https://github.com/Bryant1-Dev/CEN3031-presentation.git
cd CEN3031-presentation
npm install
cd backend
npm install
cd ../frontend
npm install
cd ..
```

The above will clone the repo to your local machine and begin installing all the dependencies needed to work on the project. Now, create a file called "config.js" in backend/config/ this will contain your Mongo URI to connect to the database. There is already an existing file named "example.config.js" which should be used as a guide to creating your config.js file. The current format is for MongoDB Atlas URIs. For local MongoDB databases the entire URI should be replaced.

Note: The .gitignore file already has the /backend/config/config.js thus you won't accidently push your database key to the remote repo at any time in the development process.

### Installing

A step by step series of examples that tell you how to get a development environment up and running

To run both the client and the server:

```
npm run dev
```

To test the React client in isolation:

```
cd frontend
npm run start
```

To test the backend server in isolation:

```
cd backend
npm run dev
```

Author:
Bryant Wilkins
