const mongoose = require("mongoose");
const dotenv = require("dotenv");
const envPath = "./config.env"
dotenv.config({path: envPath});
const app = require("./app")

const DB = process.env.DATABASE.replace(
    "<PASSWORD>",
    process.env.DATABASE_PASSWORD
);


mongoose
    .connect(DB,{
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
    })
    .then(()=>console.log("DB connection successful!"))

    const port = 3000;
    app.listen(port,()=>{
        console.log(`App running on port ${port}....`);
    });
    