import { Router } from 'express';


//import remoteUpload
import { remoteUpload } from "../middlewares/uploads.js";

import {deleteEvents, getEvents, patchEvents, postEvents} from "../controllers/event_controllers.js";

//create a router
const eventRouter = Router();


//Define Routers

eventRouter.get('/events', getEvents);

//Defining a remote upload
eventRouter.post('/events', remoteUpload.single('image'), postEvents);

eventRouter.patch('/events/:id',patchEvents);

eventRouter.delete('/events/:id', deleteEvents);



export default eventRouter;