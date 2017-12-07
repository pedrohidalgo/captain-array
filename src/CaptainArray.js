import InvalidArrayException from './exceptions/InvalidArrayException';
import IncorrectItemsException from './exceptions/IncorrectItemsException';
import _ from 'lodash';

export default class CaptainArray {

  constructor(array) {
    this._array = array;
    this._validateArray();
  }

  //Validations
  _validateArray() {
    if (!_.isArray(this._array)) {
      throw new InvalidArrayException('the provided value is not an array');
    }
  }

  _validateShouldContainOnlyNumbers() {
    const containsOnlyNumbers = !this._array.some(isNaN);
    if (!containsOnlyNumbers) {
      throw new IncorrectItemsException('the array contains non numeric values: ' + this._array);
    }
  }

  _validateShouldContainOnlyStrings() {
    const containsOnlyStrings = this._array.every(_.isString);
    if (!containsOnlyStrings) {
      throw new IncorrectItemsException('the array contains values that are not Strings: ' + this._array);
    }
  }

  static numberRange(start, finish){
    return new CaptainArray(
      _.range(start, finish + 1)
    );
  }

  toArray() {
    return this._array;
  }

  filter(exp) {
    return this._createNew(
      this._array.filter(exp),
    );
  }

  forEach(func) {
    return this._createNew(
      _.forEach(this._array, func),
    );
  }

  map(exp) {
    return this._createNew(
      this._array.map(exp),
    );
  }

  concat(values) {
    return this._createNew(
      _.concat(this._array, values),
    );
  }

  count() {
    return this._array.length;
  }

  distinct() {
    return this._createNew(
      _.uniq(this._array),
    );
  }

  first() {
    return _.first(this._array);
  }

  isEmpty() {
    return _.isEmpty(this._array);
  }

  last() {
    return _.last(this._array);
  }

  limit(amount) {
    return this._createNew(
      _.take(this._array, amount),
    );
  }

  skip(amount) {
    return this._createNew(
      _.slice(this._array, amount, this._array.length),
    );
  }

  sortAsc() {
    return this._createNew(
      _.orderBy(this._array, [], ['asc']),
    );
  }

  sortDesc() {
    return this._createNew(
      _.orderBy(this._array, [], ['desc']),
    );
  }

  //******************************
  //Numeric specific functions
  //******************************
  average() {
    this._validateShouldContainOnlyNumbers();

    return _.mean(this._array);
  }

  max() {
    this._validateShouldContainOnlyNumbers();

    return _.max(this._array);
  }

  min() {
    this._validateShouldContainOnlyNumbers();

    return _.min(this._array);
  }

  sum() {
    this._validateShouldContainOnlyNumbers();

    return _.sum(this._array);
  }

  //******************************
  //String specific functions
  //******************************
  join(separator) {
    this._validateShouldContainOnlyStrings();

    return _.join(this._array, separator);
  }

  _createNew(array) {
    return new CaptainArray(array);
  }
}