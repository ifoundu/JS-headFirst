### 将 JS 放入网页
```html
<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>Just a Generic Page</title>
<script>
setTimeout(wakeUpUser, 5000);
function wakeUpUser() {
	alert("Are you going to stare at this boring page forever?");
}
</script>
</head>
<body>
<h1>Just a generic heading</h1>
<p>Not a lot to read about here. I'm just an obligatory paragraph living in
an example in a JavaScript book. I'm looking for something to make my life more
exciting.</p>
</body>
</html>
```
此处把JS放在head中。

#### 与JAVA
JAVA 和 JS 都借鉴了C等编程语言的一些语法，除此之外，它们有天壤之别。
#### 使用 JavaScript 是创建动态网页的最佳方式吗？诸如 Flash 等解决方案怎么样？
Flash 一度是很多人开发交互式网页和动态网页的首选，但行业的发展天平正日益倾向于 HTML5 和 JavaScript.HTML5 推出后，JavaScript 已成为标准的 Web 脚本语言。很多人都在努力改善 JavaScript 的性能和效率，以及开发`扩展浏览器功能的 JavaScript API`。
#### 用途广
作为一种通用的脚本语言，JS的使用范围不再局限于浏览器，还用于从图形工具到音乐应用程序的众多应用程序中，甚至用于服务器端编程。  
#### JavaScript 是不是编译型语言吗？
脚本语言通常是解释型的，这意味着浏览器执行它遇到的每行 JS 代码。脚本语言不那么看重运行阶段性能，而更强调灵活性，因此更适合用于完成原型开发和交互式编码等任务。JavaScript 最初是解释性的，因此多年来其性能始终不那么高。然而，还有一条中间路线，即可对解释型语言进行即时编译。

  
#### Q: 本书将使用术语解释、评估和执行，在不同的上下文中，它们的含义存在细微的差别，但在本书中，它们基本是一回事。  

#### JS 历史： Q:p6,暂略

#### HTML和CSS是声明型的，JS 则要是给网页添加行为，为此需要对计算进行描述。
比如，对所有的正确答案求和，以计算用户的得分;用户单击按钮时，播放表示获胜的声音;取回我最的发布的消息，并将其放到这个网页中。

### 如何编写语句
- 创建HTML时，你通常`对文本`进行`标记`，以`指定其结构`。比如，哪里是标题，哪些是段落。  
- 使用CSS时，编写一系列规则，其中每条`规则`都`指定`了网页中的`元素`及其`样式`。
- 使用 JS 时，编写语句。每条`语句`都指定了`计算`的一小部分，而所有语句一直`给网页添加行为`。  计算值并给网页添加行为 -p37。
  - 有的语句用于“声明（用于存储值的变量）”
  - 有的作“决策”
  ```js
  var age = 25;
  var name = "Owen";  // 声明

  if (age > 14) {     // 决策
    alert("Sorry this page is for kids only");
  } else {
    alert("Welcome" + name + "!");
  }
  ```
  ### 变量和值
  JS 语句通常包含变量。变量用于存储值。  
    
  ### 变量命名
  1. 以字母、下划线或美元符号打头。
  2. 使用任意数量的字母、数字、下划线或美元符号。
  3. 不要使用任何内置关键字。
  4. 区分大小写。  
    
  ##### 以$开头的变量名通常保留于JS库;有些作者根据各种约定使用以_开头的变量名。除非有充分理由，否则不要使用这两种变量名。
   
### 表达式
要使用JS准确地表达自我，需要使用表达式。【Q:等看英文版原文】  
表达式的`结果`为`值`。  

- （数值）表达式
```js
var total = price - (price * (discount / 100));
```
`total` : 变量  
`=` ： 赋值运算符  
`price - (price * (discount / 100))` : 这是一个表达式， 也是一个数值表达式。    

- 字符表达式
```js
"Dear " + "Reader" + ","          // 将字符串相加，得到新字符串“Dear Reader,”。
"super" + "cali" + youKnowTheRest // 包含一个字符串变量
phoneNumber.substring(0,3)        // 结果：字符串
```
- 布尔表达式：结果为 true 或 false
```js
age < 14
cost >= 3.99
animal == "bear"
```

#### Q: 1000 + "108"
= 1000108. 为什么？ 1000也是字符串？不是数字？
#### 运算符=用于赋值，运算符==用于判断相等性

### 重复操作
反复执行：循环
#### while 循环
```js
while (scoops > 0) {
  document.write("Another scoop!");
  scoops = scoops - 1;
}
```
- while: 关键字
- scoops > 0 : 布尔表达式，即条件测试（简称“条件”）
- 如果条件为true，就执行{}代码块中所有的代码。并回头再次检查条件。如果条件为false，就结束循环。【只是不执行代码块吧。如果没有其他值需要判断，跳出循环;如果有，回头再次检查条件】


##### while 的工作原理
```js
var scoops = 5;
while (scoops > 0) {
  document.write("Another scoops!<br>");
  scoops = scoops -1;                     // Q:似乎都要搭配自增？
}
document.write("Life without ice cream isn't the same");
```

