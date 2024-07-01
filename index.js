//  import the express module
import express from 'express';

// import dotenv to enable your .env file to work 
import { dbConnection } from './config/db';

//  instantiate express
const app = express();

// applying middleware
app.use(express.json());

// apply the event router
app.use(eventRouter);

// instantiate the dbConnection
dbConnection();

// assigning a variable name to the port
const port = process.env.PORT || 7000;

// listen to server at the port for incoming requests
app.listen(port, () => {
    console.log(`App is listening at port ${port}`);
});
