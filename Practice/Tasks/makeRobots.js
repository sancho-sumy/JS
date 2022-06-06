class MakeRobot {
    constructor(name, wheels, version) {
        this.name = name;
        this.wheels = wheels;
        this.version = version;
        this._x = 0;
        this._y = 0;
    }

    get info() {
        return console.log(`name: ${this.name}, chip version: ${this.version}, wheels: ${this.wheels}`);
    }
    get location() {
        return console.log(`${this.name}: x=${this._x}, y=${this._y}`);
    }
    goForward(value = 1) {
        if (Math.sign(parseInt(value)) === 1) {
        this._x += value;
        } 
        return this;
    }
    goBack(value = 1) {
        if (Math.sign(parseInt(value)) === 1) {
        this._x -= value;
        } 
        return this;
    }
    goRight(value = 1) {
        if (Math.sign(parseInt(value)) === 1) {
        this._y += value;
        } 
        return this;
    }
    goLeft(value = 1) {
        if (Math.sign(parseInt(value)) === 1) {
        this._y -= value;
        } 
        return this;
    }
    evacuate() {
        this._x = 1400;
        this._y = 500;
        console.log(`Calling rescuers....\nTransfering to service center with coordinates: x: ${this._x}, y: ${this._y}`);
    }
}


//create new robot
const Robot = new MakeRobot('r2d2', 4, 1);


//checking results
Robot.info
Robot.location
Robot.goForward().goLeft()
Robot.location
Robot.goForward(30).goLeft().goRight(3).goBack(15)
Robot.location
Robot.evacuate()
Robot.location
