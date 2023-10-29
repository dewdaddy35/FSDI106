const x ="Eric";//this is global

function sayHello(name, lastName){
    console.log("Hello " + name + " "+ lastName); // fifth
}
//practice print number from 1 to 20, expect 7 and 13. 
function printNumbers()
{
    let numbers = [12,4,123,4567,234,56,12,87,124,865,233,788,43,91,544,782,653,845];
    for(let i = 1; i < 21;i++){
        if(i !=7 && i != 13)
        {
            console.log(i);
        }
    }
    //print any numbers in the array line7, 10,11-15, 19-23 and 32.
    //print the sum of the number in the array add line 18, line 24 and line 27 
    let sum = 0;
    for (let i = 0; i < numbers.length; i++)
    {
       
        let number = numbers[i];
        console.log(number);
        sum += number;//+= adds the sum of all numbers
       
    }
    console.log("the Total: " + sum)
}
function init(){//second

    console.log("Hello There! From the init");//third
    printNumbers();
    
    
    
    sayHello(x, "Wells");//fourth // there is no connection between the name of the variables in the functions
    //im passing the value not the variable
    //destroyed after executing the function
}


window.onload = init();// avoid execution -- init()
//first

//using the (), means that it will be called at the exact moment
//avoiding the (), means that i need to wait until everything else is rendered

// in the sayHello function, pass a name and a last name and execute in the init function
//add line (name, lastName) in line 1
//add ("Hello "+name +" "+lastName)
//add ("Eric", "Wells") in line 11