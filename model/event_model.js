import { Schema, model, Types } from "mongoose";

const eventSchema = new Schema({
    id: {type: String},
    name: {type: String, required: true}, /*Title of the event*/
    description: {type: String, required: true}, /*Detailed description of the event*/
    price: {type: String, required: true},
    date: {type: Date, default: Date.now()},/*Date and time the event starts*/
    location: {type: Types.ObjectId, ref: "location" }, /*ID of the location where the event takes place*/
    flierUpload: {type: Buffer},
    flierUrl: {type: String, required: true},
    
}, {
    timestamps: true
}); /* to come back to this*/


// export the event model
export const eventModel = model("event", eventSchema);


