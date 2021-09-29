const AZERTY = {
  LEFT: "KeyQ",
  UP: "KeyZ",
};
const DIRECTION = {
  BACK: -1,
  DOWN: -1,
  FORWARD: 1,
  LEFT: -1,
  NONE: 0,
  RIGHT: 1,
  UP: 1,
};
const QWERTY = {
  LEFT: "KeyA",
  UP: "KeyW",
};

class KeyboardControls {
  static #forwardDirection = DIRECTION.NONE;
  static #keyboard = QWERTY;
  static #rightDirection = DIRECTION.NONE;
  static #upDirection = DIRECTION.NONE;

  static get forwardDirection() {
    return this.#forwardDirection;
  }

  static get rightDirection() {
    return this.#rightDirection;
  }

  static get upDirection() {
    return this.#upDirection;
  }

  static keyDownHandler(event) {
    console.log("KeyboardControls: keyDownHandler", `'${event.code}'`);
    switch (event.code) {
      case "ArrowDown":
      case "KeyS":
        KeyboardControls.#forwardDirection = DIRECTION.BACK;
        break;
      case "ArrowLeft":
      case KeyboardControls.#keyboard.LEFT:
        KeyboardControls.#rightDirection = DIRECTION.LEFT;
        break;
      case "ArrowRight":
      case "KeyD":
        KeyboardControls.#rightDirection = DIRECTION.RIGHT;
        break;
      case "ArrowUp":
      case KeyboardControls.#keyboard.UP:
        KeyboardControls.#forwardDirection = DIRECTION.FORWARD;
        break;
      case "KeyF":
        KeyboardControls.#upDirection = DIRECTION.DOWN;
        break;
      case "KeyR":
        KeyboardControls.#upDirection = DIRECTION.UP;
        break;
      default:
    }
  }

  static keyUpHandler(event) {
    console.log("KeyboardControls: keyUpHandler", `'${event.code}'`);
    switch (event.code) {
      case "ArrowDown":
      case "ArrowUp":
      case "KeyS":
      case KeyboardControls.#keyboard.UP:
        KeyboardControls.#forwardDirection = DIRECTION.NONE;
        break;
      case "ArrowLeft":
      case "ArrowRight":
      case "KeyD":
      case KeyboardControls.#keyboard.LEFT:
        KeyboardControls.#rightDirection = DIRECTION.NONE;
        break;
      case "KeyF":
      case "KeyR":
        KeyboardControls.#upDirection = DIRECTION.NONE;
        break;
      default:
    }
  }

  static addEventListeners() {
    console.info("KeyboardControls: addEventListeners");
    window.addEventListener("keydown", KeyboardControls.keyDownHandler);
    window.addEventListener("keyup", KeyboardControls.keyUpHandler);
  }

  static removeEventListeners() {
    console.info("KeyboardControls: removeEventListeners");
    window.removeEventListener("keydown", KeyboardControls.keyDownHandler);
    window.removeEventListener("keyup", KeyboardControls.keyUpHandler);
  }

  static setKeyboardAzerty() {
    console.log(this.#keyboard);
    this.#keyboard = AZERTY;
    console.log(this.#keyboard);
  }

  static setKeyboardQwerty() {
    this.#keyboard = QWERTY;
  }
}

export default KeyboardControls;
