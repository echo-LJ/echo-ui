#### Types
>1. 基本类型：直接存取
  * string
  * number
  * boolean
  * null
  * undefined
  * symbol 类型不能完全polyfilled，所以请谨慎使用
  ```js
    const foo = 1;
    let bar = foo;
    bar = 9;
    console.log(foo, bar); // => 1, 9
  ```
>2. 复杂类型: 通过引用的方式存取
  * object
  * array
  * function
  ```js
    const foo = [1, 2];
    const bar = foo;
    bar[0] = 9;
    console.log(foo[0], bar[0]); // => 9, 9
  ```
#### References
>1. 使用const申明引用类型，避免使用var
>2. 如果必须对引用类型重新赋值，使用let而非var
>3. 注意let和const都是块级作用域

#### Objects
>1. 使用字面值创建对象：

  ```js
    // bad
    const item = new Object();

    // good
    const item = {};
  ```
>2. 创建对象的动态属性时，使用计算属性

 ```js
    function getKey(k) {
      return `a key named ${k}`;
    }

    // bad
    const obj = {
      id: 5,
      name: 'San Francisco',
    };
    obj[getKey('enabled')] = true;
    
    // good
    const obj = {
      id: 5,
      name: 'San Francisco',
      [getKey('enabled')]: true,
    };
  ```
>3. 使用对象方法的简写形式
  ```js
   // bad
    const atom = {
      value: 1,

      addValue: function (value) {
        return atom.value + value;
      },
    };

    // good
    const atom = {
      value: 1,

      addValue(value) {
        return atom.value + value;
      },
    };
  ```
>4. 使用属性值简写形式
  ```js
    const lukeSkywalker = 'Luke Skywalker';
    // bad
    const obj = {
      lukeSkywalker: lukeSkywalker,
    };

    // good
    const obj = {
      lukeSkywalker,
    };
  ```
>5. 对象声明时分类简写和非简写的属性名
  ```js
    const anakinSkywalker = 'Anakin Skywalker';
    const lukeSkywalker = 'Luke Skywalker';
    // bad
    const obj = {
      episodeOne: 1,
      twoJediWalkIntoACantina: 2,
      lukeSkywalker,
      episodeThree: 3,
      mayTheFourth: 4,
      anakinSkywalker,
    };

    // good
    const obj = {
      lukeSkywalker,
      anakinSkywalker,
      episodeOne: 1,
      twoJediWalkIntoACantina: 2,
      episodeThree: 3,
      mayTheFourth: 4,
    };
  ```
>6. 只有对那些不合法的属性名标识符添加引号
  ```js
    // bad
    const bad = {
      'foo': 3,
      'bar': 4,
      'data-blah': 5,
    };

    // good
    const good = {
      foo: 3,
      bar: 4,
      'data-blah': 5,
    };
  ```
>7. 不要直接使用Object.prototype上的方法，例如hasOwnProperty, propertyIsEnumerable, 和 isPrototypeOf。
  ```js
    // bad
    console.log(object.hasOwnProperty(key));

    // good
    console.log(Object.prototype.hasOwnProperty.call(object, key));

    // best
    const has = Object.prototype.hasOwnProperty; // cache the lookup once, in module scope.
    /* or */
    import has from 'has'; // https://www.npmjs.com/package/has
    // ...
    console.log(has.call(object, key));
  ```
>8. 浅拷贝对象时推荐使用对象展开操作（object spread operator）而不是Object.assign。使用对象剩余操作符（object rest operator）获取对象中剩余的属性。
  ```js
   // very bad
    const original = { a: 1, b: 2 };
    const copy = Object.assign(original, { c: 3 }); // this mutates `original` ಠ_ಠ
    delete copy.a; // so does this

    // bad
    const original = { a: 1, b: 2 };
    const copy = Object.assign({}, original, { c: 3 }); // copy => { a: 1, b: 2, c: 3 }

    // good
    const original = { a: 1, b: 2 };
    const copy = { ...original, c: 3 }; // copy => { a: 1, b: 2, c: 3 }

    const { a, ...noA } = copy; // noA => { b: 2, c: 3 }
  ```