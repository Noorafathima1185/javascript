baleno={
    model:'batch back',
    manufacturer:'maruti',
    varient:['automatic','manual']
}

glanza={
    manufacturer:'toyota'
}

glanza.__proto__=baleno
console.log(glanza.model);