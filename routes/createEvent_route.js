// // import router
// import { Router } from "express";

// import multer from "multer";

// //import remoteUpload
// import { remoteUpload } from "../middlewares/uploads.js";


// import { deleteCreateEvent, getCreateEvent, patchCreateEvent, postCreateEvent } from "../controllers/createEvent_controller.js";

// // instantiating a router
// const createRouter = Router();

// //Define Routes
// createRouter.get('/create', getCreateEvent);

// //Defining a remote upload
// createRouter.post('/create', remoteUpload.single('image'), postCreateEvent);

// createRouter.patch('/create/:id', patchCreateEvent);

// createRouter.delete('/create/:id', deleteCreateEvent);


// // export the createRouter
// export default createRouter;