// call back function

function greet(name,callback){
    console.log(`hi ${name}`);
    callback()
}

function callme(){
    console.log('i am a call back function');
}

greet('peter',callme)


// eg: 2

setTimeout(()=>{
    console.log('hello');
},1000)