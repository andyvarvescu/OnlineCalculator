const fs = require('fs').promises;

module.exports = class FileHistoryStorage {
    constructor(filePath) {
        this.filePath = filePath;
        fs.appendFile(filePath, '');
    }

    async saveHistoryEntry(entry) {
        const jsonBuffer = await fs.readFile(this.filePath);
        const oldHistory = jsonBuffer.toString();

        var history = oldHistory ? JSON.parse(oldHistory) : [];

        history.push(entry);

        await fs.writeFile(this.filePath, JSON.stringify(history));
    }

    async getHistory() {
        const data = JSON.parse(await fs.readFile(this.filePath));
        return data;
    }

    async delHistory(){
        await fs.writeFile(this.filePath, '[]');
    }
}