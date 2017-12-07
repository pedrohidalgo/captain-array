import CaptainArray from '../src/CaptainArray';
import logger from '../src/misc/MyLogger';

describe('Testing CaptainArray Generic functionality', () => {

  const sampleArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const sampleCaptainArrayNumber = new CaptainArray(sampleArray);

  test('Testing Array should throw IncorrectItemsException when trying to sum() array with string elements', () => {
    try {
      new CaptainArray([0, 1, 'dfa', 'dfasd']).sum();

      // eslint-disable-next-line
      fail('this line shouldn\'t be reached');
    } catch (ex) {
      //Testing for exception handled this way due to Babel issues dealing with inheritance on classes
      //workaround exists but I didn't have the time to fix this yet.
      expect(ex.name).toBe('IncorrectItemsException');
    }
  });

  test('Testing filter()', () => {
    const resultArray =
      new CaptainArray([1, 4, 5, 7, 5, 4, 2]).filter(n => n > 4);

    logger.debug('resultArray: ' + resultArray.toArray());
    expect(resultArray.count()).toEqual(3);
  });

  test('Testing forEach()', () => {
    let currentTotal = 0;
    new CaptainArray([1, 4, 5]).forEach(value => {
      currentTotal = currentTotal + value;
    });

    logger.debug('currentTotal: ' + currentTotal);
    expect(currentTotal).toEqual(10);
  });

  test('Testing map()', () => {
    const resultArray =
      new CaptainArray([1, 4, 5, 7, 5, 4, 2]).map(n => n * 2);

    logger.debug('resultArray: ' + resultArray.toArray());
    expect(resultArray.toArray()).toEqual([2, 8, 10, 14, 10, 8, 4]);
  });

  test('Testing concat()', () => {
    const initialArray = [0, 1, 2];
    const arrayToAdd = [3, 4];
    const result = new CaptainArray(initialArray).concat(arrayToAdd);

    logger.debug('result: ' + result.toArray());
    expect(result.toArray()).toEqual([0, 1, 2, 3, 4]);
  });

  test('Testing count()', () => {
    const count = sampleCaptainArrayNumber.count();
    logger.debug('count: ' + count);

    expect(count).toBe(sampleArray.length);
  });

  test('Testing distinct()', () => {
    const distinctArray = new CaptainArray([1, 4, 5, 7, 5, 4, 2]).distinct();
    logger.debug('distinctArray: ' + distinctArray.toArray());
    expect(distinctArray.toArray()).toEqual([1, 4, 5, 7, 2]);
  });

  test('Testing first()', () => {
    const first = sampleCaptainArrayNumber.first();
    logger.debug('first: ' + first);
    expect(first).toBe(0);
  });

  test('Testing isEmpty', () => {
    let isEmpty = new CaptainArray([]).isEmpty();

    logger.debug('isEmpty: ' + isEmpty);
    expect(isEmpty).toBe(true);

    isEmpty = new CaptainArray(['peter', 'jhon']).isEmpty();

    logger.debug('isEmpty: ' + isEmpty);
    expect(isEmpty).toBe(false);
  });

  test('Testing last()', () => {
    const last = sampleCaptainArrayNumber.last();
    logger.debug('last: ' + last);
    expect(last).toBe(9);
  });

  test('Testing limit()', () => {
    const resultCapArray = new CaptainArray([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]).limit(4);

    logger.debug('resultCapArray: ' + resultCapArray.toArray());
    expect(resultCapArray.toArray()).toEqual([0, 1, 2, 3]);
  });

  test('Testing numberRange()', () => {
    const resultCapArray = CaptainArray.numberRange(2, 8);

    logger.debug('resultCapArray: ' + resultCapArray.toArray());
    expect(resultCapArray.toArray()).toEqual([2, 3, 4, 5, 6, 7, 8]);
  });

  test('Testing skip()', () => {
    const result = new CaptainArray([32, 'dfa', 'kkk', 'ppp', 48]).skip(3);

    logger.debug('result: ' + result.toArray());
    expect(result.toArray()).toEqual(['ppp', 48]);
  });

  test('Testing sortAsc()', () => {
    const initialArray = [84, 92, 43];
    const result = new CaptainArray(initialArray).sortAsc();

    logger.debug('result: ' + result.toArray());
    expect(result.toArray()).toEqual([43, 84, 92]);
  });

  test('Testing sortDesc()', () => {
    const initialArray = [84, 92, 43];
    const result = new CaptainArray(initialArray).sortDesc();

    logger.debug('result: ' + result.toArray());
    expect(result.toArray()).toEqual([92, 84, 43]);
  });

  test('Testing combination with numbers', () => {
    const result = new CaptainArray([1, 4, 5, 7, 5, 4, 2]) // Initializing Array
      .map(n => n * 2) // [2, 8, 10, 14, 10, 8, 4]
      .filter(n => n >= 10) // [10, 14, 10]
      .distinct() // [10, 14]
      .sum(); // 24

    logger.debug('result: ' + result);
    expect(result).toEqual(24);
  });

  test('Testing distinct() + count()', () => {
    const count = new CaptainArray([1, 4, 5, 7, 5, 4, 2]).distinct().count();
    logger.debug('count+distinct: ' + count);
    expect(count).toEqual(5);
  });

  test('Testing combination with strings', () => {
    const result = new CaptainArray(['peter', 'jhon', 'michael', 'melvin']) // Initializing Array
      .sortAsc().join(' - ');

    logger.debug('result: ' + result);
    expect(result).toEqual('jhon - melvin - michael - peter');
  });

});