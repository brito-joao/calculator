const p=document.querySelector("p");
var numbers=[];

var expression="";
function button_to_string(button){
    
    expression+=button;
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
    numbers=[];
    expression="";
    p.innerText=0;
}
function stirng_to_array(){
    let operator=expression[expression.length-1];
    expression =expression.replace(operator,"");
    numbers.push(expression);

    numbers.push(operator)
    //expression+=operator;
    
    
    
    p.innerText=expression;expression="";
}

function operate(){
    for (let a=0;a<=numbers.length-1;a++){
        if(numbers[a]==="+" || numbers[a]==="-" ){ 
            if(numbers[a]==="+"){
                res=parseInt(numbers[a-1])+parseInt(numbers[a+1]);
            }
            if(numbers[a]==="-"){
                res=parseInt(numbers[a-1])-parseInt(numbers[a+1]);
            }
            console.log("ready to filter ",numbers);
            
            numbers[a+1]=res;
            numbers.splice(numbers[a-2],2);
            
            
            
            console.log("ready to filter ",numbers);
            auxNumbers.push(res);
            
            
            console.log("ready to filter ",numbers);
            break;
        }
        
                
        
    };return res;
}


const auxNumbers=[];
function calculate(){
    numbers.push(expression);
    var res=0;
    
    var numOperands=0;
    numbers.forEach(function(num,index){
        if(num==="+" || num==="-" || num==="x"){
            numOperands+=1;
        }
    })
    console.log(`number of operands ${numOperands}, numbers ${numbers}`);
    for(let b=0;b<=numOperands;b++){
        operate();
    }
    res=operate();
    console.log("hello world");
    console.log(res);
    
    numbers.push(expression);
    
    result=res;
    p.innerText=result;
    numbers=[];
    expression="";
    p.style="font-size:9vh";
}