1. `var scoops = 5;` 将 scoops 的初始值设置为 5 ;
2. 执行 while 语句，  
2.1 `while (scoops > 0) {` 首先检查其中的条件,看看它是 true 还是 false;  
2.2 条件为 true,执行代码块  
2.2.1 `document.write("Another scoops!<br>");` 在浏览器中写入字符串"Another scoops!<br>"  
2.2.2 `scoops = scoops -1;` 将球数减1，并将结果（4）赋给 scoops  
2.3 `}` 这是代码块中的最后一条语句，返回 while 语句开头并重新开始。  
3.  再次检查条件，这次 scoops 的值为 4 ，依然大于 0 。
4.  （重复以上步骤，直到 scoops 为 0）
5. 条件为 false，不再继续循环————不执行代码块————执行它后面的语句
6. `document.write("Life without ice cream isn't the same");` 在浏览器中写入字符串  

全部代码执行完毕。  
在while语句中，使用条件来决定是否继续循环。  

### 使用 JS 进行决策
在 if 语句中使用布尔表达式来进行决策。  
仅当 if 语句的条件测试为 true 时，才会执行其代码块。  
还可以添加一个或多个 else if 语句，以执行多重检查。每条 else if 都有其代码块，该代码将在条件为 true 时执行。   
可在最后添加一条 else 语句，以处理`所有条件都不满足`的情形。

### 问答
- 代码块：从语法上说，代码块是放在花括号内的一组语句。其中所有语句都被视为一个整体，要么执行，要么都不执行。
- 条件是一个变量，且变量值为字符串：任何包含非空字符串的变量都被视为 true ，而没有设置值的变量都被视为 false 。
- 布尔值：英文 boolean 或 Boolean

### 与用户交流
#### 创建提醒框  
函数 alert：仅当要停止一切并提醒用户时
#### 直接写入文档 
  将网页视为一个文档。随时使用函数 document.write 将任何HTML和内容写入网页，这虽然很常见，简单而易掌握的网页操作方式，但通常被认为是一种糟糕的做法。  
  Q: document.write 的原理是什么？为什么用它是不好的做法？
#### 使用控制台  
  所有的 JS 环境都包含控制台，可将代码中的消息写入其中。使用函数 console.log 。可将 console.log视为杰出的故障排除工具，但用户通常看不到控制台日志，因此这并非与用户交流的有效方式。  
  P.S.: console.log 是一种简单的调试工具。可将信息写入开发人员专用的控制台。-p26【现在还是这样吗？】
  Q: 不是有效方式，但为什么还要介绍？控制台是什么？  

#### 直接操作文档
  这是最佳方式，尽量使用这种方式与网页和用户交互。使用 JS 可以访问网页，读取和修改其内容，甚至修改其结构和样式。这些都是利用浏览器的`文档对象模型`实现的。要使用文档对象模型，必须知道网页的结构，并熟悉用来读写网页的编程接口。
  【利用浏览器的`文档对象模型`直接操作文档】
### console.log 详述

其工作原理。使用它来查看代码的输出以及调试代码。 了解代码功能的极佳方式。
不应在网页的最终版本中使用它。
```js
var message = "Howdy" + " " + "partner";
console.log(message);
```
在 Chrome 右击“检查”，点击"Console",能看到结果 “Howdy partner”，同时在右边显示文件和代码所在行数 “ practice.html:14 ”。

### 问答
- 可将控制台视为具有特定功能的对象。其功能之一是写入日志，而要让控制台执行这种功能，使用语法 console.log，并将用圆括号括起的输出传递给它。【Q:一直没有直接讲控制台是什么】

- 除了写入日志外，控制台还有其他功能，但通常只用它来写入日志。日志（和控制台）还有一些高级用法，但这些用法通常随浏览器而异。请注意，所有现代浏览器都提供了控制台，但控制台并不包含在正式规范中。  

### 编写一个正式的应用程序

```js
var word = "bottles";
var count = 99;
while (count > 0) {
  console.log(count + " " + word + " of bear on the wall");
  console.log(count + " " + word + " of bear,");
  console.log("Take one down, pass it around,");
  count = count - 1;
  if (count > 0) {
    console.log(count + " " + word + " of bear on the wall.");
  } else {
    console.log("No more " + word + " of bear on the wall.");
  }
}
// 代码需要修复。
```

把这段代码放进以下 HTML 中
```html
<!doctype html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <title>whatever</title>
</head>

<body>
  <script>
   代码
  </script>
</body>

</html>
```
此处，JS 在 body 中。与书本开头放在head中不一样。 
Q: 为什么？
A: 都可以。但放在body中更好，【更符合 html 文本的读取顺序】。具体见-P32

### 将 JS 代码独立
- 剪切 JS 代码
- 新建文件 code.js
- 在 index.html 中添加指向code.js的引用  
如果需要在 script 中加入 JS 代码，必须另外增加一组script。

### 采访
- Q:注意概念 ： JS 虽然被视为脚本语言，但性能几乎能够与编译型语言媲美。
  - 脚本语言：？
  - 编译型语言：在上面有提到，但未深入。看来是要看看“编译原理”有关“编译语言”和“编译器”的知识点。
- Q:编程结构
- Q:动态类型

### 填字
- 条件句,条件语： conditional
- 表示一行 JS 代码： 语句，计算机程序指令 statement
- 3 + 4 所属的 js 语言结构：表达式 expression

# 2 编写代码 
## 开发一款战舰游戏：
定义需求
## 简化需求：
重点是设计基本代码
## 从高层次设计着手 
需要一些变量、数字和字符串，if 语句、条件测试和循环等  
在什么地方需要，需要多少  
如何整合

### 首先，需要清楚这款游戏的大致流程  
- 基本情况
- 流程图
### 细节
- 表示战舰
- 获取用户输入
  使用 prompt 函数: 显示一个对话框，其中包含一条消息以及供用户输入值的空间。 
