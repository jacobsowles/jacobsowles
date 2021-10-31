import express from "express";
import * as functions from "firebase-functions";

import { addTimeRecord, getAllTimeRecords } from "./controllers";

const app = express();

app.get("/", (req, res) => res.status(200).send("Hey there!"));
app.get("/time-records", getAllTimeRecords);
app.post("/time-records", addTimeRecord);

exports.app = functions.https.onRequest(app);
