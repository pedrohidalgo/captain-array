import CaptainArray from '../src/CaptainArray';
import logger from '../src/misc/MyLogger';

describe('Testing CaptainArray with String values', () => {

  test('Testing Initialization, should throw InvalidArrayException', () => {
    try {
      new CaptainArray({name:'object'}).count();

      // eslint-disable-next-line
      fail('this line shouldn\'t be reached');
    } catch (ex) {
      //Testing for exception handled this way due to Babel issues dealing with inheritance on classes
      //workaround exists but I didn't have the time to fix this yet.
      logger.debug('ex.name: '+ex.name);
      expect(ex.name).toBe('InvalidArrayException');
    }
  });

  test('Testing should throw IncorrectItemsException when calling a function that expects all values to be string', () => {
    try {
      new CaptainArray(['peter', 92, 'michael']).join(',');

      // eslint-disable-next-line
      fail('this line shouldn\'t be reached');
    } catch (ex) {
      //Testing for exception handled this way due to Babel issues dealing with inheritance on classes
      //workaround exists but I didn't have the time to fix this yet.
      logger.debug('ex.name: '+ex.name);
      expect(ex.name).toBe('IncorrectItemsException');
    }
  });

  test('Testing Join', () => {
    const nativeArray = ['peter', 'jhon', 'michael'];
    const result = new CaptainArray(nativeArray).join(" - ");


    logger.debug('result: ' + result);
    expect(result).toBe('peter - jhon - michael');
  });

});