- 显示结果/输出  
  暂时使用 alert 函数
### 编写伪代码 pseudocode
伪代码介于 JS 代码和程序的自然语言描述之间。  弄清楚程序的运行过程。
由两部分组成：  
一、 描述需要的变量，要在代码中记录哪些东西
二、 描述程序的逻辑，要创建这个游戏必须如实地实现哪些代码  
- p47
### 布尔运算符
布尔表达式有两种布尔运算符：
- 比较运算符
  - < 、>、==、===、<=、>=、!=

- 逻辑运算符  
  将两个布尔表达式合而为一，得到一个布尔结果。
  - || ： or : 至少有一个表达式为 true
  - && : and : 仅当两个表达式都为 true时，结果才为 true
  - ! : not : 当仅表达式为 false 时，结果才为 
  - 可编组：用括号
  ```js
   in stock == true && (on sale == true || price < 60)
  ```

  ### 游戏代码
```js
var location1 = 3;
var location2 = 4;
var location3 = 5;
var guess;   // 用户输入的字符串
var hits = 0;
var guesses = 0;  // 用户输入的次数
var isSunk = false;

while (isSunk == false) {
	guess = prompt("Ready, aim, fire! (enter a number from 0-6):"); // 将用户的输入赋给变量 guess
	if (guess < 0 || guess > 6) {
		alert("Please enter a valid cell number!");
	} else {
		guesses = guesses + 1;
		if (guess == location1 || guess == location2 || guess == location3) {
			alert("HIT!");
			hits = hits + 1;
			if (hits == 3) {
				isSunk = true;   // 变量值被改变
				alert("You sank my battleship!");
			}
		} else {
			alert("MISS");
		}
	}
}
var stats = "You took " + guesses + " guesses to sink the battleship, " +
            "which means your shooting accuracy was " + (3/guesses);
alert(stats);
```

【Q: 为什么是先显示游戏并结束后，才显示 在script 上方的 h1 " play battleship " ？】

### 质量保证
质量保证（quality assurance,QA）是指对软件进行测试以找出其中的缺陷。包括不符合预期的情况或可改进的地方。
按使用步骤进行。 比如游戏。    
#### 改进举例：
```js
if (inStock == true) {
  if (onSale == true) {
    alert("buy buy buy!");
  }
}
```
用 and 运算符可改进为
```js
if (inStock == true && onSale == true) {
  alert("buy buy buy !");
}
```
可组合
```js
if (in stock == true && (on sale == true || price < 60)) {
  alert("buy buy buy!");
}
```
### 简化条件:布尔变量  
```js
if (inStock == true) {
  ...
}
```
inStock是布尔变量,本身的值就是 true 或 false。
简化为
```js
if (inStock) {   // true 或 false。
  ...
}
```
两种 都可以，第二种更简洁。

### 随机指定位置（随机指定整数）
#### JS 内置随机函数: Math.random();
随机返回 0~1（包括0，不包括1）的小数 【参考犀牛书3.1.3】    

`为得到0～4的整数`，  
需要将 Math.random 的结果乘以5（得到0～5，不包括5的数字），取整数。
到整数用到 Math.floor：向下圆整
```js
var randomLoc = Math.floor(Math.random() * 5);
```  
在 JS 中这是最常见的做法。其他语言中的做法通常也不同。  

`要生成 0～100包括100的随机数`,
可乘以100，再向下圆整。结果最大为100。  

### 问答
- 调用函数时都需要使用括号。 有时候需要给函数传递值，如使用alert时;有时不需要，如使用Math.random时。  
- 代码的语法错误会在控制台显示;有些错误不会被提示，但会导致代码不按预期运行。可尝试在代码各处使用 console.log 来显示变量的值。

### 再来一点点质量保证（测试用随机数更新的代码）

```js
var randomLoc = Math.floor(Math.random() * 5);
var location1 = randomLoc;
var location2 = location1 + 1;
var location3 = location2 + 1;

// 其他代码相同
```
这组代码是有bug的。书中讲到同时使用输入一个数字三次，可以击中战舰。后面再解决。  


### 要点总结
- 流程图：圆圈表示开始或结果，矩形表示行动，菱形表示决策点。p45
  指出决策点，要采取的措施，大致描述程序逻辑。  
- `true || false` 为 true; `true && false` 为 false 【默认倾向于true】 

# 3. 养成函数思维
代码例的问题：
- 逻辑重复的地方太多（相同的代码），如果要修改这部分代码，修改工作量大
- 犯错的可能性也就越大  
解决办法：
- 提取重复代码，提高重用(reuse)效率
【函数思维：将重复的代码交给函数】
## 函数
JS 函数让你能够给一系列代码指定名称，以便需要时反复使用它们。
```js
function bark(name, weight) {

}
```
`function` : 关键字
bark： `函数名`
()里的变量名：`形参`
包括大括号{}在内的所有代码都属于`函数体`。  
调用时括号里的值是`实参`。
实参的值被`赋给形参`。

### 练习

```js
function bark(name, weight) {
  if (weight > 20) {
    console.log(name + " says WOOF WOOF");
  } else {
    console.log(name + " says woof woof");
    }
  }

bark("juno", 20);    // > juno says woof woof // ok.
bark("scottie", -1); // > scottie says woof woof //函数没有检查体重须大于零的条件
bark("3", 0,0);      // > 3 says woof woof // 函数忽略多余的参数0
bark("4","20");      // > 4 says woof woof // 字符串"20"与数字20比较，不比20大
bark("5", 10);       // > 5 says woof woof // ok.
bark("6", 21);       // > 6 says WOOF WOOF // ok.
```

