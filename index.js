import express from 'express';

//  instantiate express
const app = express();


app.use()

const port = process.env.PORT || 7000;
app.listen(port,()=>{
    console.log(`App is listening on ${port}`);
});
