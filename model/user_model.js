import { Schema, model, Types } from "mongoose";

// import the reis module
import { toJSON } from "@reis/mongoose-to-json";

// create event schema is the variable namwe for the user who is interested in attending the program

const userSchema = new Schema({
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
    ticketQty: {type: Number, min: 1},
    favourite:{type:Boolean, default:false}
}, {
    timestamps: true
}); /* to come back to this*/

userSchema.plugin(toJSON);


// export the event model
export const userModel = model("user", userSchema);

