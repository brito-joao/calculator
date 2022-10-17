const p=document.querySelector("p");
var numbers=[];

var expression="";

//to convert button input to usable and modif. data 
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
    if(button==="%"){
        percentage();
    }
}

function zero(){
    numbers=[];
    expression="";
    p.innerText=0;
}

function backspace(){
    
    expression.toString();
    let newexp=expression.slice(0,-1);
    expression=newexp;
    
    
    
    p.innerText=expression;
}
function negative(){
    expression=-1*expression;
    p.innerText=expression;
}
function percentage(){
    let result=parseInt(expression)/100;
    p.innerText=result
    numbers=[];
    expression=result;
}

//to separate the temporary memory(expression variable) from the whole math expression
function stirng_to_array(){
    let operator=expression[expression.length-1];
    expression =expression.replace(operator,"");
    numbers.push(expression);

    numbers.push(operator)
    //expression+=operator;
    
    
    
    p.innerText=expression;expression="";
}

//to handle multiple element addition and subtraciton
function operate(){
    for (let a=0;a<=numbers.length-1;a++){
        if(numbers[a]==="+" || numbers[a]==="-" ){ 
            if(numbers[a]==="+"){
                res=parseFloat(numbers[a-1])+parseFloat(numbers[a+1]);
            }
            if(numbers[a]==="-"){
                res=parseFloat(numbers[a-1])-parseFloat(numbers[a+1]);
            }
            
            
            numbers[a+1]=res;
            numbers.splice(numbers[a-2],2);
            break;
        }
        
                
        
    };return res;
}

//to separate multiplication from addition
function operate2(){
    for (let a=0;a<=numbers.length-1;a++){
        if(numbers[a]==="x"||numbers[a]==="÷"){
            if(numbers[a]==="x"){
              res=parseFloat(numbers[a-1])*parseFloat(numbers[a+1]);  
            }
            if(numbers[a]==="÷"){
                res=parseFloat(numbers[a-1])/parseFloat(numbers[a+1]);  
            }
            
            if(a-1===0){
                numbers.shift();
                numbers.shift();
                numbers.shift();
                numbers.unshift(res.toString());  
            }else{
                if(a+1===numbers.length-1){
                    numbers.pop();
                    numbers.pop();
                    numbers.pop();
                    numbers.push(res.toString());
                }else{
                    //to remove all items untill the choosen operator,then add the correct values back
                    const temporaryArray=[];
                    for(let c=0;c<=a+1;c++){
                        let addToNewArrayNum=numbers.shift();
                        temporaryArray.push(addToNewArrayNum);
                    }
                    temporaryArray.pop();
                    temporaryArray.pop();
                    temporaryArray.pop();
                    temporaryArray.push(res.toString());
                    numbers.unshift.apply(numbers, temporaryArray);        
                }
                
            }
                break;
        }
    }
}


//to contain the main structure, like a game loop
function calculate(){
    numbers.push(expression);
    var res=0;
    var numMultDiv=0;
    var numOperators=0;
    numbers.forEach(function(num,index){
        if(num==="+" || num==="-" || num==="x" || num==="÷"){
            numOperators+=1;
            if(num==="x" || num==="÷"){
                numMultDiv+=1;
            }
        }
    })
    
    if(numMultDiv>=1){
        
        for(let b=0;b<numMultDiv;b++){
            operate2();
        }   
    }
    if(numOperators-numMultDiv>=1){ 
        for(let b=0;b<numOperators;b++){
            operate();
        }
    }
    res=operate();
    
    
    numbers.push(expression);
    res=res.toString();
    
    if(res.length>=6){
        res=parseFloat(res);
        
        result=res.toFixed(3);
    }else{
        res=parseFloat(res)
        result=Math.round(res);
    }
    
    p.innerText=result;
    numbers=[];
    expression="";
    p.style="font-size:9vh";
}