### 可以向函数传递哪些东西
调用函数时，向它传递实参。实参对应函数定义中的形参。  
通过实参传递任何 JS 值，如字符串、布尔值 或 数字。  

在函数中，每个形参都像一个变量。  【值在调用时直接传给形参】
```js
saveMyProfile("krissy", 1991, 3.81, false);

function saveMyProfile(name, birthday, GPA, newuser) {
  if (birthday >= 2004) {
    // 处理资料的代码
  }
  // 这个函数的其他代码
}
```
还可以将变量作为实参传递。【先定义变量，变量把值传给实参,实参再传给形参】
```js
var student = "kissy";
var year = 1991;
var GPA = 381/100;
var status = "exsitinguser";
var isNewUser = (status == "newuser");
saveMyProfile(student, year, GPA, isNewUser);
```

还可以将表达式用作实参：  
数字表达式和布尔表达式用作实参。
```js
var student = "kissy";
var year = 1991;
var status = "exsitinguser";

saveMyProfile(student, year, 381/100, status == "newuser");
```
`381/100`跟`3+4`一样，也是表达式。  
对于每个（数字）表达式，`先计算它的值`，再将值传给函数。  


#### 形参与实参
形参只需要定义一次，但函数会被多次调用，而且每次的实参可能不同。

### JS 按值传递实参
这意味着传递的是实参的副本。    

按值传递（pass-by-value)，这意味着每个实参的值复制给形参。  
【这是什么逻辑？因为实参的值不变吗?还真是这样。】 

Whatever happens to a parameter in the function,stays in the function.  
Whatever happens in Vegas styas in Vegas.

例外：对象。  

### 错误调用函数
- 实参不够，相应实参值为 undefined
- 实参太多，自动被忽略。（后面才介绍如何确定实参是否太多）

### 函数还可返回值
- 与函数通信：向函数传递实参
- 函数与你通信：return 语句
```js
function bake(degree) {
  var message;

  if (degrees > 500) {
    message = "I'm not a nuclear reactor!";
  } else if (degrees < 100) {
    message = "I'm not a regregerator!";
  } else {
    message = "That's a very confortable temperature for me."
    setMode("bake");
    setTemp(degree);
  }
  return message; // 将message作为函数的结果返回。
}

var status = bake(350);//被调用并返回时，作为结果返回的字符被赋给变量STATUS
```

### 实参和形参的工作原理：【自己总结】
形参，在函数里就像变量一样。函数调用时，把值赋给形参。  
实参，对应形参，可以是值，可以是变量，也可以是表达式。
实参把值传给形参，是将实参的值的副本传给形参；实参本身不受影响，在形参被函数加工时，实参的值不变。（对象是例外，后面再补充）

### 详解包含 return语句 的函数的执行过程
return 包含一个作为函数调用结果返回的值或表达式。  
跟踪执行过程，简称“跟踪 tracing”。
```js
function calculateArea(r) {               //3：实参传给形参r，函数开始执行
  var area;                               //4: 声明area
  if (r <= 0) {                           //5：检查r值，如果true，
    return 0;                             //（如果true,返回0，退出函数)
  } else {                                //6：执行子句else
    area = Math.PI * r *r;                //7：使用r值执行计算（圆的面积）并赋值给area
    return area;                          //8：返回area值到函数外，并退出函数
  }
}

var radius = 5.2;                         //1:定义变量
var theArea = calculateArea(radius);      //9+2:2-调用函数，radius作实参;9-将函数返回的值赋给 theArea

console.log("The area is :" + theArea);   //10：执行打印日志
```
【自己调整过，跟书里有些不同】    

### 问答
- 函数的命名规则与变量的一样：  
  - 有意义
  - 指出函数的作用
  - 使用驼峰法
- 形参名和实参名可以一样，但是它们实质上是不同的变量，修改形参的值不会导致实参的值发生变化。 
- 函数没有 return 语句，将返回 undefined . 【默认为undefined,但不赋值给变量时，不会输出或显示这个默认值undefined】  

### 作用域
变量的定义位置决定了其作用域。  
如果变量是在函数外声明的，就可在代码的任何地方使用它;  
如果变量是在一个函数中声明的，就只能在这个函数中使用它。  
这被称为变量的作用域 scope 。  
作用域分两种：全局(global)和局部(local)。  

如果你在网页中链接到了其他的脚本，它们将能够看到这些全局变量。—p101
只有一个全局作用域，因此加载的每个文件看到的变量都是相同的。-p108
【一个文件中的全局变量在其他链接的脚本中也是可用的。】  

`全局变量的寿命`与网页一样长。全局变量在 JavaScript 代码加载到网页之后降生，并在网页消失后死去。`重新加载`网页时，将`销毁并重新创建`所有全局变量。  
`局部变量`通常在函数结束时消失。局部变量是在函数被调用后创建的，并一直活到函数返回。“通常”是因为有一些高级技巧可稍微延长局部变量的寿命。  


当全局变量和局部变量同名时， -p104  
【局部变量会被函数优先使用，即“遮住”了全局变量。在函数外，全局变量的值没有改变。】  
它们是彼此独立的变量。  

