import { createEventModel } from "../model/createEvent_model.js";

// Add Event to database 
export const postCreateEvent = async (req, res, next) => {

    try{
        // Add Event
        console.log('request', req.body)
        const newEvent = await createEventModel.create({/* anywhere there is await, add async at the top*/
            ...req.body,
            image: req.file.filename /*enable file upload*/
        });  
        // recieving response
        res.status(201).json(newEvent);

    } catch(error) {
        next(error);
    }
};



// Get Event
export const getCreateEvent =  async (req, res, next) => {
    try {
        // Get all available events
        const {limit, skip, filter} = req.query;
        // Get all events from database
        const allCreateEvents = await eventModel
        .find(filter ? JSON.parse(filter) : {})
        .limit(limit ? parseInt(limit) : undefined)
        .skip(skip ? parseInt(skip) : undefined);
        res.status(200).json(allCreateEvents);
    } catch (error) {
        next(error);
    }
};


// Edit and Update events
export const patchCreateEvent = async (req, res, next) => {
    try {
        //Update event by id
        const updateCreateEvent = await createEventModel.findByIdAndUpdate(req.params.id, req.body, { new: true}); 
        //Return response
        res.status(200).json(updateCreateEvent);
    } catch (error) {
        next(error);
    }
};



// Delete Event
export const deleteCreateEvent = async (req, res, next) => {
    try {
        // Delete event by id
        const deletedCreateEvent = await createEventModel.findByIdAndDelete(req.params.id);
        res.status(200).json(deletedCreateEvent);
    } catch (error) {
        next(error);
    }
};


//Get a particular event by id
export const createEventsId = async (req, res, next) => {
    try {
        //Get a event by id
        const createdEventId = await createEventModel.findById(req.params.id);
        //Return response
        res.status(200).json(createdEventIdEvent);
    } catch (error) {
        next(error);

    }
};


