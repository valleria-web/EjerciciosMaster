class Model {
    constructor() {
        this.data = [];
    }

    setData(value) {
        this.data.push(value);
    }

    getData() {
        return this.data;
    }
}

export default Model;

const model = new Model("data");