尽量使用局部变量，  
正确地组织代码，以确保正确性、提高可维护性和遵循良好的编码风格。  
只有在迫不得已的情况下使用全局变量。  
【根本的原因在于值，在于变量代表的值，或说值的集合，值的来源。  
对值的合理使用需要局部变量】  
老徐：变量尽量是局部的，尽量跟它们的逻辑代码在一起。  

### 问答
- 形参也会遮住相应的同名全局变量。只要在函数中不使用该全局变量，遮住它就没有什么关系，但最好使用注释对这一点进行说明。  
- JS 在函数形如执行时创建所有的局部变量，而不管这些变量是否已经声明（这被称为`提升`）。  
  最好在函数开头定义变量，一来可读性更强，二来确保变量在语句执行前已定义。
- JS 对`代码的结构`要求不严。导致全局变量常常被过度使用。因为不需要规划就可直接编写代码。
- JS 提供了对象等特性，能够以`模块化`的方式组织代码。

### 函数可以放在 JS 文件的任何地方
JS 不在乎函数是在使用前还是使用后声明的。
```js
var radius = 5;
var area = circleArea(radius); // 定义前就调用函数
alert(area);

function circleArea(r) {       // 调用后才定义
  var a = Math.PI *r *r;
  return a;
}
```
浏览器分两遍读取网页：第一遍读取所有函数的定义，第二遍开始执行代码。    

### 练习:无名装置
据说是阶乘。
Q: 看不懂。 facky = facky * size 直接让人头晕。  以后看 -p110  
【相当于 i = i + 1 吗？】

### 代码整洁要求
- 在开头声明全局变量
- 浏览器实际上首先在 js 代码中找出函数【没说是相对变量还是相对别的什么】  
通常将全局变量放在开头，接着定义函数。 并将函数尽量放在一起。  
【除了函数和全局变量，还有什么？】
- 在函数开头声明局部变量：【上面已讲过类似的，提高可读性，并确保使用前正确声明了它们】

### 侦探练习
```js
var balance = 10500;                  // 存款余额，全局变量
var cameraOn = true;                  // 模拟监视器打开着

function steal(balance, amount) {     // 形参balance是局部变量，遮住全局变量
  cameraOn = false;                   // 没有 var 或其他关键字，提升为全部变量，监视器被关掉
  if (amount < balance) {
    balance = balance - amount;
  }
  return amount;                      // 返回被盗金额
  cameraOn = true;                    // 不能被执行
}

var amount = steal(balance, 1250);    // 虽然调用了balance,全局变量的值仍不变
alert("Criminal: you stole " + amount + "!");
```
重点在于全局变量 balance的值没有变。Q: 怎么样才会改变？  
前面的全局变量，比如 radius，是被计算成新的变量，如 area。

### 要点
- 函数是一种很好的代码组织方式，它创建可重用的代码块。 

# 4. 数组

字符串、数字、布尔值是基本类型。  
数组，表示多个值，按顺序排列。是一种可存储很多值的数据类型。

### 访问数组的元素：数组名[索引]  
索引从 0 开始， 每个索引都存储一个值。
```js
var scores = [60, 50, 60, 58, 54, 54, 58, 50, 52, 54]

var solution2 = scores[2];  // 第三个元素

```

### 数组的工作原理
```js
var flavors = ["vanilla", "butterscotch", "lavender", "chocolate", "cookie dough"]
```
### 访问：如上

### 修改数组元素
第4个元素被修改
```js
flavor[3]="vanilla chocolate chip";
```
### 确定数组的长度
属性是一个与数组相关联的值。后面再详细介绍。  

每个数组都有属性length，指出数组当前包含多少个元素。  
```js
var numFlavors = flavors.length; // 获取数组长度
```

### 自动造句应用程序（随机抽取数组元素进行组合）
```js
<!doctype html>
<html lang="en">
<head>
  <title>Phrase-o-matic</title>
  <meta charset="utf-8">
  <script>
  <!-- 随机抽取数组中的元素，组合在一起。-->
    function makePhrases() {
      var words1 = ["24/7", "multi-tier", "30,000 foot", "B-to-B", "win-win"];
      var words2 = ["empowered", "value-added", "oriented", "focoused", "aligned"];
      var words3 = ["process", "solution", "tipping-point", "strategy", "vision"];

      var rand1 = Math.floor(Math.random() * words1.length);
      var rand2 = Math.floor(Math.random() * words2.length);
      var rand3 = Math.floor(Math.random() * words3.length);

      var phrase = words1[rand1] + " " + words2[rand2] + " " + words3[rand3];
      alert(phrase);
    }
  makePhrases();
  </script>
</head>
<body></body>
</html>
```

`  var rand1 = Math.floor(Math.random() * words1.length);`  
0<= x <1, 0<= x*length < length  
`words1[rand1]`  
抽取元素  

### 问答
- 数组元素的数量：
受制于计算机的内存量。（浏览器只是计算机运行的众多程序之一）具体数量取决于元素的类型。数组包含的元素越多，程序的运行速度就越慢。因此大多数情况下，都应将数组的长度限制在合理范围内，如数百个元素。    
【app的用户数据那么多，是怎么处理的？是很多独立的对象？】  
- 数组中的值不必是相同的。但通常在一个数组存储相同类型的值。  如果在同一个数组中存储不同类型的值，为避免所做的事情不合理，在代码中使用该数组中的每个值之前，必须检查其类型。一般而言，在数组中存储类型相同的值时，处理起来将更容易、更安全。  

