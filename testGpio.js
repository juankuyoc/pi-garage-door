var Gpio = require('onoff').Gpio; //include onoff to interact with the GPIO
var LED = new Gpio(4, 'out'); //use GPIO pin 4 as output
var current = 0;

function toggle(){
	if (current === 0){
		LED.writeSync(1); //turn on
		console.log("turned on");
		current = 1;
	}
	else{
		LED.writeSync(0); //turn off
		console.log("turned off");
		current = 0;
	}
}

var toggler = setInterval(toggle, 2000);
