abstract class Wheel {
  abstract forward(): any;
  abstract backward(): any;
  abstract stop(): any;
}

/***
 * Methods & Operations behind the scene
 */

class LeftFrontWheel extends Wheel {
  forward() {
    console.log("Left Front Wheel - Forward");
  }

  backward() {
    console.log("Left Front Wheel - Backward");
  }

  stop() {
    console.log("Left Front Wheel - Stop");
  }
}

class RightFrontWheel extends Wheel {
  forward() {
    console.log("Right Front Wheel - Forward");
  }

  backward() {
    console.log("Right Front Wheel - Backward");
  }

  stop() {
    console.log("Right Front Wheel - Stop");
  }
}

class LeftBackWheel extends Wheel {
  forward() {
    console.log("Left Back Wheel - Forward");
  }

  backward() {
    console.log("Left Back Wheel - Backward");
  }

  stop() {
    console.log("Left Back Wheel - Stop");
  }
}

class RightBackWheel extends Wheel {
  forward() {
    console.log("Right Back Wheel - Forward");
  }

  backward() {
    console.log("Right Back Wheel - Backward");
  }

  stop() {
    console.log("Right Back Wheel - Stop");
  }
}

/***
 * Robo Car Facade, which will be visible to end user
 */

class RoboCarFacade {
  private leftFrontWheel: LeftFrontWheel;
  private leftBackWheel: LeftBackWheel;
  private rightFrontWheel: RightFrontWheel;
  private rightBackWheel: RightBackWheel;

  constructor(
    leftFrontWheel: LeftFrontWheel,
    leftBackWheel: LeftBackWheel,
    rightFrontWheel: RightFrontWheel,
    rightBackWheel: RightBackWheel
  ) {
    this.leftFrontWheel = leftFrontWheel;
    this.leftBackWheel = leftBackWheel;
    this.rightFrontWheel = rightFrontWheel;
    this.rightBackWheel = rightBackWheel;
  }

  moveForward() {
    this.leftFrontWheel.forward();
    this.leftBackWheel.forward();
    this.rightFrontWheel.forward();
    this.rightBackWheel.forward();
  }

  moveBackward() {
    this.leftFrontWheel.backward();
    this.leftBackWheel.backward();
    this.rightFrontWheel.backward();
    this.rightBackWheel.backward();
  }

  moveLeft() {
    this.leftFrontWheel.backward();
    this.leftBackWheel.backward();
    this.rightFrontWheel.forward();
    this.rightBackWheel.forward();
  }

  moveRight() {
    this.leftFrontWheel.forward();
    this.leftBackWheel.forward();
    this.rightFrontWheel.backward();
    this.rightBackWheel.backward();
  }

  stop() {
    this.leftFrontWheel.stop();
    this.leftBackWheel.stop();
    this.rightFrontWheel.stop();
    this.rightBackWheel.stop();
  }
}

/***
 * Calling the methods
 */
let leftFrontWheel = new LeftFrontWheel();
let leftBackWheel = new LeftBackWheel();
let rightFrontWheel = new RightFrontWheel();
let rightBackWheel = new RightBackWheel();

let roboCar = new RoboCarFacade(
  leftFrontWheel,
  leftBackWheel,
  rightFrontWheel,
  rightBackWheel
);

roboCar.moveForward();
roboCar.moveBackward();
roboCar.moveLeft();
roboCar.moveRight();
