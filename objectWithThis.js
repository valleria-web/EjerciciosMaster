const o = createObject(7);

function createObject(property){
    return{
        property: property,
        other: 0,
        method (){
            console.log(this);
        }
    }
}

console.log(o);
