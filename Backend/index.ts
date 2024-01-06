import express, {Application} from "express"
import cors from "cors"
import dotenv from "dotenv";
import { mainApp } from "./mainApp";
dotenv.config()

const app:Application = express()
const Port: number = parseInt(process.env.PORT!)

app.use(cors())
app.use(express.json())

mainApp(app)
const server = app.listen(Port, () =>{
    console.clear()
    console.log("App Listenng to port", Port)
})

process.on("uncaughtException", (error: Error) =>{
    console.log("uncaughtException", error);

    process.exit(1)
});

process.on("unhandledRejection", (reason: any) =>{
    console.log("unhandledRejection", reason);

    server.close(() =>{
        process.exit(1)
    });
});