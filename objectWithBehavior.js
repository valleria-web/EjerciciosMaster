const o = createObject();


function createObject(){
    let objectoToReturn = {
        property: 1,
        other: 0,
        method: function(){
            console.log(objectoToReturn);
        }
    };
    return objectoToReturn;
}

console.log("property=" + o.property, "other=" + o.other);