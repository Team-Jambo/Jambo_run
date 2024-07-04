import { eventModel } from "../model/event_model.js";


// Get All events
export const getEvents = async (req, res, next) => {
    try {
        // Get query
        const {limit, skip, filter} = req.query;
        // Get all events from database
        const allEvents = await eventModel
        .find(filter ? JSON.parse(filter) : {})
        .limit(limit ? parseInt(limit) : undefined)
        .skip(skip ? parseInt(skip) : undefined);
        // Return all events as response
        res.status(200).json(allEvents);
    } catch (error) {
        next(error);
    }
};


//    Post All events
export const postEvents = async (req, res, next) => {
    try {
        // add event to database
        const newEvents = await eventModel.create({/* anywhere there is await, add async at the top*/
            ...req.body,
            image: req.file.filename /*enable file upload*/
        });  
        // Return response
        res.json(newEvents);
    } catch (error) {
        next(error);
    }
};


//Patch events
//Update endpoints
export const patchEvents = async (req, res, next) => {
    try {
        //Update event by id
        const updatedEvent = await eventModel.findByIdAndUpdate(req.params.id, req.body, { new: true});

        //Return response
        res.status(200).json(updatedEvent);
    } catch (error) {
        next(error);

    }
};



//Delete events
export const deleteEvents = async (req, res, next) => {

    try {
        //Delete event by ID
        const deleteEvents = await eventModel.findByIdAndDelete(req.params.id);

        //return response
        res.status(200).json(deleteEvents);
    } catch (error) {
        next(error);

    }
};


//Get a particular event by id
export const getEventsId = async (req, res, next) => {
    try {
        //Get an event by id
        const getNewEvent = await EventModel.findById(req.params.id);
        //Return response
        res.status(200).json(getNewEvent);
    } catch (error) {
        next(error);

    }
};