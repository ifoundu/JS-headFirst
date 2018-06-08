# 10.函数

函数的定义方式一共有两种：
之前常用的是`函数声明`：
```js
function quack(num) {
  for (var i = 0; i < num; i++) {
    console.log("Quack!");
  }
}
```
quack 可引用和调用函数。  

函数表达式：  
```js
var fly = function(num) {
  for (var i = 0; i < num; i++) {
    console.log("Flying!");
  }
};

fly(3);
```
该表达式的结果是一个值。  
将这个值赋给变量 fly ，然后调用了它，在此它肯定是一个指向函数的引用。  

### 函数声明和函数表达式的区别

它们存在根本性差别  
首先，需要研究浏览器在运行阶段如何处理代码。  

1.  分析网页期间（执行任何代码之前），浏览器查找函数声明。  

遇到变量声明或函数表达式时，会暂时忽略。
```js
var migrating = true;   // 暂被忽略

var fly = function(num) {  // 暂被忽略
  for (var i = 0; i < num; i++) {
    console.log("Flying!");
  }
};

function quack(num) {  // 函数声明，优先处理
  for (var i = 0; i < num; i++) {
    console.log("Quack!");
  }
}

if (migrating) {        // 暂被忽略
  quack(4);
  fly(4);
}

```

找到函数声明时时，浏览器创建相应的函数，将`函数引用`赋给与函数`同名的变量`。比如，会创建一个`名为 quack 的变量`来存储指向这个函数的引用。


2. 浏览器执行代码
  处理所有的函数声明后，浏览器回到代码开头，开始按`从头到尾`的顺序执行代码。  

```js
var migrating = true;   //1. 定义变量，值为 true

var fly = function(num) {  // 2. 定义变量 fly，创建一个指向函数的引用 ，将这个引用赋给变量 fly
  for (var i = 0; i < num; i++) {
    console.log("Quack!");
  }
};

function quack(num) {       // 5. 因为 if 里调用了 quack，传入实参副本后
  for (var i = 0; i < num; i++) {   // 6. 执行函数体
    console.log("Flying!");
  }
}

if (migrating) {           // 3. 执行 if 语句，条件为 true，继续
  quack(4);                // 4. 调用函数 quack ，变量 quack 是函数 quack 的引用, 并将实参 4 的副本传给 num 形参
  fly(4);                  // 6. 调用 fly
}

```

结论：
- 在处理其他代码之前，先处理函数声明
- 函数表达式随其他代码一起被处理
- 函数声明不返回指向函数的引用;而是创建一个与函数同名的变量，并将指向函数的引用赋给它。**
- 函数表达式返回一个引用，该引用指向函数表达式创建的函数
- 可在变量中存储指向函数的引用
- 函数声明是完整的语句，而`函数表达式`只是`语句的一部分`。  
- 对于函数声明和函数表达式创建的函数，用`相同的方式`处理调用它们的语句。

关于 `函数表达式`只是`语句的一部分`：  
在-p433中说到：在（以下）语句的`右边`，是一个函数表达式。

```js
var fly = function(num) {      // 语句的右边，是一个函数表达式。
  for (var i = 0; i < num; i++) {
    console.log("Quack!");
  }
};
```

也就是说，函数表达式的指的是 没有函数名的这部分。

```js
          function(num) {      
  for (var i = 0; i < num; i++) {
    console.log("Quack!");
  }
};
```

### 问答

- 结果为一个值的任何东西都是`表达式`。 `3 + 4` 的结果为 7，`Math.random() * 6`的结果是一个随机数，而`函数表达式`的结果是一个`引用`。 

- 函数声明为何不是表达式？  
`函数声明是一条语句`。可以认为它包含一条`隐藏的赋值`语句，这条语句将函数`引用`赋给一个`变量`。`函数表达式`不自动将函数引用赋给任何变量，你必须`显式`地这样做。 

- 让变量指向一个函数能带来的好处：  
  可以使用它来调用相应的函数：  
  ```js
  myFunctionReference();
  ```
  还可以将函数引用`传递`给函数或从函数`返回`函数引用。


#### 函数声明和函数表达式的区别
1. 使用函数声明时，函数将在执行前创建；而使用函数表达式时，在运行阶段执行代码时创建。
2. 与函数命名相关：使用函数声明时，将创建一个与函数同名的变量，并让它指向函数; 而使用函数表达式时，通常不给函数指定名称。  因此，你要么在代码中将函数赋给一个变量，要么以其他方式使用函数表达式。后面会讲到。  

### 函数怎么也是值呢？  
将函数视为调用的东西，也可将函数视为值。 
这个值实际上是指向函数的引用。
无论使用函数声明还是函数表达式来定义函数，得到的都是指向这个函数的引用。

