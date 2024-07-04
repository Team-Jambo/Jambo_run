import { userModel } from "../model/user_model.js";

// Add Event to database 
export const postUser = async (req, res, next) => {

    try{
        // Add Event
        console.log('request', req.body)
        const newUser = await userModel.create({/* anywhere there is await, add async at the top*/
            ...req.body,
            image: req.file.filename /*enable file upload*/
        });  
        // recieving response
        res.status(201).json(newUser);

    } catch(error) {
        next(error);
    }
};



// Get Event
export const getUser =  async (req, res, next) => {
    try {
        // Get all available events
        const {limit, skip, filter} = req.query;
        // Get all events from database
        const allUsers = await userModel
        .find(filter ? JSON.parse(filter) : {})
        .limit(limit ? parseInt(limit) : undefined)
        .skip(skip ? parseInt(skip) : undefined);
        res.status(200).json(allUsers);
    } catch (error) {
        next(error);
    }
};


// Edit and Update events
export const patchUser = async (req, res, next) => {
    try {
        //Update event by id
        const updateUser = await userModel.findByIdAndUpdate(req.params.id, req.body, { new: true}); 
        //Return response
        res.status(200).json(updateUser);
    } catch (error) {
        next(error);
    }
};



// Delete Event
export const deleteUser = async (req, res, next) => {
    try {
        // Delete event by id
        const deletedUser = await userModel.findByIdAndDelete(req.params.id);
        res.status(200).json(deletedUser);
    } catch (error) {
        next(error);
    }
};


//Get a particular event by id
export const userId = async (req, res, next) => {
    try {
        //Get a event by id
        const getUserId = await userModel.findById(req.params.id);
        //Return response
        res.status(200).json(getUserId);
    } catch (error) {
        next(error);

    }
};


