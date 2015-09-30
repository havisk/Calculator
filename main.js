function report(answer)
{
	return answer;
};


//grab numbers 
var alpha = document.querySelector('#num_one');
var beta = document.querySelector('#num_two');
var calcBtn = document.querySelector("#calculateBtn")
var answerElem = document.querySelector("#answer")
var num1;
var num2;

//function to calculate.
function calc() {

	num1 = alpha.value;
	num2 = beta.value;
	answerElem.textContent = Number(num1) + Number(num2);
	
};

//button click
calcBtn.addEventListener('click', calc);