export default class InvalidArrayException extends Error {
  constructor(message) {
    super(message);

    this.name = 'InvalidArrayException';
  }

  toString() {
    const json = {
      name: this.name,
      message: this.message,
    };

    return JSON.stringify(json);
  }
}