import mongoose from "mongoose";

//  importing dotenv
import "dotenv/config";

// assign a var to fetch mongo url
const mongoUri = process.env.MONGO_URL;

//  export dbConnection to make the url accessible
// export const dbConnection = async () => {
//     try {
//         (await mongoose.connect(mongoUri)).then(() => {
//             console.log("Database is connected!");
//         })
//     } catch (error) {
//         next(error)
//         // console.error("MongoDB connection error: ", error);
//         // process.exit(1);
//     }
// };


export const dbConnection = () => {
    mongoose.connect(mongoUri).then(() => {
        console.log("Database is connected!");
    })
};