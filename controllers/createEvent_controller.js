// import { createEventModel } from "../model/createEvent_model.js";

// // Add Event to database 
// export const postCreateEvent = async (req, res, next) => {

//     try{
//         // Add Event
//         console.log('request', req.body)
//         const newEvent = await createEventModel.create(req.body);
//         // recieving response
//         res.status(201).json(newEvent);

//     } catch(error) {
//         next(error);
//     }
// };


// // Get Event
// export const getCreateEvent =  async (req, res, next) => {
//     try {
//         // Get all available events
//         const allEvents = await createEventModel.find();
//         res.status(200).json(allEvents);
//     } catch (error) {
//         next(error);
//     }
// };


// // Edit and Update events
// export const patchCreateEvent = async (req, res, next) => {
//     try {
//         const updateCreateEvent = await createEventModel.findByIdAndUpdate(req.params.id); 
//         res.status(200).json(updateCreateEvent);
//     } catch (error) {
//         next(error);
//     }
// };

// // Delete Event
// export const deleteCreateEvent = async (req, res, next) => {
//     try {
//         // Delete Something
//         const deletedCreateEvent = await createEventModel.findByIdAndDelete(req.params.id);
//         res.status(200).json(deletedCreateEvent);
//     } catch (error) {
//         next(error);
//     }
// };



