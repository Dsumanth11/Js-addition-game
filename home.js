let num1=parseInt(Math.random()*100);
let num2=parseInt(Math.random()*100);
let cor_result=num1+num2;
document.getElementById("firstNumber").textContent=num1;
document.getElementById("secondNumber").textContent=num2;
function restart()
{
    num1=parseInt(Math.random()*100);
    num2=parseInt(Math.random()*100);
    cor_result=num1+num2;
    document.getElementById("userInput").value="";
    document.getElementById("firstNumber").textContent=num1;
    document.getElementById("secondNumber").textContent=num2;
    document.getElementById("gameResult").textContent="";
}
function check()
{
    let enter_number=parseInt(document.getElementById("userInput").value);
    if(enter_number===cor_result)
    {
        document.getElementById("gameResult").style.backgroundColor="#028a0f";
        document.getElementById("gameResult").textContent="Congratulations! you got it right..";
    }
    else{
        document.getElementById("gameResult").style.backgroundColor="#1e217c";
        document.getElementById("gameResult").textContent="Please Try Again";
    }
    
}