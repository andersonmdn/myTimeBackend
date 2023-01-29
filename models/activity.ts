import knex from '../config/database';

export interface Activity {
    Number: number;
    Item: string;
    Estimated_Time: number;
    Start_Time: Date;
    End_Time: Date;
    Time_Difference: number;
    Time_Left: number;
}

export class ActivityModel {
    createTable() {
        knex.schema.createTableIfNotExists('Activity', (table: any) => {
            table.increments();
            table.integer('Number');
            table.string('Item');
            table.integer('Estimated_Time');
            table.dateTime('Start_Time');
            table.dateTime('End_Time');
            table.integer('Time_Difference');
            table.integer('Time_Left');
        }).then(() => console.log('Activity table created'));
    }
    async insertData(data: Activity) {
        const response = await knex('Activity').insert({
            Number: data.Number,
            Item: data.Item,
            Estimated_Time: data.Estimated_Time,
            Start_Time: data.Start_Time,
            End_Time: data.End_Time,
            Time_Difference: data.Time_Difference,
            Time_Left: data.Time_Left
        });
        console.log('Data inserted into Activity table');
        return response;
    }
}