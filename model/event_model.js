import { Schema, model,SchemaTypes, Types } from "mongoose";

// import the reis module
import { toJSON } from "@reis/mongoose-to-json";

//  Doing a createEvent Schema
const eventSchema = new Schema({
    firstName: {type: String},
    lastName: {type: String},
    organisation: {type: String},
    email: {type: String,
        unique: true,
        lowercase: true,
        trim: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 
            "Please enter a valid email address"
        ] /* to match a valid email address*/
    },
    phoneNumber:{type: String},
    eventName: { type: String},
    description: { type: String},
    ticketPrice: {type: String},
    date: {type: Date},
    // startTime: { type: Date },
    // tickets: { type: String},  
    imageUrl: {type: String},
    favourite: { type: Boolean, default: false
    }
}, {
    timestamps: true
});


eventSchema.plugin(toJSON);


//  export the createEvent model now
export const eventModel = model("event", eventSchema); 