import express from "express";
import upload from "./upload";
import cors from "cors";

const server = express();

var corsOptions = {
    origin: "*",
    optionsSuccessStatus: 200
};

server.use(cors(corsOptions));

server.post("/upload", upload);

server.listen(8000, () => {
    console.log("Server started!");
});