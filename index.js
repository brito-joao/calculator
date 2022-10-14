const p=document.querySelector("p");
var numbers=[];

var expression="";
function button_to_string(button){
    console.log(button);
    expression+=button;console.log(expression)
    p.innerText=expression;
    if(expression.length>=9){
        p.style="font-size:6vh";
        
    }
    if(expression.length>=12){
            p.style="font-size:4vh";
    }
    if(expression.length>=20){
        p.style="font-size:3vh";
    }
    if(button==="+"){
        stirng_to_array();
    }
    if(button==="-"){
        stirng_to_array();
    }
    if(button==="x"){
        stirng_to_array();
    }
    if(button==="÷"){
        stirng_to_array();
    }
}

function zero(){
    expression="";
    p.innerText=0;
}
function stirng_to_array(){
    let operator=expression[expression.length-1];
    expression =expression.replace(operator,"");
    numbers.push(expression);

    numbers.push(operator)
    //expression+=operator;
    expression="";
    console.log(numbers);
    
    p.innerText="";
}

function calculate(){
    numbers.push(expression);
    console.log(numbers);
    result=Math.floor(Math.random()*100);
    p.innerText=result;
    expression="";
    p.style="font-size:9vh";
}