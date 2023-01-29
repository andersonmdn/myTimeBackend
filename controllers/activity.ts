import { Request, Response } from 'express';
import { ActivityModel, Activity } from '../models/activity';

const activityModel = new ActivityModel();

export class ActivityController {
    createActivityTable(req: Request, res: Response) {
        activityModel.createTable();
        res.status(200).send({ message: 'Activity table created' });
    }
    async addActivity(req: Request, res: Response) {
        const data = req.body as Activity;
        const response = await activityModel.insertData(data);
        if (response) {
            res.status(200).send({
                status: true,
                message: "Data inserted into Activity table"
            });
        } else {
            res.status(500).send({
                status: false,
                message: "Error: Failed to insert data into Activity table"
            });
        }
    }
    async getAllActivities(req: Request, res: Response) {
        const activities = await activityModel.getAllData();
        if (activities.length > 0) {
            res.status(200).send({
                status: true,
                data: activities
            });
        } else {
            res.status(404).send({
                status: false,
                message: "Error: No data found in Activity table"
            });
        }
    }
    async updateActivity(req: Request, res: Response) {
        const data = req.body as Activity;
        const response = await activityModel.updateData(data);
        if (response) {
            res.status(200).send({
                status: true,
                message: "Data updated in Activity table"
            });
        } else {
            res.status(500).send({
                status: false,
                message: "Error: Failed to update data in Activity table"
            });
        }
    }
    async deleteActivity(req: Request, res: Response) {
        const id = req.params.id;
        const response = await activityModel.deleteData(id);
        if (response) {
            res.status(200).send({
                status: true,
                message: "Data deleted from Activity table"
            });
        } else {
            res.status(500).send({
                status: false,
                message: "Error: Failed to delete data from Activity table"
            });
        }
    }
}
