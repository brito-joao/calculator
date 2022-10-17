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
                res=parseInt(numbers[a-1])+parseInt(numbers[a+1]);
            }
            if(numbers[a]==="-"){
                res=parseInt(numbers[a-1])-parseInt(numbers[a+1]);
            }
            console.log("ready to filter ",numbers);
            
            numbers[a+1]=res;
            numbers.splice(numbers[a-2],2);
            
            
            
            console.log("ready to filter ",numbers);
            
            
            
            console.log("ready to filter ",numbers);
            break;
        }
        
                
        
    };return res;
}

//to separate multiplication from addition
function operate2(){
    for (let a=0;a<=numbers.length-1;a++){
        if(numbers[a]==="x"||numbers[a]==="÷"){
            if(numbers[a]==="x"){
              res=parseInt(numbers[a-1])*parseInt(numbers[a+1]);  
            }
            if(numbers[a]==="÷"){
                res=parseInt(numbers[a-1])/parseInt(numbers[a+1]);  
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
                        console.log("temp array",temporaryArray);
                        
                    }
                    temporaryArray.pop();
                    temporaryArray.pop();
                    temporaryArray.pop();

                    temporaryArray.push(res.toString());
                    console.log(temporaryArray);
                    numbers.unshift.apply(numbers, temporaryArray);
                    console.log(numbers);
                        
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
    console.log(`number of operators ${numOperators}, numbers ${numbers}`);
    if(numMultDiv>=1){
        console.log("there are :",numMultDiv,"mult div");
        for(let b=0;b<numMultDiv;b++){
            operate2();
        }   
    }
    if(numOperators-numMultDiv>=1){
        console.log("there are :",numOperators,"mult div");
        for(let b=0;b<numOperators;b++){
            operate();
        }
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