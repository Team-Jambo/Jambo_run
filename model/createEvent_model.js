// import { Schema, model, Types } from "mongoose";

// //  Doing a createEvent Schema
// const createEventSchema = new Schema({
//     firstName: {type: String},
//     lastName: {type: String},
//     workEmail: {type: String,
//         required: true,
//         unique: true,
//         lowercase: true,
//         trim: true,
//         match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 
//             "Please enter a valid email address"
//         ] /* to match a valid email address*/
//     },
//     company: {type: String},
//     eventDetails: {
//         name: { type: String},
//         description: { type: String},
//         category: { 
//           type: String, 
//           required: true,
//           enum: ["Afrobeats", "Gospel", "RnB", "Hiplife", "Hip-hop", "Reggae", "Others"] 
//         }
//     },
//     date: {type: Date},
//     startTime: { type: Date },
//     endTime: { type: Date },
//     venue: {
//       name: { type: String },
//       address: { type: String },
//       city: { type: String }
//     },
//     tickets: [{
//         type: { type: String, enum: ['VIP', 'Regular', 'VVIP'] },
//         price: { type: Number, min: 0 },    /* sets minimum price to zero*/
//         quantity: { type: Number, min: 0 },  /* sets minimum qty to zero*/
//         qtyAvailable: { type: Number, min: 0 }  /* sets minimum available qty to zero*/
//       }
//     ],
//     totalCapacity: { type: Number, min: 1 },
//     isPublished: { type: Boolean, default: false }
// }, {
//     timestamps: true
// });

// //  export the createEvent model
// export const createEventModel = model("createEvent", createEventSchema);