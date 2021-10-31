import { format } from "date-fns";
import { Response } from "express";

import { db } from "../config/firebase";

type TimeRecord = {
    duration: number | string,
};

type Request = {
    body: TimeRecord
};

const addTimeRecord = async (req: Request, res: Response) => {
    let { duration } = req.body;
    duration = parseInt(duration.toString());

    const timestamp = format(new Date(), "yyyy-MM-dd hh:mm:ss");

    try {
        const timeRecord = db.collection("timeRecords").doc();

        const timeRecordObject = {
            duration,
            id: timeRecord.id,
            timestamp,
        };

        timeRecord.set(timeRecordObject);

        res.status(200).send({
            status: "success",
            message: "Time record added successfully.",
            data: timeRecordObject
        });
    } catch (error) {
        // @ts-ignore
        res.status(500).json(error.message);
    }
};

const getAllTimeRecords = async (req: Request, res: Response) => {
    try {
        const allTimeRecords: TimeRecord[] = [];
        const querySnapshot = await db.collection("timeRecords").get();

        querySnapshot.forEach((doc: any) => allTimeRecords.push(doc.data()));

        return res.status(200).json(allTimeRecords);
    } catch (error) {
        // @ts-ignore
        return res.status(500).json(error.message);
    }
}

export { addTimeRecord, getAllTimeRecords };
