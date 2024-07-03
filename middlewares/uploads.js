import multer from "multer";
import 'dotenv/config';

import { multerSaveFilesOrg } from "multer-savefilesorg";



//To create a remote upload in savefiles.org
export const remoteUpload = multer({
    storage: multerSaveFilesOrg({
        apiAccessToken: process.env.SAVEFILESORG_API_KEY,
        relativePath:'/uploads/*'
})
});