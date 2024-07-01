import { Router } from 'express';
import {deleteEvents, getEvents, patchEvents, postEvents} from "../controllers/event_controllers.js"

//create a router
const eventRouter = Router();


//Define Routers

eventRouter.get('/events', getEvents);

eventRouter.post('/events', postEvents)

eventRouter.patch('/events/:id',patchEvents);

eventRouter.delete('/events/:id', deleteEvents);



export default eventRouter;