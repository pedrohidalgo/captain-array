export default class IncorrectItemsException extends Error {
  constructor(message) {
    super(message);

    this.name = 'IncorrectItemsException';
  }

  toString() {
    const json = {
      name: this.name,
      message: this.message,
    };

    return JSON.stringify(json);
  }
}