### 迭代数组
输出每个元素索引及其对应的元素：
```js
var scores = [60, 50, 60, 58, 54, 54,
              58, 50, 52, 54, 48, 69,
              34, 55, 51, 52, 44, 51,
              69, 64, 66, 55, 52, 61,
              46, 31, 57, 52, 44, 18,
              41, 53, 55, 61, 51, 44];

//
// with a while loop
//
var output;  // 在循环中使用这个变量来存储要输出的字符串【Q: 循环中的变量是全局的吗？所以在外在内都是全局？
var i = 0;  // 存储当前索引的变量

while (i < scores.length) {  //只要索引小于数组长度，就继续循环
  output = "Bubble solution #" + i + " score: " + scores[i];
  console.log(output);
	i = i + 1;                 // 再次循环前将索引+1
}
```

找出哪些口味的冰淇淋中有泡泡糖，即找出 products中的某个元素，这个元素对应 hasBubbleGum 中的 true 元素，它们的索引在数值上是一样的。 
```js
var products = ["Choo Choo Chocolate", "Icy Mint", "Cake Batter", "Bubblegum"];

var hasBubbleGum = [false,
                    false,
                    false,
                    true];

var i = 0;
while (i<hasBubbleGum.length) {
  if (hasBubbleGum[i]) {
    console.log(products[i] + " contains bubble gum.");
  }
  i = i + 1;
}
```

### for 循环 （更好的迭代方式）
把 while循环
```js
var i = 0;  

while (i < scores.length) {  
  output = "Bubble solution #" + i + " score: " + scores[i];
  console.log(output);
	i = i + 1;                 
}
```
改成
```js
for (var i = 0, i < scores.length, i = i + 1) {
  output = "Bubble solution #" + i + " score: " + scores[i];
  console.log(output);
}
```
除了把 i + 1 的代码移到 for 语句中，其他方面与 while 循环中完全相同。  

#### 改写上面查找元素的 while 循环：
```js
var products = ["Choo Choo Chocolate", "Icy Mint", "Cake Batter", "Bubblegum"];

var hasBubbleGum = [false,
                    false,
                    false,
                    true];


for (var i = 0; i<hasBubbleGum.length; i = i + 1) {
  if (hasBubbleGum[i]) {
    console.log(products[i] + " contains bubble gum.");
  }
}
```


#### 改写： 迭代输出数组 while to for 
输出每个元素索引及其对应的元素：
```js
var scores = [60, 50, 60, 58, 54, 54,
              58, 50, 52, 54, 48, 69,
              34, 55, 51, 52, 44, 51,
              69, 64, 66, 55, 52, 61,
              46, 31, 57, 52, 44, 18,
              41, 53, 55, 61, 51, 44];

//
// with a for loop
//
var output;  
for (var i = 0;  i < scores.length; i = i + 1 ) {  
  output = "Bubble solution #" + i + " score: " + scores[i];//每次循环都创建一个字符串
  console.log(output);  // => Bubble solution #0 score: 60 类推
}
```
Q: p142 分隔字符串的配对引号是什么？


#### 后递增运算符 ++
post-increment operator  
`i = i + 1`等于`i++`    
```js
for (var i = 0;  i < scores.length; i = i + 1 )
// 等于
for (var i = 0;  i < scores.length; i++ )
```
#### 后递增运算符 ++
post-decrement operator  
`i = i - 1`等于`i--`

### 找到数组中的最大值

```js
var scores = [60, 50, 60, 58, 54, 54,
              58, 50, 52, 54, 48, 69,
              34, 55, 51, 52, 44, 51,
              69, 64, 66, 55, 52, 61,
              46, 31, 57, 52, 44, 18,
              41, 53, 55, 61, 51, 44];

var highScore = 0;  // 定义新变量，初始化为零，用于存储最高得分
var output;  
for (var i = 0;  i < scores.length; i = i + 1 ) {  
  output = "Bubble solution #" + i + " score: " + scores[i];
  console.log(output);

  if (score[i] > highScore) {     // 找出最高得分，（假设）当69>68时，
    highScore = score[i];         // highScore = 69 , Q:回头再看看
  }
}

console.log("Bubbles tests: " + score.length);  //  => 36
console.log("Highest bubbles score:" + highScore); // =>69
```

### 创建空数组并在其中添加元素
之前讲过指定索引，把元素赋值给索引的方式，如下
```js
var genres = []; // 长度为零，也是一个数组“字面量” Q:什么叫字面量？
genres[0] = "Rockabilly";
genres[1] = "Ambient";
var size = genres.length;

```
这种方式在指定索引时，必须小心，如果有的索引没有指定到，漏空了，数组将是稀疏的（squarse）。  
#### 添加元素的新方式 push方法
无需指定索引  
```js
var genres = []; 
genres.push("Rockabilly");
genres.push("Ambient");
var size = genres.length;

```

### 问答

- 循环变量（如 i)仅用于迭代，循环结束后就不再需要它了。因此在for语句中声明，让代码更整洁。
- 数组实际上是一种特殊的对象，而对象可以有相关联的函数，用于操作对象。    
  在array数组中，array.push("value")，可`将 push 视为一个可对数组进行操作的函数`。元素本身是以实参的方式传递给 push , 在数组末尾添加一个新元素。
- 稀疏数组中，索引处元素为空时，值即为 undefined 。这些空值也会占用计算机内存。  
- undefined 不是字符串，不用加引号。
- 检查元素的值是不是 undefined:
```js
  if (array[i] == undefined) {
    ...
  }
```