【意思就是，何为“值”，是“规定”好的。其实这里应该说的是，为什么函数声明不是“值”？  我觉得语句可以看作是命令，而函数声明也就是命令。把一个值赋给一个变量，创建了关联。过程中程序执行了动作。而表达式是等待施加命令的对象，这种就是值。】



对于`函数`，可执行的`最简单的操作`之一是将其`赋给变量`。如下所示：
```js

function quack(num) {       // 函数声明自动地引用赋给与函数同名的变量，这里是 quack。
  for (var i = 0; i < num; i++) {  
    console.log("Flying!");
  }
}



var fly = function(num) {    // 使用函数表达式，必须显式地将得到的引用赋给一个变量。这里将引用存储到了变量 fly 中。
  for (var i = 0; i < num; i++) {
    console.log("Quack!");
  }
};


var superFly = fly;
superFly(2);  // 将 fly 赋给变量 superFly 后，superFly 存储了相应的函数引用，因此可以用 superFly 调用相应函数

var superQuack = quack;  // quack 存储的也是函数引用，因此可以将它赋给变量 superQuack，进而通过这个变量来调用相应函数。
superQuack(3);

```

【值可以在变量间传递】  

#### 请将函数视为值，就像数字、布尔值、字符串和对象一样。相比于上述其他值，函数值的不同之处在于我们可以调用它。  

### 函数是一等值
在传统的编程语言中，函数就是函数，可以声明和调用它们，仅此而已。  

在 JS 中，函数是值，是可赋给变量的值。对于其他类型的值，如数字、布尔值、字符串和对象，可对其做各种事情。例如将它们传递给函数，从函数返回它们，甚至将它们存储在对象或数组中。  
实际上，对于这些类型的值，计算机科学家使用了一个术语———一等值。对于一等值，你哈哈哈以做如下事情：
- 将其赋给变量或存储在数组和对象等数据结构中。
- 将其传递给函数。
- 从函数中返回它们。

对于函数，也可以做上述所有事情。事实上，在 JS 中，对其他值可以做的事情，也都可以对函数做。因此，在 JS 中，函数与你知道的各种值一样，也是一等值。  

`一等值`的正规定义：
在编程语言中，可像对待其他任何值一样对待的值，包括`赋给变量`、`作为实参传递给函数`以及从`函数中返回`。

### 向函数传递函数

检查乘客列表，是否有乘客在禁飞名单上，是否已买票，以及打印乘客名单。  

```js
var passengers = [ {name: "Jane Doloop", paid: true },
                   {name: "Dr. Evel", paid: true},
                   {name: "Sue Property", paid: false },
                   {name: "John Funcall", paid: true }

];
// 表示乘客的数据结构：数组。 属性 name 是简单的文本字符串。 属性 paid 是布尔值。共有四个元素代表四乘客。每个乘客都由一个包含属性 name 和 paid 的对象表示。



function processPassengers(passengers, testFunction) { // 两个形参，乘客数组 和 判断条件函数
  for (var i = 0; i < passengers.length; i++) {
    if (testFunction(passengers[i])) {  // 乘客在名单上或未买票 为 true
      return false;                     // 返回 false，乘客未能通过测试
    }
  }
  return true;
}

function checkNoFlyList(passenger) {  // 参数是一位乘客（一个对象），不是对象数组
  return (passenger.name === "Dr. Evel");
}

function checkNotPaid(passenger) {
  return (!passenger.paid);           // 没买票则返回true
} 

// 整合
var allCanFly = processPassengers(passengers, checkNoFlyList);
// 向函数传递函数，只需将函数名用作实参即可

if (!allCanFly) {
  console.log("The plane can't take off: we have a passenger on the no-fly-list.");
}

var allPaid = processPassengers(passengers, checkNotPaid); 
if (!allPaid) {
  console.log("The plane can't take off：not everyone has paid.");
}


// 将乘客姓名以及是否已买票的信息打印到控制台
// 自己改的
function printPassenger(passenger) {
  var message = passenger.name;
  if (passenger.paid) {
    console.log(message + " has paid.");
  } else {
    console.log(message + " has not paid.");
  }
}
    
processPassengers(passengers, printPassenger);
```

```js

// 将乘客姓名以及是否已买票的信息打印到控制台
// 书里答案
function printPassenger(passenger) {
  var message = passenger.name;
  if (passenger.paid === true ) {
    message = message + " has paid.";
  } else {
    message = message + " has not paid.";
  }

  console.log(message);
  return false; // 这个返回值没多大意义，因为在 processPassengers 中没有考虑这个返回的结果
}
    
processPassengers(passengers, printPassenger);
```

