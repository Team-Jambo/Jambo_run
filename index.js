//  import the express module
import express from 'express';


//import mongoose
import mongoose from 'mongoose';

// import cors, expressOas generator
import cors from "cors";
import expressOasGenerator from "express-oas-generator";

// import event router
import eventRouter from './routes/event_route.js';

// import createRouter
import createRouter from './routes/createEvent_route.js';

// import dotenv to enable your .env file to work 
import { dbConnection } from './config/db.js';
// import createRouter from './routes/createEvent_route.js';


// connect to database
await mongoose.connect(process.env.MONGO_URL);

//  instantiate express
const app = express();

// applying middleware
app.use(express.json());
app.use(cors());
app.use(express.static("uploads"));

// apply the event router
app.use(eventRouter);

// use create router
app.use(createRouter);

expressOasGenerator.handleResponses(app, {
    alwaysServeDocs: true, /* to serve render whether in production or development */
    tags: ["events"/*, "createEvent"*/],
    mongooseModels: mongoose.modelNames(),
});

// use express OAS generator
expressOasGenerator.handleRequests();
app.use((req, res) => res.redirect("api-docs/"));
app.use(express.static("uploads"));

// instantiate the dbConnection
dbConnection();

// assigning a variable name to the port
const port = process.env.PORT || 7000;

// listen to server at the port for incoming requests
app.listen(port, () => {
    console.log(`App is listening at port ${port}`);
});
