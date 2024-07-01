import { Schema, model } from "mongoose";

const eventSchema = new Schema(); /* to come back to this*/


// export the event model
export const eventModel = model("event", eventSchema);