### 问答
- 难道不能将这些代码都放在processPassengers中吗？ 我们可以在一次迭代中执行所有检查，从而一次性完成所有的检查并打印乘客清单。这样效率不是更高吗？
  追求的是`灵活性`。如果以后要在既有的函数中不断地添加检查，前面采用的设计可降低`修改或增添的复杂性`,减少在代码中引入 bug 的可能性。

### 从函数返回函数
为何 以及 在什么情况下要 从函数返回函数  

```js
// 添加属性 ticket 
var passengers = [ {name: "Jane Doloop", paid: true, ticket: "coach" },
                   {name: "Dr. Evel", paid: true, ticket: "firstclass" },
                   {name: "Sue Property", paid: false ticket: "firstclass" },
                   {name: "John Funcall", ticket: "coach" } ];


// 根据机票类型提供不同的饮料
function serveCustomer(passenger) {
  // 让乘客点饮料

  if (passenger.ticket === "firstclass") {
    alert("Would you like a cocktail or wine?");
  } else {
    alert("Your choice is cola or water.");
  }
  // 让乘客点餐
  // 清理垃圾
}

```

做法之一：把乘客点饮料的逻辑跟其他逻辑放在一起。

```js
// 根据机票类型提供不同的饮料
function serveCustomer(passenger) {
  // 让乘客点饮料
  if (passenger.ticket === "firstclass") {
    alert("Would you like a cocktail or wine?");
  } else {
    alert("Your choice is cola or water.");
  }

  // 让乘客点餐
  // 清理垃圾
}

```

但这样做的缺点是，问题更复杂时，需要处理的因素越多，如乘客分类增多，饮料种类更多且随机机场而异，函数将变得很大。它除让乘客点饮料外，还需处理很多与供应的饮料类型相关的问题。   
设计函数时有一个不错的经验规则，就是`只让每个函数做一件事，并把这件事做好`。 

做法之二：把点饮料的`逻辑独立`到一个函数中

```js
// 根据机票类型提供不同的饮料
function createDrinkOrder(passenger) {
  if (passenger.ticket === "firstclass") {
    alert("Would you like a cocktail or wine?");
  } else {
    alert("Your choice is cola or water.");
  }
}

// 在函数 serveCustomer 中调用这个函数
function serveCustomer(passenger) {
  createDrinkOrder(passenger);  // 将传递给 serveCustomer 的 passenger 传递给函数 creatDrinkOrder。
  // 让乘客点餐
  // 清理垃圾
}

```

代码可读性提高，代码易于找到，修改也很方便

### 想办法避免不必要的重复

由于在航班上需要多次供应饮料，如果按上面的做法二，需要多次调用
```js
function serveCustomer(passenger) {
  createDrinkOrder(passenger);  

  // 让乘客点餐
  createDrinkOrder(passenger);   // 虽然只需要调用，但是每次调用都重新乘客的类型，这是不必要的
  createDrinkOrder(passenger);  
  // 播放电影
  createDrinkOrder(passenger);  
  // 清理垃圾
}
```
在实际程序中，如果需要在移动设备中与 Web 服务通信，以检查机票类型，结果将是耗时而昂贵的。  

### 先了解 函数返回函数 的原理
```js
function addN(n) {            // 这个函数接受一个参数 n 。 它创建并返回一个这样的函数：
  var adder = function(x) {   // 也接受一个参数 x ，并返回 n 与 x 的和。
    return n + x;
  };
  return adder;
}

var add2 = addN(2);       // 可使用它来创建一个总是将传入的数字加上 2 的函数
console.log(add2(10));
console.log(add2(10));
```

### 使用 函数返回函数 来改进乘客点饮料函数
具体的计划如下：对于每位乘客，不多次调用 creatDrinkOrder ，而是只调用它一次，并让它返回一个知道如何让这位乘客点饮料的函数。  
这样，每当需要让乘客点饮料时，都只需调用这个函数即可。  

