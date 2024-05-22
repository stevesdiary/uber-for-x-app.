import { config } from "dotenv";
import express from "express";
const app = express();
config();
const local_port = process.env.PORT || 2001;


app.listen(local_port, () => {
    console.log(`App running on port ${local_port}`);
})