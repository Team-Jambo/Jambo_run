import { EventModel } from "../model/event_model.js";





//get all events
export const getEvents = async(req,res,next) =>{
    try {
        //Get all events from database
        const allEvents = await EventModel.find()

        //Return all events as response
        res.json(allEvents);
    } catch (error) {
        next(error);
        
    }
}



//Post all events
//Create endpoints
export const postEvents = async (req,res,next) =>{
    try {
        //Add events to database
        const newEvent = await EventModel.create(req.body);

        //return response
        res.json(newEvent);
    } catch (error) {
        next(error); 
    }
}


//Patch events
//Update endpoints
export const patchEvents = async(req,res,next)=>{
    try {
        //Update event by id
        const updatedEvent =await EventModel.findByIdAndUpdate(req.params.id,req.body,{new:true});

        //Return response
        res.json(updatedEvent)
    } catch (error) {
        next(error);
        
    }
}



//Delete events
export const deleteEvents = async (req, res, next) => {

try {
        //Delete event by ID
        const deleteEvents = await EventModel.findByIdAndDelete(req.params.id);
    
        //return response
        res.json(deleteEvents);
} catch (error) {
    next(error)
    
}
}