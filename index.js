var inputField = document.getElementById('input');

var c = document.getElementById('c');
var plusminus = document.getElementById('plusminus');
var percent = document.getElementById('percent');
var divide = document.getElementById('divide');
var seven = document.getElementById('seven');
var eight = document.getElementById('eight');
var nine = document.getElementById('nine');
var multiply = document.getElementById('multiply');
var four = document.getElementById('four');
var five = document.getElementById('five');
var six = document.getElementById('six');
var minus = document.getElementById('minus');
var one = document.getElementById('one');
var two = document.getElementById('two');
var three = document.getElementById('three');
var plus = document.getElementById('plus');
var zero = document.getElementById('zero');
var decimal = document.getElementById('decimal');
var equals = document.getElementById('equals');

inputField.onkeypress = function() {
	return false;
}

inputField.value = '0'

c.addEventListener('click', function() {
	inputField.value = "0";
});

divide.addEventListener('click', function() {
	var lastChar = inputField.value.slice(-1);
	if (lastChar != "+" && lastChar != "*" && lastChar != "-" && lastChar != "/"
		&& lastChar != "") {
		inputField.value = inputField.value + "/";
	}
});

multiply.addEventListener('click', function() {
	var lastChar = inputField.value.slice(-1);
	if (lastChar != "+" && lastChar != "*" && lastChar != "-" && lastChar != "/"
		&& lastChar != "") {
		inputField.value = inputField.value + "*";
	}
});

minus.addEventListener('click', function() {
	var lastChar = inputField.value.slice(-1);
	if (lastChar != "+" && lastChar != "*" && lastChar != "-" && lastChar != "/"
		&& lastChar != "") {
		inputField.value = inputField.value + "-";
	}
});

plus.addEventListener('click', function() {
	var lastChar = inputField.value.slice(-1);
	if (lastChar != "+" && lastChar != "*" && lastChar != "-" && lastChar != "/"
		&& lastChar != "") {
		inputField.value = inputField.value + "+";
	}
});

decimal.addEventListener('click', function() {
	inputField.value = inputField.value + ".";
});

one.addEventListener('click', function() {
	if (inputField.value === '0') {
		inputField.value = ""
	}
	inputField.value = inputField.value + "1";
});

two.addEventListener('click', function() {
	if (inputField.value === '0') {
		inputField.value = ""
	}
	inputField.value = inputField.value + "2";
});

three.addEventListener('click', function() {
	if (inputField.value === '0') {
		inputField.value = ""
	}
	inputField.value = inputField.value + "3";
});

four.addEventListener('click', function() {
	if (inputField.value === '0') {
		inputField.value = ""
	}
	inputField.value = inputField.value + "4";
});

five.addEventListener('click', function() {
	if (inputField.value === '0') {
		inputField.value = ""
	}
	inputField.value = inputField.value + "5";
});

six.addEventListener('click', function() {
	if (inputField.value === '0') {
		inputField.value = ""
	}
	inputField.value = inputField.value + "6";
});

seven.addEventListener('click', function() {
	if (inputField.value === '0') {
		inputField.value = ""
	}
	inputField.value = inputField.value + "7";
});

eight.addEventListener('click', function() {
	if (inputField.value === '0') {
		inputField.value = ""
	}
	inputField.value = inputField.value + "8";
});

nine.addEventListener('click', function() {
	if (inputField.value === '0') {
		inputField.value = ""
	}
	inputField.value = inputField.value + "9";
});

zero.addEventListener('click', function() {
	if (inputField.value === '0') {
		inputField.value = ""
	}
	inputField.value = inputField.value + "0";
});


equals.addEventListener('click', function() {
	inputField.value = eval(inputField.value);
});

