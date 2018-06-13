# 12.对象构造函数

p521-530：看过，笔记待抄。  


```js
function Coffee(roast, ounces) {
  this.roast = roast;
  this.ounces = ounces;
  this.getSize = function() {
    if (this.ounces === 8) {
      return "small";
    } else if (this.ounces === 12) {
      return "medium";
    } else if (this.ounces === 16) {
      return "large";
  }
};

  this.toString = function() {
    return "You've ordered a " + this.getSize() + " " + this.roast + " coffee.";
  };
}

var houseBlend = new Coffee("House Blend", 12);
console.log(houseBlend.toString());

var darkRoast = new Coffee("Dark Roast", 16);
console.log(darkRoast.toString()); //调用方法，并显示它返回的字符串。

// => You've ordered a medium House Blend coffee. 略。 
```

#### 对象构造函数的用途：
1. 利用代码重用
2. 确保对象一致性
3. 支持高级对象用法

#### 对象构造函数传入对象
```js
var cadiParams = {make: "GM",
                  model: "Cadillac",
                  year: 1955,
                  color: "tan",
                  passengers: 5,
                  convertible: false,
                  mileage: 12892};
var cadi = new Car(cadiParams);
function Car(params) {
  this.make = params.make;
  this.model = params.model;
  this.year = params.year;
  this.color = params.color;
  this.passengers = params.passengers;
  this.convertible = params.convertible;
  this.mileage = params.mileage;
  this.started = false;

  this.start = function() {
    this.started = true;
  };
  this.stop = function() {
    this.started = false;
  };
  this.drive = function() {
    if (this.started) {
      alert("Zoom zoom!");
    } else {
      alert("You need to start the engine first.");
    }
  };
}
```

### 对象实例
在 JS 中， 对象是一个动态的结构，无论对象包含哪些属性和方法，其类型都是 object 。不过，如果知道对象是由哪个构造函数创建的，就能获悉一些有关它的信息。  

如果使用构造函数创建一个对象，这个对象就是一个实例。  

确定对象是由哪个构造函数创建的，可以用 instanceof 来判断。  

instanceof 是运算符。

```js
var cadiParams = {make: "GM",
                  model: "Cadillac",
                  year: 1955,
                  color: "tan",
                  passengers: 5,
                  convertible: false,
                  mileage: 12892};
var cadi = new Car(cadiParams);

if (cadi instanceof Car) {
  console.log("Congrats, it's a Car!");
}
```

```js
function dogCatcher(obj) {
  if (obj instanceof Dog) {
    return true;
  } else {
    return false;
  }
}

......

for (var i = 0; i < dogs.length; i++) {
  if (dogCatcher(dogs[i])) {
    console.log(dogs[i].name + " is a dog!");
  }
}

```
或简化为
```js
function dogCatcher(obj) {
  return (obj instanceof Dog);
}
```

#### 构造函数创建的对象可以修改。且 instaceof 还是判断为 true。

### 内置构造函数

比如 Date,   
返回一个表示本地当前日期和时间的 Date 实例


```js
var now = new Date();

var dateString = now.toString(); 
// 返回一个表示日期的字符串，如"Thu Feb 06 2014 17:27:29 GMT-0800(PST)”。

var theYear = now.getFullYear();  // 年份

var theDateOfWeek = now.getDay(); // 星期几
```

传递额外的实参，创建表示任何日期和时间的日期对象
```js
var birthday = new Date("May 1, 1993");

var birthday = new Date("May 1, 1993 08:03 pm")

// 具体参阅《权威指南》
```

### 数组对象

```js
var emptyArray = new Array(); // 长度为零的空数组
emptyArray[0] = 99; // 添加元素

// 创建特定长度的数组对象
var oddNumbers = new Array(3);  // 长度为 3
oddNumbers[0] = 1;
oddNumbers[1] = 3;
oddNumbers[2] = 5;
```

数组方法：
```js
oddNumbers.reverse();// =>[5, 3, 1] 原始数组会被改变

var aString = oddNumbers.join(" - "); // => "5-3-1"

var areAllOdd = oddNumbers.every(function(x) {
  return ((x % 2) !== 0);
});
// 将一个函数作为参数；对于数组中的每个值，都调用这个函数，并判断该函数返回的值是true 还是 false。如果对于所有的元素，这个函数都返回 true ， 那么方法 every 将返回 true 。
```

以前创建数组的方法，叫作方括号表示法([])
```js
var items = new Array();
var items = [];  

// 两种方法等价
```

需要创建在`运行阶段确定的特定长度`的数组，再在该数组中添加元素时，使用构造函数很方便。  

```js
var n = getNumberOfWidgetsFromDatabase();
var widgets = new Array(n);
for(var i=0; i < n; i++) {
  widgets[i] = getDatabaseRecord(i);
}
```
