//creacion de objectos atraves de closures
const o = createObject(7, 4);
o.method();

function createObject(property, other){
    let thatObject = {
        property: property,
        other: other,
        add: function(){
            this.property++;
            this.other++;
        }
    };
    console.log(thatObject.property);
    console.log(thatObject.other);
    return{
        method: function(){
            thatObject.add();
            console.log(thatObject.property);
            console.log(thatObject.other);
        },
    }
}