- 前面创建的数组都是字面量，还有其他这样的语法：
```js
var myarray = new Array(3);
// 新建一个数组，其中包含3个空位置，即长度为3，但不包含任何值。
```
后面详解。  

Q:这是说“字面量”是“直接量”的意思？


### 显示数组中最大值的索引
步骤：  
1. 循环1：找出最高得分 （上面已实现）
2. 循环2：找出最高得分的索引
3. 把索引添加进新的空的数值

```js
var bestSolution = [];

for ( var i = 0; i < scores.length; i++) {
  if (scores[i] == highScore) {
    bestSolutions.push[i];
  }
}

console.log("Solutions with the highest score: " + bestSolutions);
```
console.log 直接显示整个数组（在控制台）。  
如果要逐一显示数组元素，可再创建一个循环。

```js
var bestSolution = [];

for ( var i = 0; i < scores.length; i++) {
  if (scores[i] == highScore) {
    var j = 0;
    bestSolutions[j]=highScore;
    j++;

  }
}

console.log("Solutions with the highest score: " + bestSolutions);
```
#### 发现情况：对数组的不同显示

书里写着，数组的输出竟然是没有方括号的。
```js
console.log("Solutions with the highest score: " + bestSolutions); 
// => Solutions with the highest score: 11, 18 
```
 
但书里是在浏览器环境测试代码的，换到node终端再试一下。
于是，把代码放到 js 文件上到终端运行。 结果也是一样。  
于是，再单独打印 bestSolutions ，这里显示数组格式了。

```js
console.log(bestSolutions); // => [ 11, 18 ]
```

Q:是否 console.log 在 进行 + 运算时，把数组转换为 字符串了？

集中对比：
```js
// (省略其他代码)
console.log("Solutions with the highest score: " + bestSolutions); 
// => Solutions with the highest score: 11, 18 
console.log(bestSolutions); // => [ 11, 18 ]
```



### 快速审视代码

#### 代码重构
重构 refactor，指的是在不改变代码功能的情况下，对其进行重新组织，使其更易于理解和维护。换句话说，重构后代码的功能与以前完全相同，但组织更加有序。  

#### 整段代码合起来
找出最大值元素，显示最大值对应的索引：
```js
var scores = [60, 50, 60, 58, 54, 54,
    58, 50, 52, 54, 48, 69,
    34, 55, 51, 52, 44, 51,
    69, 64, 66, 55, 52, 61,
    46, 31, 57, 52, 44, 18,
    41, 53, 55, 61, 51, 44];

//
// find the highest score(s)
//
var highScore = 0;  
var output;  
for (var i = 0;  i < scores.length; i++) {  
  output = "Bubble solution #" + i + " score: " + scores[i];
  console.log(output);

  if (score[i] > highScore) {     
    highScore = score[i];         
  }
}

console.log("Bubbles tests: " + scores.length);
console.log("Highest bubble score: " + highScore);

//
// find the best solution
//
var bestSolutions = [];
for (var i = 0; i < scores.length; i++) {
  if (scores[i] == highScore) {
    bestSolutions.push(i);
  }
}
console.log("Solutions with the highest score: " + bestSolutions);
}
```

`函数重构`:  
- 自己的重构过程：  
思考了一下为什么要改成函数，是为了复用，以及使用代码的方便;那么，是把一段实现某个功能的代码集中到函数里，用函数名来调用。照这个思路把实现功能的整段代码都先复制进函数体内;一开始先不想形参的问题，因为也可能不用形参。复制完，看着代码发现数组可以做形参。但没有想到返回值的事情，因为潜意识里觉得 console.log就是输出值。这是错的。console.log只是把结果打印出来给人看，给函数用的应该是从 return 输出。 

- 书中的重点步骤是：
1. 要给函数传递哪些地实参
2. 是否要返回值
```js

function printAndGetHighScore(scores) {    // scores 是形参，不是全局变量，不是数组名。
  var highScore = 0;  
  var output;  
  for (var i = 0;  i < scores.length; i++) {  
    output = "Bubble solution #" + i + " score: " + scores[i];
    console.log(output);

    if (scores[i] > highScore) {     
      highScore = array[i];         
    }
  }

  return highScore;
}



function getBestResults(highScore,scores) {
  var bestSolutions = [];
  for (var i = 0; i < scores.array.length; i++) {
    if (scores[i] == highScore) {
    bestSolutions.push(i);
    }
  }
  return bestSolutions;
}


var highScore = printAndGetHighScore(scores);
console.log("Bubbles tests: " + scores.length);
console.log("Highest bubble score: " + highScore);  // 等调用了highScore所在的函数才打印

var bestSolutions = getBestResults(highScore, scores);
console.log("Solutions with the highest score: " + bestSolutions);

```
Q：如果getBestResults要改成柯里化，要怎么改？

### 平行数组
在拥有相同长度的不同的数组里，同样的索引处的值是相对应的。  

costs数组的成本元素的索引也是配方号，对应 scores 里的得分。

要找出性价比最高的配方，就是说得分最高而成本（率）最低的。  
换句话说，就是成本较低

