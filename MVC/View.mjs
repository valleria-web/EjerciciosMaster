class View {
    constructor(){
        this.btnElement = document.getElementById("left-side-container");
        this.outputElement = document.getElementById("output");

        this.formElement = document.createElement("form");
        this.inputElement = document.createElement("input");
        this.inputElement.type = "text";
        this.inputElement.placeholder = "Ingresa un dato";

        this.submitButton = document.createElement("button");
        this.submitButton.innerText = "Agregar";
        this.submitButton.style.backgroundColor = "blue";
        this.submitButton.style.color = "white";
        this.submitButton.style.padding = "10px";

        this.formElement.appendChild(this.inputElement);
        this.formElement.appendChild(this.submitButton);
        this.btnElement.appendChild(this.formElement);

        this.formElement.addEventListener('submit', (event) => {
            event.preventDefault();
            const value = this.inputElement.value;
            this.emit('newData', value); 
            this.inputElement.value = "";
        });
    }

    displayData(data){
        this.outputElement.innerText = `${data}`;
        this.outputElement.style.backgroundColor = "deeppink"; 
        this.outputElement.style.fontSize = "20px";
    }

    emit(eventName, data) {
        const event = new CustomEvent(eventName, { detail: data });
        document.dispatchEvent(event);
    }
}

export default View;


