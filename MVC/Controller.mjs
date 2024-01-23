class Controller {
    constructor(model, view) {
        this.model = model;
        this.view = view;

        document.addEventListener('newData', (event) => {
            const value = event.detail;
            this.updateData(value);
        });
    }

    updateData(value) {
        this.model.setData(value);
        const newData = this.model.getData();
        this.view.displayData(newData);
    }
}

export default Controller;



