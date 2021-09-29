class ZeroFill {
  #number;
  #postfix;
  #zeros;

  constructor(number = 0, zeros = 0, postfix = "") {
    this.number = number;
    this.#postfix = postfix;
    this.#zeros = zeros;
  }

  get number() {
    return this.zeroFill(this.#number);
  }

  set number(number) {
    this.#number = Math.floor(number).toString();
  }

  toString() {
    return this.number + this.#postfix;
  }

  zeroFill(string) {
    while (string.length < this.#zeros) {
      string = `0${string}`;
    }
    return string;
  }
}

export default ZeroFill;
