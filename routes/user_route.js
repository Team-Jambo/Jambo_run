// import router
import { Router } from "express";

//import remoteUpload
import { remoteUpload } from "../middlewares/uploads.js";


import {getUser, deleteUser, postUser,  patchUser, userId } from "../controllers/user_controller.js";

// instantiating a router
const userRouter = Router()

//Define Routes
userRouter.get('/user', getUser);

//Defining a remote upload
userRouter.post('/user', remoteUpload.single('image'), postUser);

userRouter.patch('/user/:id', patchUser);

userRouter.delete('/user/:id', deleteUser);

userRouter.get('/user/:id', userId);



// export the createRouter
export default userRouter;