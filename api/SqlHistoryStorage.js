const HistoryEntry = require('./HistoryEntry');
const mysql = require('mysql');

module.exports = class SqlHistoryStorage {
    constructor(db) {
        this.db = db;
    }

    async createConnection() {
        return new Promise((resolve, reject) => {
            const con = mysql.createConnection(this.db);

            // connect() doesn't return a promise; it can only accept a callback
            con.connect((err) => {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(con);
                }
            });
        });
    }

    async saveHistoryEntry(entry) {
        const query =  `INSERT INTO history (Operation, Number1, Number2, Result, Time_stamp) 
            VALUES ('${entry.operation}', ${entry.number1}, ${entry.number2}, ${entry.result}, 
            '${entry.timestamp.getFullYear()}-${entry.timestamp.getMonth()+1}-${entry.timestamp.getDate()} 
            ${entry.timestamp.getHours()}:${entry.timestamp.getMinutes()}:${entry.timestamp.getSeconds()}')`;

        return new Promise(async (resolve, reject) => {
            const con = await this.createConnection();
            con.query(query, (err, result) => {
                con.end();
                if (err) {
                    reject(err);
                }
                else {
                    resolve(result);
                };
            });
        });
    }

    async getHistory() {
        const query = "SELECT * FROM history";

        return new Promise(async (resolve, reject) => {
            try {
                const con = await this.createConnection();
                con.query(query, (err, result) => {
                    con.end();
                    if (err) {
                        reject(err);
                    } else {
                        const entries = result.map((entry) => {
                            return new HistoryEntry(entry.Operation, entry.Number1, entry.Number2, 
                                            entry.Result, entry.Time_stamp);
                        });
                        resolve(entries);
                    };
                });
            }
            catch(err) {
                console.log("Error in creating DB connection: ", err)
            }
        });
    }
}