```js

var passengers = [ {name: "Jane Doloop", paid: true, ticket: "coach" },
                   {name: "Dr. Evel", paid: true, ticket: "firstclass" },
                   {name: "Sue Property", paid: false ticket: "firstclass" },
                   {name: "John Funcall", ticket: "coach" } ];


// 返回一个知道如何让乘客点饮料的函数

function createDrinkOrder(passenger) {
  var orderFunction;

  if (passenger.ticket === "firstclass") {   // 条件代码只会执行一次
    orderFunction = function() {              // 如果乘客是头等舱，将‘创建’这个函数
      alert("Would you like a cocktail or wine?");
    };
  } else {
    orderFunction = function() {              // 如果乘客是经济舱，将‘创建’这个函数
      alert("Your choice is cola or water.");
    };
  }

  return orderFunction;     // 返回创建的函数
}


// 改写函数 serviceCustomer
function serveCustomer(passenger) {
  var getDrinkOrderFunction = createDrinkOrder(passenger); // 返回一个函数（如上）
  getDrinkOrderFunction();   // 调用上一行返回的函数

    // 让乘客点餐
  getDrinkOrderFunction();   // 
  getDrinkOrderFunction();  
  // 播放电影
  getDrinkOrderFunction();  
  // 清理垃圾
}


// 使用迭代， 也是开始执行全部函数的调度  (像前面检查乘客是否在禁飞名单和是否买票了的函数一样)
function servePassengers(passengers) {
  for (var i = 0; i < passengers.length; i++) {  // 迭代乘客数组
    serveCustomer(passengers[i]);  // 对每一位乘客调用上面定义的函数
  }
}

servePassengers(passengers);  
```

网页显示的返回结果如下：
```
Your choice is cola or water.
Your choice is cola or water.
Your choice is cola or water.
Your choice is cola or water.  // 重复4次

Would you like a cocktail or wine?
Would you like a cocktail or wine?
Would you like a cocktail or wine?
Would you like a cocktail or wine?

Would you like a cocktail or wine?
Would you like a cocktail or wine?
Would you like a cocktail or wine?
Would you like a cocktail or wine?

Your choice is cola or water.
Your choice is cola or water.
Your choice is cola or water.
Your choice is cola or water.
```
重复4次，因为调用4次，但是为什么同个乘客的结果集中在一起？   
Q： 留着后面找答案  

如果只调用1次，结果如下：
```
Your choice is cola or water.
Would you like a cocktail or wine?
Would you like a cocktail or wine?
Your choice is cola or water.
```

### 问答
- 每次只对一位乘客调用函数 serveCustomer？  
  Q: 不是只对一位乘客调用吧？每一位都有调用啊。再了解。  

### 数组方法 sort 的工作原理
将`数字数组`按`升序`排列. 

sort 方法接收一个函数，函数中对数字进行比较，  
在第一个数字`大于`第二数字时返回一个`大于0`的值，在它们`相`等时返回`0`，并在第一个数字小于第二个数字时返回一个小于0的值。

理解原理
```js
function compareNumbers(num1, num2) {
  if (num1 > num2) {
    return 1;
  } else if (num1 === num2) {
    return 0;
  } else {
    return -1;
  }
}
```

实际运用
```js
function compareNumbers(num1, num2) {
  return num1 - num2;  // 返回大于0的值，或 0 ， 或 小于0的值
}
```

整合
```js
var numbersArray = [60, 50, 62, 58, 54, 54];
numbersArray.sort(compareNumbers); // 大于0时把左边项放在数组靠右边
console.log(numbersArray);   // 还是原来的数组名
```

再整理一下
```js
var numbersArray = [60, 50, 62, 58, 54, 54];

function compareNumbers(num1, num2) {
  return num1 - num2;  
}

numbersArray.sort(compareNumbers); 
console.log(numbersArray);   

// => [50, 54, 54, 58, 60, 62]
```


注意，sort 方法是`破坏性`的， 因为它就地`修改数组`，而不是返回一个排序后的新数组。  

### 比较数组对象的属性

重点是注意使用属性进行对比
```js
function compareName(colaA, colaB) {
	if (colaA.name > colaB.name) {      // 属性
		return 1;
	} else if (colaA.name === colaB.name) {
		return 0;
	} else {
		return -1;
	}
}
```

直接参考现有的代码,  [cola.html](10-MoreAboutFunction/cola.html)

以及，继续了解 sort 的使用原理，以便更好理解其他代码。  

重新看原理那一段代码：

```js
var numbersArray = [60, 50, 62, 58, 54, 54];

function compareNumbers(num1, num2) {
  return num1 - num2;  
}

numbersArray.sort(compareNumbers); 
console.log(numbersArray);   

// => [50, 54, 54, 58, 60, 62]
```

compareNumbers 的两个参数，是数组里的元素。 sort 方法负责把数组元素传递给 compareNumbers。 compareNumbers 比较两个元素参数后，将结论通知 sort 进行排序。  

【当 `(num1, num2)` 中 与 `num1 - num2` 顺序一样时，进行升序排列。顺序相反时，进行降序排列。  
（ `num1 - num2 > 0` 时，升序排列。 `num2 - num1 > 0`时，降序排列）】

书里是说，按升序排列，`num1 - num2 > 0`，如果返回值为1，就将第一项放在第二项后面。按降序排列时，反转逻辑，即表达式写成`num2 - num1 > 0`， 让返回值表示将第二项放在第一项后面。  【看不懂】


【sort 里，默认 升序排序】