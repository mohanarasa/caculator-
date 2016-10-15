var exit = 1;

while(exit){
var operation = prompt("enter operation\n +\n -\n /\n *\n ^\n sqr(squareroot)\n (x to exit )\n");

if(operation == "x" || operation == "X"){
    exit = 0;
    break;
}

var num1 = parseFloat(prompt("enter first number, skip next number if operor is sqr"));
if(operation != "sqr")
    {var num2 = parseFloat(prompt("enter second number"));
    }

switch(operation){
    case "+":
        alert(num1+num2);
        break;

    case "-":
        alert(num1-num2);
        break;

    case "/":
        alert(num1/num2);
        break;

    case "*":
        alert(num1*num2);
        break;

    case "^":
        alert(Math.pow(num1, num2));
        break;

    case "sqr":
        alert(Math.sqrt(num1));
        break;

    default:
        alert("not a valid operator or numbers not inserted");
    }
}