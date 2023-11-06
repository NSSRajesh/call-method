const car={
	name:'car',
	start(){
		document.write('Start the ' + this.name)
	},
	
	speedUp(){
		document.write(' Speed up the ' + this.name);
	},
};

const aircraft={
	name:'aircraft',
	fly(){
		document.write(' Fly');
	},
};

car.start.call(aircraft);
car.speedUp.call(aircraft);
aircraft.fly();