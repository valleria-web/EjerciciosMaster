import fs from "fs";

class Persistence {
    constructor(filePath) {
        this.filePath = filePath;
    }

    saveData(data) {
        const jsonData = JSON.stringify(data);
        fs.writeFileSync(this.filePath, jsonData, "utf8");
    }

    loadData() {
        try {
            const jsonData = fs.readFileSync(this.filePath, "utf8");
            return JSON.parse(jsonData);
        } catch (error) {
            return null;
        }
    }
}

export default Persistence;
