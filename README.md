Captain Array
=

A Javascript utility library that works with Arrays chaining operations. It is
inspired by the [Java Streams API](https://docs.oracle.com/javase/8/docs/api/?java/util/stream/Stream.html) but only
works with arrays.

It is using a lot of functionality from the wonderful [lodash](https://github.com/lodash/lodash) library. 
It could be said that this library is kind of a lodash wrapper.

**_This is still a work in progress, no stable version has been released!_**

*Basic Samples:*

```javascript
import CaptainArray from 'CaptainArray';

const result = new CaptainArray([1, 4, 5, 7, 5, 4, 2]) // Initializing Array
        .map(n => n * 2) // [2, 8, 10, 14, 10, 8, 4]
        .filter(n => n >= 10) // [10, 14, 10]
        .distinct() // [10, 14]
        .sum(); // 24
```

```javascript
import CaptainArray from 'CaptainArray';

const result = new CaptainArray(['peter', 'jhon', 'michael', 'melvin']) // Initializing Array
      .sortAsc()
      .join(' - '); //result is equal to:'jhon - melvin - michael - peter';
```

Current operations list:

* [x] average
* [x] concat
* [x] count
* [x] distinct
* [x] filter
* [x] first
* [x] join
* [x] last
* [x] limit
* [x] map
* [x] max
* [x] min
* [x] skip
* [x] sortAsc
* [x] sortDesc
* [x] sum


Probable functionality for the near future:

* Functions related to [Java Optional](https://docs.oracle.com/javase/8/docs/api/java/util/Optional.html)
* TBD
