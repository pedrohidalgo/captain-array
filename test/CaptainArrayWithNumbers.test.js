import CaptainArray from '../src/CaptainArray';
import logger from '../src/misc/MyLogger';

describe('Testing CaptainArray with Number values', () => {

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

  test('Testing average()', () => {
    const average = new CaptainArray([1, 4, 5, 7, 5, 4, 2]).average();
    logger.debug('average: '+average); //there is 7 elements and they sum 28 so average = 4
    expect(average).toBe(4);
  });

  test('Testing max()', () => {
    const result = new CaptainArray([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]).max();

    logger.debug('result: ' + result);
    expect(result).toBe(9);
  });

  test('Testing min()', () => {
    const result = new CaptainArray([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]).min();

    logger.debug('result: ' + result);
    expect(result).toBe(0);
  });

  test('Testing sum()', () => {
    const result = new CaptainArray([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]).sum();

    logger.debug('result: ' + result);
    expect(result).toBe(45);
  });
});