```js

var scores = [60, 50, 60, 58, 54, 54,
    58, 50, 52, 54, 48, 69,
    34, 55, 51, 52, 44, 51,
    69, 64, 66, 55, 52, 61,
    46, 31, 57, 52, 44, 18,
    41, 53, 55, 61, 51, 44];

var costs = [.25, .27, .25, .25, .25, .25, .33, .31,  // 百分比。默认配方的
             .25, .29, .27, .22, .31, .25, .25, .33, 
             .21, .25, .25, .25, .28, .25, .24, .22,
             .20, .25, .30, .25, .24, .25, .25, .25, 
             .27, .25, .26, .29];

function getMostCostEffectiveSolution(scores, costs, highscore) {
  for ( var i = 0; i < scrores.length; i++ ) {
    
    var cost = 100;    // 找最小时时初始化一个较大的数，找最大值时初始化为零，如 highscore。
    if (score[i] == highScore) {
      if (cost > costs[i]) {   // 要找costs[i]最小的值，因此表达式是cost > costs[i]
        var index = i;
        cost = costs[i];   // cost 值总是被重新（赋值）成元素里的值。这“=”不是定义变量时的“=”，左右是循环里的“=” 。 Q:回头再看看
      }
    }
  }
  return index;

}
var mostCostEffective = getMostCostEffectiveSolution(score, costs, highscore);
console.log("Bubble Solution #" + mostCostEffective + " is the most cost effective");
```

使用前面的bestSolution函数：

```js
function getMostCostEffectiveSolution(costs, bestSolution) {
  for (var i = 0; i < bestSolution.length; i++) {
    var j = bestSolution[i];

    var cost = 100;
    if (cost > costs[j]) {  // 自己用了 while。要决策（比较出结果），得用 if 。
      cost = costs[j];
      var index = j;
    }
  }
  return index;
}
```

教材配套的代码答案：参考命名
```js
function getMostCostEffectiveSolution2(bestSolutions, costs) {
	var cost = 100;
	var solutionIndex;
	var lowCostIndex;

	for (var i = 0; i < bestSolutions.length; i++) {
		solutionIndex = bestSolutions[i];
		if (cost > costs[solutionIndex]) {
			lowCostIndex = solutionIndex;
			cost = costs[solutionIndex];
		}
	}
	return lowCostIndex;
}
```

但是，万一成本率最低的配方，得分不是最高的，有可能是成本率与得分的乘积最高。那这样做就不对了。
Q:想好了回头来看要不要写代码。

### 要点
- 试图访问不存在的元素将返回 undefined。  
  之前在问答里说到 访问[-1]或超过数组长度的索引时，都是返回 undefiend。   
  【想像一个数组的元素的可见索引是在0到长度-1，其他位置（小于1，大于等于长度的位置），是不可见的，因为不可见也没有赋值，所以这些位置没有赋值，也就返回undefined的了。】
- 给既有元素赋值将修改元素。  
  【想像成是 var 声明的变量】
- 给不存在的元素赋值将在数组中新建一个元素。  
Q: 如果给数组的 -1 索引添加值，会怎么样？

- for 循环在一条语句中包含变量初始化、条件测试和变量递增。  
- while 循环最常用于不知道需要循环多少次时，它循环到条件满足为止。 for 循环最常用于知道循环需要执行多少次时。  
  【而且 while 的条件范围可能比较大 可以用 == 。 for 可不可以用 == ，等验证。Q 】
- 函数可帮忙组织代码。organize（填字） 
- 赋值 assign （填字）

# 5. 对象
(前面四章)使用简单语句、条件、for/while 循环和函数来编写代码，这种编码方式的`过程化`程序极高,`不是面向对象`的。    
  
Q:这里的`过程化`跟函数式编程上的`面向过程`有差别吧？差别是什么？
`面向对象`编程的优势在哪里？

### 对象  
- 管理复杂代码
- 理解浏览器对象模型和组织数据的关键
- 组织数据
- 是很多 JS 库的基本组织方式

### 属性

### 创建对象
创建一个包含一系列属性的对象，并将其赋给了一个变量，以便使用它来访问和修改这个对象的属性。  
可以传递这个对象、获取其中的值、修改其中的值、添加属性或删除属性。

#### 对象类型的格式
- 属性名：遵循变量名的命名规则
- 不重名
- 属性名有空格时，必须用引号
- 分号结束

### 面向对象
面向对象编程中，从对象的角度考虑问题，而对象有状态和行为。  
【函数式编程可不可以看作是把行为或过程封装在函数对象里，通过函数对象来调用行为或过程。可以看成既是面向对象也是面向过程，吗？】 

【怎么修改属性名？可以把对象当作数组一样，先用索引读取“名值对”吗？然后再修改整个“名值对“。  
有没有办法直接修改属性名？但好像没有必要？没有应用的场景？应该直接在代码里手动修改而已？】  

### 对象的工作原理
```js
var fiat = {
  make: "Fiat",
  model:  "500",
  year: 1957,
  color:  "Medium Blue",
  passengers: 2,
  convertible:  false,
  mileage:  88000
};    // 分号结束
```

#### 访问对象
- 句点表示法
  如， `fiat.mileage`
  可以在任何表达式中使用属性

#### 修改属性
将一个新值赋给属性即可。
```js
fiat.mileage = 10000;
```

#### 添加新属性
指定新属性并给它赋值。自动添加到对象中的最后一位。  
也就是说，添加的属性名在对象里原来是不存在的；如果存在，变成修改了原有的属性值。
```js
fiat.needsWashing = true; 
```

#### 将属性用于计算
像使用变量（或值）一样使用它们。  
```js
if (fiat.year < 1965) {
  classic = true;
}
for (var i = 0; i < fiat.passengers; i++) {
  addPersonToCar();  // 当车上乘客数小于对象中的载客数，则一直可以增加人数
}
```


