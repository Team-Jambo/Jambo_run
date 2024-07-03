import { Schema, model, Types } from "mongoose";

const eventSchema = new Schema({
    id: {type: String},
    name: {type: String}, /*Title of the event*/
    email: {type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 
            "Please enter a valid email address"
        ] /* to match a valid email address*/
    },
    description: {type: String}, /*Detailed description of the event*/
    ticket: {type: String, 
        enum: ["Regular", "VIP", "VVIP"]
    },
    ticketPrice: {type: String},
    date: {type: Date, default: Date.now()},/*Date and time the event starts*/
    location: {type: String, 
        enum: ["Accra", "Kumasi", "Ho", "Cape Coast", "Koforidua"]

    }, /*ID of the location where the event takes place*/
    image: {type: String}  
}, {
    timestamps: true
}); /* to come back to this*/


// export the event model
export const eventModel = model("event", eventSchema);


