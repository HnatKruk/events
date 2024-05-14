# Events Registration App
## Functionality: Basic and Middle level requirements are covered
You can check out the site here https://events-client-omega.vercel.app/ (hope it's still working))
### Settings before starting
- node version: v20.2.0
- npm version: 9.6.6
- I used MongoDb database and MongoDB Compass app

### Technologies
- Frontend
  - HTML, SASS, Material UI, 
  - JavaScript, React, Redux Toolkit, RTK Query, React Router Dom
  - Third-party libraries: Yup, React Hook Form, Moment
- Backend
  - Nodejs, Express
  - Mongodb, Mongoose
  - Third-party libraries: Faker-js, Express-validator

### Starting
1. Fill in the data in the files .env, .env-development
- Here is an example for ./server
  - DB_URL = mongodb://localhost:27017/events-registration-app
  (you can replace the link to your MongoDB database)
  - PORT = 4000
  - DB_NAME = 'events-registration-app'
  - DB_COLLECTION_NAME = 'events'
- Here is an example for ./client
  - REACT_APP_API_URL = http://localhost:4000/api/


### Running Project
1. **Navigate to the Server Directory:**
    ```bash
   cd server
2. **Install Dependencies:** *you need to have Node.js version 16.x or higher installed.
    ```bash
   npm install
3. **Start the Development Server:**
    ```bash
   npm run dev
   ```
    The server will start on http://localhost:4000 and you will see a message about this
4. **Navigate to the Client Directory:**
    ```bash
   cd client
5. **Install Dependencies:** *you need to have Node.js version 16.x or higher installed.
    ```bash
   npm install
6. **Start the Development Server:**
    ```bash
   npm run start
   ```
7. **Explore the Events App:**
Open your web browser and go to http://localhost:3000 to explore and interact with auth app.
## Contacts
You can contact me using:
- Email: hnatkivpublic@gmail.com
- LinkedIn: <a href="https://www.linkedin.com/in/hnatkivtaras/" target="_blank">https://www.linkedin.com/in/hnatkivtaras/</a>
