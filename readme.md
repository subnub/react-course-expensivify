# Expensify

Expensify is a React based expense tracker, it uses firebase as a backend. 

Demo: https://react-course-expensivify.herokuapp.com/

Expensify Featues:
- Create New Expenses
- Edit expenses
- Built-in calander picker
- Search
- Accounts with firebase
- Cloud sync
- Filtering

## Installation 

Required:
- Node.js (13.9+ is Recommended)

Enviroment Variable:
These should be located at the root of the project, with the following naming convention (env.production, env.development, env.test). Then enter the following firebase details into the file.

- FIREBASE_API_KEY=
- FIREBASE_AUTH_DOMAIN=
- FIREBASE_DATABASE_URL=
- FIREBASE_PROJECT_ID=
- FIREBASE_STORAGE_BUCKET=
- FIREBASE_MESSAGE_SENDER_ID=
- FIREBASE_APP_ID=
- FIREBASE_MEASUREMENT_ID=

Setup:
- "npm install", Installs all dependencies.
- "npm run build:prod" or "npm run build:dev"
- "npm start"
