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
<em id = "锚1"></em>  

这意味着传递的是`实参的副本`。    

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

#### 删除属性
```js
delete fido.dogYears;
```
若成功删除属性，delete 表达式将返回 true。    
如果要删除的属性在对象中不存在，也会返回 true。  
仅当属性无法删除时，delete 才返回 false。比如对象属于浏览器而受到保护。


### 问答
#### 动态的添加属性
```js
var lookMaNoProps = {};
lookMaNoPros.age = 10;
if (lookMaNoPros.age > 5) {
  lookMaNoProps.school = "Elementary";
}
```
#### 对象相对变量的优势
- 对象封装了数据的复杂性，让你能够专注于代码的高层次设计，而不是细枝末节。
- 封装（隐藏）对象状态和行为的复杂性

#### 访问不存在的属性
表达式 对象名.属性名 的结果为 undefined。

### 变量是如何存储对象的
对于基础类型：数字、字符串和布尔值，变量存储这些值。  

  `引用`：一种获取特定对象的途径。  

- 变量并不实际存储对象。
- `变量存储指向对象的引用`。【变量引用对象】  
- 引用就像指针，是`对象的存储地址`
- 换句话说，变量并不存储对象本身，而是存储类似于指针的东西。
- 当我们使用句点表示法时， JS 解释器将负责根据引用获取对象并访问其属性。
【有一个地方专门存储对象的地方，变量指向对象，变量是对象的地址】   
```js
car.color;
```
访问`变量 car 引用的对象`的属性 color 。

### 比较基本类型和对象
参考上一部分 变量是如何存储对象的 即可。  
基本型是存储，对象是引用。  

### 使用对象
选车要求：
- 1960年或更早生产
- 里程 不超过10 000英里

```js
function prequal(car) {
  if (car.mileage > 10000) {    // 当 true 时，
    return false;               // 返回 false。且退出函数
  } else if (car.year > 1960) {
    return false;
  }
  return true;
}

var taxi = {
  make:"Webville Motors",
  model:"Taxi",
  year:1995,
  color:"yellow",
  passengers: 4,
  covertible: false,
  mileage: 281341
}

var worthALook = prequal(taxi);

if (worthALook) {
  console.log("You gotta check out this " + taxi.make + " " +taxi.model);
} else {
  console.log("You should really pass on the " + taxi.make + " " + taxi.model);
}

```

### 向函数传递对象的情况
【  
先回顾：   
<a href="#锚1">链接 到 基本型</a>  
基本型的按值传递：  
函数在使用的全局的存储基本型变量时，即实参传给形参时，只是传递实参的副本，不会修改实参变量的原始值。  
】  

#### `按值传递`对`对象`来说意味着什么？  
将对象赋给变量时，变量存储的是指向对象的引用，而不是对象本身。  
传递给形参 的是该引用的副本。  
形参变量和实参指向同一个对象。  
这意味着什么呢？一个最大的不同是，如果在函数中修改对象的属性，修改的将是原始对象的属性。因此，函数结束时，在函数中对对象所做的修改都依然有效。      

【  
再理解：  
传递的是引用的副本，不是对象的副本。引用和引用的副本都是指向同一个对象。将通过`引用和引用的副本`修改对象时，解释器或执行器并没有创建对象的副本，因此，修改的是原始对象。一句话，对象没有创建副本对象，对象还是那个对象。  
那么，按值传递，总的来说，  
是按 `数值大小或同异`来复制，我这个值跟你那个值是一样的。基本型的传递，是复制了另一个基本型，值一样。  
对象的传递，因为对象是存储在另一个地方，复制的是引用，是“地址”的值，指向的还是同个对象。  
】  

## 理解对象
```js
function makeCar() {
  var makes = ["Chevy","GM","Fiat","Webville Motors","Tucker"];
  var models = ["Cadillac", "500", "Bel-Air", "Taxi", "Torpedo"];
  var years = [1955, 1957, 1948, 1954, 1961];
  var colors = ["red", "blue", "tan", "yellow", "white"];
  var convertible = [true, false];

  var rand1 = Math.floor(Math.random() * makes.length);
  var rand2 = Math.floor(Math.random() * models.length);
  var rand3 = Math.floor(Math.random() * years.length);
  var rand4 = Math.floor(Math.random() * colors.length);
  var rand5 = Math.floor(Math.random() * 5) + 1;  // passenger qty
  var rand1 = Math.floor(Math.random() * 2);

  var car = {
    make: makes[rand1],
    model: models[rand2],
    year: years[rand3],
    color: colors[rand4],
    passengers: rand5,
    convertible: convertible[rand6],
    mileage: 0
  };
  return car;
}

function displayCar(car) {
  console.log("Your new car is a " + car.year + " " + car.make + " " + car.model);
}

var carToSell = makeCar();
displayCar(carToSell);
```
从函数返回对象与返回其他值没什么两样。  

### 给对象添加行为

对象是`活动的`，


```js
var fiat = {
  make: "Fiat",
  model:  "500",
  year: 1957,
  color:  "Medium Blue",
  passengers: 2,
  convertible:  false,
  mileage:  88000

  drive: function() {
    alert("Zoom zoom!");
  }
};    
```

将函数定义赋给属性。  
在函数定义中没有指定函数名。属性名就是函数名。 【Q: 那么，循环或条件的标签语句 的标签用法 就相当于属性名？又或者，只是标签只是给循环或条件增加了可调用的变量名】
对象内的函数，为方法。      

调用函数/方法 drive ，
`fiat.drive()`  

### 改进方法 drive
让 fiat 对象的行为更像汽车。启动发动机开动汽车：
- 一个布尔属性 started：用于存储汽车的状态（发动机是否开启）;
- 两个方法，分别用于启动和熄灭发动机: start, stop
- 在方法drive中检查条件，确保仅当发动机启动后才能开动汽车

```js
var fiat = {
  make: "Fiat",
  model:  "500",
  year: 1957,
  color:  "Medium Blue",
  passengers: 2,
  convertible:  false,
  mileage:  88000,
  started: false,

  start: function() {
    started = true;      // 直接使用属性名更改属性
  },

  stop: function() {
    started = false;
  },

  drive: function() {
    if (started) {
      alert("Zoom zoom!");
    } else {
      alert("You need to start the engine first.");
    }
    
  }
};    
```
【如果把start 外面的属性看作是变量，那么这些变量却是可以改变的，因为是对象里的变量/属性。所以，对象是另一个世界。在这个世界里的规则与外面的大世界的规则是不一样的。】  


`使用方法来修改属性`是另一种`封装`方式。通常可改善代码的可维护性和可扩展性。 -P200 
【方法是对象里的函数。跟一般的函数一样，方法可以提高代码的重用程度，也就是将对象的一系列行为封装在函数里，使得跟对象有关的代码可以重用。】 


### 测试对象 fiat
```js
fiat.drive();
fiat.start();
fiat.drive();
fiat.stop();
```

### 关键字 this
this: 当前所处的对象  
【严格说，应该是方法当前所在的`上一级`对象。因为 越级就没用了。】  

改进上面的方法
```js
var fiat = {
  make: "Fiat",
  ...
  started: false,

  start: function() {
    this.started = true;      // 直接使用属性名更改属性
  },

  stop: function() {
    this.started = false;
  },

  drive: function() {         
    if (this.started) {       // 已被 start 修改为 true
      alert("Zoom zoom!");
    } else {
      alert("You need to start the engine first.");
    }
    
  }
};  
```

### 测试 this
```js
var song = {
  name:"Walk This Way",
  artist: "Run-D.M.C.",
  minutes: 4,
  seconds: 3,
  genre: "80s",
  playing: false,

  play: function() {
    if (!this.playing) {   // !this.playing = !false = true
      this.playing = true;
      console.log("Playing " + this.name + " by " + this.artist);
    }
  },

  pause: function () {
    if (this.playing) {
      this.playing = false;
    }
  }
}

song.play();
song.pause();
```  
### this 的工作原理
可将 this 视为一个变量，指定其方法被`调用`的对象。【对象里的方法被调用了，this 指向这个对象】

将对象赋值给 this。

```js
var fiat = {
  make: "Fiat",
  ...
  started: false,

  start: function() {
    this.started = true;    // JS 把对象赋给 this
  }，
  ...
};  

fiat.start();               // 当我们调用方法时，
```

### 迭代对象的属性
以便知道一个对象包含哪些属性

#### for in 
以每次一个的随机的方式遍历对象的属性，并依次将每个属性赋值给变量 prop 。
```js
for ( var prop in chevy) {
  console.log(prop + ": " + chevy[prop]);  // 可以[]方括号表示法通过 prop 来访问当前属性

}
```

方括号表示法：  
`chevy["color"]`  
与句点表示法的功能是一样的。但方括号表示法更灵活，  
`chevy["co" + "lor"]`   
可将`任何表达式`放在方括号内，只要其结果表示属性名的字符串值即可。

### 行为如何影响状态

对象的属性记录对象的状态，如油位，里程。   
对象的方法实现行为，如加油，发动汽车。  
状态和行为相互影响。  

```js
// 给车加油

var fiat = {
  make: "Fiat",
  model: "500",
  //...
  started: false,
  fuel:0,               // 添加新属性，存储汽车的油量。没有油，车子就开不动。

  start: function() {   // 后面改进
    this.started = true;      
  },

  stop: function() {
    this.started = false;
  },

  drive: function() {         
    if (this.started) {
      if (this.fuel > 0) {            //  开动前检查是否有油
        alert(this.make + " " + this.model + " goes zoom zoom !");
        this.fuel = this.fuel - 1;
      } else {
        alert("Uh oh, out of fuel."); // 没油了
        this.stop();
      }
    } else {
      alert("You need to start the engine first.");
    }
    
  },

  addFeul: function(amount) {         // 添加新方法，加油，加多少只要在调用时指定
    this.fuel = this.fuel + amount;   // amount 是一个函数形参
  }

}


fiat.start();  
fiat.drive();
fiat.addFuel(2);
fiat.start();
fiat.drive();
fiat.drive();
fiat.drive();
fiat.stop();

```

改进 start

```js
// 自己写的
start: function {
  if (this.fuel > 0) {
   this.started = true;
  } else {
   alert("The car is on empty,fill up before starting.");
  }
}

// 书里答案
start: function {
  if (this.fuel == 0) {  // 注意 == 
   alert("The car is on empty,fill up before starting.");
  } else {
   this.started = true;
  }
}
```

#### 后面会讲到：
如何使用相同的代码创建完全相同的对象，而且这些代码只出现在一个地方。这将涉及如何`设计面向对象的代码`。  
（即，不用在相同的汽车对象里，重复编写 start、 stop 等代码）

### 要点
- 对象变量也叫引用变量。
- this：在对象的方法中使用对象的属性

### 英文
- 句点 dot
- 冒号 colon
- 逗号 comma
- 状态 state
- 行为 behavior
- 关键字  keyword
- 引用 reference
- 方法 method
- Q: 通常将属性名指定为一个 word 。 这里 word 指什么 ？

# 6. DOM
必须知道如何与代码所属的网页交互。只有这些，才能编写出动态网页：能够对用户操作作出响应的网页，能够在加载后自动更新的网页。与网页交互，需要使用 DOM 。  

```html
<!doctype html> 
<html lang="en">
<head>
<meta charset="utf-8">
<title>Dr. Evel's Secret Code Page</title>
</head>
<body>
<p id="code1">The eagle is in the</p>
<p id="code2">The fox is in the</p>
<p id="code3">snuck into the garden last night.</p>
<p id="code4">They said it would rain</p>
<p id="code5">Does the red robin crow at</p>
<p id="code6">Where can I find Mr.</p>
<p id="code7">I told the boys to bring tea and</p>
<p id="code8">Where's my dough? The cake won't</p>
<p id="code9">My watch stopped at</p>                 <!--有交互-->
<p id="code10">barking, can't fly without umbrella.</p> <p id="code11">The green canary flies at</p>
<p id="code12">The oyster owns a fine</p>
<script src="code.js"></script>
</body>
</html>
```

```js
// code.js
var access = 
  document.getElementById("code9");  // 指向元素。元素也是一个对象类型。
var code = access.innerHTML;         // 指向元素的内容（文本）
code = code + " midnight";           // 修改内容 
alert(code);
```
`document`是一个全局对象。
  
`document.getElementById` 返回一个 element对象：
【  
通过 id 指向一个 HTML 元素。
element 指的就是 HTML 文档里的元素吧，比如 p 。  
】
  
`innerHTML` 是元素对象的属性，指向元素的内容，即标记中间的文本。    

网页是一个动态的`数据结构`，可通过 JS 与之交互： 可以访问并读取网页中元素的内容，还可以修改网页的内容或结构。    

### JS 如何与网页交互 
JS 和 HTML 是两样不同的东西： HTML 是标记，而 JS 是代码。它们如何交互呢？这是通过网页的表示，即文档对象类型(DOM)实现的。 DOM 是浏览器在加载网页时创建的。 创建过程如下：  


- 浏览器加载网页时，不仅对 HTML 进行分析并将其渲染到显示器，还创建一系列表示标记的对象。这些对象存储在 DOM 中。
- JS 代码可通过与 DOM 交互来访问元素及其内容，还可使用 DOM 来创建或删除元素。
- JS 代码修改 DOM 时，浏览器将动态地更新网页，让用户能够在网页中看到新内容。

#### HTML 由声明式标记组成，描述一系列组成网页的嵌套元素; JS 由算法组成，用于对计算进行描述。让 JS 能够访问网页中的任何元素的是 getElementById 。

### 使用 getElementById 获取元素
document 是一个内置对象，有很多属性和方法，包括从 DOM 中获取一个元素的 getElementById。方法 getElementById `接收一个 id ，并返回该 id 指定的元素`。  


使用 getElementById 从 DOM 获取元素时，得到的是一个元素对象。  
使用它来读取、修改或替换元素的内容和特性。修改元素时，所做的修改也将反映到网页中。    

HTML 元素对象也有属性和方法。可以使用其属性和方法来读取和修改元素。  

可以对元素对象进行的操作：  
- 获取内容（文本或 HTML）
- 修改内容
- 读取特性
- 添加特性
- 修改特性
- 删除特性


```js
var planet = document.getElmentById("greenplanet");
// 变量 planet 包含一个元素对象———— id 为greenplanet的 p 元素。
planet.innerHTML = " Red alert : hit by phaser fire!";
// 可使用元素对象的属性 innerHTML 来修改元素的内容, 网页发生变化

console.log(planet.innerHTML);
```

还可以根据 类 class 来选择元素，后面会介绍。

### 问答
- 如果 id 不存在， getElmentById 将返回 null。【也就是没有接收到实参】  
  调用 getElmentById 时，检查返回的是否是 null 是个不错的主意。
- getElementsByClassName 可根据 class 获取元素集合。
- getElementsByTagName 可根据 标签名 获取元素集合。
- outerHTML 表示元素内部的 HTML 以及元素本身。用得不多。

【 innerHTML 就是内部的 超文本标记语言，因此包括 href,em,img 等内容。】 

### 处理 DOM 时，确保代码在网页完全加载后再执行。
否则 getElementsById将返回 null。浏览器按原来的文档进行渲染。  

如果查看控制台，大多数浏览器会显示错误消息。  
`Uncaught TypeError:Cannot set property 'innerHTML' of null `

比如：当代码在 head 中时
```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Planets</title>
    <script>
      var planet = document.getElmentById("greenplanet");
      planet.innerHTML = " Red alert : hit by phaser fire!";
      </script>
  </head>
  <body>
    <h1>Green Planet</h1>
    <p id="greenplanet">All is well</p>
    <h1>Red Planet</h1>
    <p id="redplanet">Nothing to report</p>
    <h1>Blue Planet</h1>
    <p id="blueplanet">All systems A-OK</p>
  </body>
</html>
``` 
=> All is well.  网页没有修改。  

修复办法之一，可将代码移动 body 元素的末尾。

另一个更简单的办法，通过代码。  

### window 对象
window 对象是 JS 内置对象，表示浏览器窗口。它指定在网页加载完毕后才执行的代码。  
它将调用你赋给其属性onload 的函数，但仅在网页加载完毕后才这样做。

- 创建一个函数，其中包含要在网页加载完毕后执行的代码。
- 将这个函数赋给对象 window 的属性 onload 。

```js
function init() {
  var planet = document.getElmentsById("greenplanet");
  planet.innerHTML = "Red alert: hit by phaser fire!";
}

window.onload = init;  // 不是调用，只是赋值
```

- 加载网页
- 创建完整 DOM
- 调用函数 init
- 【渲染网页】

#### 回调函数

假设有重大的事件（如网页加载完毕）即将发生，而你必须在其发生后第一时间获悉。对于这种情形，一种常见的处理方式是使用回调函数[callback,也叫 事件处理程序 event handler]。  

`工作原理`：  
给了解事件的对象提供一个函数;事件发生后，这个对象将通过调用这个函数来通知你。  

事件：  
- 浏览器生成的，如加载事件
- 用户与网页交互时生成的： 用户单击按钮后，需要从表单获取数据时
- JS 代码生成的

```html
<!doctype html>
<html lang="en">
  <title>My Playlist</title>
  <meta charset="utf-8">
  <script>
    function addSongs() {
      var song1 = document.getElementsById("song1");
      var song2 = document.getElementsById("song2");
      var song3 = document.getElementsById("song3");

      song1.innerHTML = "Blue Suede Strings, by Elvis Pagely";
      song2.innerHTML = "Great Objects on Fire, by Jerry JSON Lewis";
      song3.innerHTML = "I Code the Line, by Hohnny JavsScript";

    }

    window.onload = addSongs;
    </script>
  </head>
  <body>
    <h1>My awesome playlist</h1>
    <ul id="Playlist">
      <li id="song1"></li>   <!--空列表，代码将给每个 li 元素添加内容-->
      <li id="song2"></li>
      <li id="song3"></li>
    </ul>
  </body>
  </html>
```
在一个静态网页中添加代码，从而动态地修改了一个段落的内容。创建真正交互式网页的第一步。
  
第二步，用代码设置元素的特性。  

### 使用 setAttribute 设置元素的特性
元素对象有一个 setAttribute 方法，可调用它来设置 html 元素的的特性。

```js
planet.setAttribute("class", "redtext");
```
将在 html 中添加`类`特性
```html
<p id="greenplanet" class="redtext"></p>
```

接收两个实参：
- 要添加或修改的`特性`名称
- 要设置的特性`值`   

如果指定的特性不存在，将在元素中创建它。

### 获取特性

获取特性值，使用方法 getAttribute。

```js
var scoop = document.getElementsById("raspberry");
var altText = scoop.getAtrribute("alt");  // alt：图片的替代说明
console.log(altText);
```
如果指定的特性不存在，将返回 null 。

检查返回是否为 null :
```js
var scoop = document.getElementsById("raspberry");
var altText = scoop.getAttribute("alt");
if (altText == null) {                            // 检查
  console.log("Oh, I guess there isn't an alt attribute.");
} else {
  console.log(altText);
)
```

getElementsById 也会返回 null。在实践中，务必检查返回的是否为 null 。

整合修改内容和添加特性的代码：

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Planets</title>
    <style>                           <!---->
      .redtext { color:red; }
    </style>
    <script>
      function init() {
      var planet = document.getElmentById("greenplanet");
      planet.innerHTML = " Red alert : hit by phaser fire!";
      planet.setAttribute("class", "redtext");     <!---->
      }

      window.onload = init;                        <!---->
      
      </script>
  </head>
  <body>
    <h1>Green Planet</h1>
    <p id="greenplanet" >All is well</p>       <!-- 代码执行后将添加 class="redText"，段落字体将变红色--> 
    <h1>Red Planet</h1>
    <p id="redplanet">Nothing to report</p>
    <h1>Blue Planet</h1>
    <p id="blueplanet">All systems A-OK</p>
  </body>
</html>
``` 
### 要点
- 在浏览器`内部`，使用文档对象模型 DOM 来表示网页。


# 7.类型、相等、转换等

### undefined

所属类型：undefined

返回 undefined 的情况：
- 使用未初始化的变量
- 访问不存在（或已删除）的属性
- 使用不存在的数组元素

检查变量是否是未定义的
```js
var x;

if (x == undefined) {
  // 
}
```
属性是否定义
```js
var customer = {
  name: "Jenny"
}

if (customer.phoneNumber == undefined) {
  //
}
```

### 问答
- 什么情况下，需要检查变量等是否是未定义的？
  这取决于你的代码设计。如果变量等可能没有值，就需要检查。

#### typeof
是内置的 JS 运算符，可检查其操作数的类型, 返回该操作数的类型

```js
var subject = "Just a string";
var probe = typeof subject;
console.log(probe); // => string
```

```js
typeof []; // => object
typeof true; // => boolean
typeof {}; // => object
typeof function (){}    // => function
typeof null; // => object
```

### null
所属类型：object
对象不存在时的值，如果变量指向的对象不存在，也是Null（不是undefined)。
undefined 是变量、属性、数组元素不存在时的值。
null 用于表示对象不存在。

【可以这样想，undefined 表示数据的`值不存在`，null 表示`数据名和值都不存在`。   
null 分两种情况，  
一种是变量或字符串或对象不存在;  
一种是没有对象赋给变量，也就是不管有没有变量名，对象不存在，就是 null。】    

Q: 如果是数组不存在呢？应该也是null，因为数组是(特殊的)对象。

假设网站有一个天气小部件，用户可以找开它，也可以关闭它。如果用户打开了它，就会有一个 id 为 weatherDiv 的 div 元素。  
```js
var weather = document.getElementById("weatherDiv");
if (weather != null) {
  //
}
```
如果 getElementById 返回不是 null， 就说明网页中有这样的元素，那么创建一个天气小部件。  

### NaN
它的类型，属性于 number。
表示`无法表示`的数值结果。比如 0/0，在计算机中无法表示其结果，JS 使用 NaN 来表示它。  
是 JS 中唯一一个与自己不相等的值
`NaN != NaN`

```js
var a = 0/0; // 数字中，这没有明确的答案。
var b = "food" * 1000; // 不知道结果是什么，但肯定不是数字
var c = Math.sqrt(-9); // 负数的平方根是虚数，在JS中无法表示
``` 

### 检查NaN
NaN 与任何数据，包括它自己，都不相等。  
检查时使用特殊函数 isNaN 。传入的值不是数字时返回 true 。  
【`是NaN` 即 `不是数字`】  
【但是，  
NaN 只是`不是数字`集合中的一个情况。字符串也不是数字。  
```js
isNaN('z'); // => true
```

】

```js
if (isNaN(myNum)) {
  myNum = 0;
}
```

### 问答
- NaN 或 不是数字的值，将其传递给 isNaN 时，它将返回 true
- 为什么NaN与自己不相等？因为并非所有无法表示的数字都相同。  
- Infinity 的类型为数字，指超过浮点数上下限的值。  
  怀疑某个值太大时，可检查它是否为Infinity:  
  ```js
  if (tamale == Infinity) {
    alert("That's a big tamale!");
  }
  ```
- 将 Infinity 与它自己相减时，结果为 NaN 。


### 相等运算符


进行比较时，运算符==会考虑其操作数（要比较的两个值）的类型。  
存在两种情况：  

#### 两个值的类型相同，就直接进行比较
相同时，结果为true


#### 类型不同，则尝试将它们转换为相同的类型，再进行比较
如果一个是数字，一个是字符串，JS 将把字符串转换为数字，再进行比较。    
(在其他语言里，转换通常不是自动进行的。)


```js
99 == "99"; // => true

// 过程
99 == 99;
```

### 相等运算符如何转换操作数
JS `比较`的工作原理
了解“转换是何时以及进行的”  

#### 4种简单情况

1. 比较数字和字符串
上面是字符串可以转换为数字的情况。
当字符串不能转换为数字时，  
```js
99 == "vanilla"
99 == "ninety-nine"
// 转换后都是

99 == NaN

// => false

```

2. 比较布尔值 和其他类型

- 布尔值与数字比较
  - 将把布尔值转换成数字， true 是 1， false 为 0
  - 比较
  ```js
  1 == true

  // 转换
  1 == 1

  // 返回 true
  ```

- 布尔值与字符串比较： 需要执行额外的步骤
```js
"1" == true

// 转换
"1" == 1

// 再转换
1 == 1

// 返回 true
// 两边都是转换为数字进行比较
```

3. 比较 null 和 undefined 
结果为 true  
都是`没有值`，没有值的变量和没有值的对象。

4. 注意一些特殊情况

```js
1 == ""

// 转换
1 == 0

// 返回 false
```

另外，对象的比较，后面会介绍。


【其实，不同类型的比较，都会转换为`数值`来比较】

### 严格相等
相等运算符除了 == （相等），还有 === （严格相等）  

`==` 可以对两个类型不同的操作数进行比较
`===`表示：当且仅当两个值的类型和值都相同时，才是严格相等的。如果类型不同，返回 false 。

### 问答
- <= 和 >= 只比较字符串和数字
  【其中的 = 就相当于 == 。因为这里是运算符，不是赋值符号】
- <= 转换
```js
99 <= "100"

//转换
99 <= 100

// 返回 true
```

- `!==`也是只比较类型相同的值。

- `<` 和 `>` 适用 `==` 的规则
```js
0 < true

// 转换
0 < 1

// 返回 true
``` 

- 字符串大小的比较
  根据字母排列顺序，小写时，在前为小
  ```js
  "banana" < "mango" // => true

  "mango" < "melon"  // => true

  "mango" < "Mango"  // => false

  ```
  大写转换为数字比小写的小。    
  字符串的排列顺序取决于计算机中用于表示各个字符的Unicode值的排列顺序。Unicdoe 是一种以数字方式表示字符的标准。    

  【计算机中的一切数据都是数字...】


### 类型转换
条件语句会导致类型转换。  
其他几个运算符也可能导致类型转换。  
要知道类型转换可能`在什么情况下`和`什么地方`发生。

#### 再谈拼接和加法运算符
用于数字时，运算符+表示加法运算，  
而用于字符串时，表示拼接concatenation 。  

如果+的操作数的类型不同：   
只要+两边有一个是字符串，+运算符就认为是字符串拼接

- 数字和字符串相加
  将数字转换为字符串，再拼接
```js
var addi = 3 + "4";

//转换
var addi = "3" + "4";

// 返回
var addi = "34";
```
```js
var plusi = "4" + 3; // => "43"
```
有一个情况要注意：  
```js
var order = 1 + 2 +" pizzas";
// 第一个 + 号 是 加法运算，
// 第二个 + 号 是 拼接。
// + 的结合性是从左到右，
// 结果是 "3 pizzas"

// 为确保得到想要的结果，可使用括号来指定先执行的运算
var order = (1 + 2) + " pizzas";

// 确保结果是 "12 pizzas"
var order = 1 + (2 + " pizzas");
```



其他算术运算符，  
如乘法、除法、减法， JS 认为都是算术运算，而不是字符串运算。  
将字符串转换为数字

```js
var multi = 3 * "4"; // 3*4=>12
var divi = 80 / "10" // =>8
var mini = "10" - 5  // =>5 

```

特殊情况  
运算符-对数字取负，将其用于true时，结果为-1。  
【布尔值 转换为数字】  
布尔值和字符串相加，结果为字符串。如 true + " love" =>"true love"  
【布尔值:遇到字符串，以字符串为准;遇到数字以数字为准】

- 让字符串转换为数字，用函数Number
Number接收一个实参，并将其转换为数字;  
如果实参无法转换为数字，Number将返回 NaN 。
```js
var num = 3 + Number("4"); //=>7
```

#### 自己总结
【  
`==`：数字优先   
`<=`、`>=`、`<`、`>` ：数字优先 ,遵循 `==`一样的规则，也就是`比较符号`统一的规则。


`+` ：字符串优先  
`-` : 数字优先  
】 

### 如何判断两个对象是否相等

比较两个对象变量时，实际上比较的是`指向对象`的`引用`。  
只要两个引用指向的对象不是``同一个`，它们就不相等。  
仅当两个引用指向的是`同一个`对象时，它们才相等。

### 真值
在 JS 中， 用于条件表达式中时，判断结果为 true 的是真值，结果为 false 的是假值。
只需知道哪些值是假值，余下的其他所有值就都是真值。  
在 JS 中，假值只有5个：
```js
undefined  
null  
0  
空字符串 "" // " " 有空格则不是空字符串。
NaN
```

以下均为 false
```js
var testThis;
if (testThis) {
  //
}

var element = document.getElementById("elementThatDosentExist");
if (element) {
  //
}

if (0) {
  //
}

if ("") {
  //
}

if (NaN) {
  //
}
```

除假值外的其他值都是真值（不包括 false )  
以下都是真值  
```js
if ([]) {
  //
}

var element = document.getElementById("elementThatDoseExist");
if (element) {
  //
}

if (1) {} 

var string = "mercy me";
if (string) {}
```

### 字符串

JS 的数据类型分为两大类，基本型 和 对象。  
字符串在 JS 中，可创建作为基本型的字值串，也可创建作为对象的字符串（支持大量的字符串操作方法）。  
无须特地创建`字符串对象`，因为 JS 解释器会在需要时替你做。  
什么情况下，JS 解释器会自动创建字符串对象呢？  
【在你使用了方法的时候】
```js
var name = "Jenny";
var phone = "867-5309";
var fact = "This is a prime number";

var songName = phone + "/" + name;

var index = phone.indexOf("-");
if (fact.substring)(10, 15) === "prime") {
  alert(fact);
}
```
【其实，字符串和对象本来不就是同个原理吗？都是数据的排列。】

### 问答
- 除非使用对象构造函数，否则，字符串都是基本类型。
- 数字和布尔值也可以像对象一样，但不像字符串那样有那么属性。  

### 字符串方法和属性简明教程

- 属性 length
字符串的长度
- 方法 charAt
获取字符串中指定索引处的字符
如果索引大于或等于字符串长度，这个方法将返回一个空字符串。

` JS 没有字符类型，因此通过返回一个字符串来返回字符，其中只包含指定的字符。`  
【Q:暂时不确定是什么意思。大概是别的语言还有字符类型，而类型会带有特定属性。】  

```js
var input = "jenny@wickedlysmart.com";
for(var i = 0; i < input.length; i++) {  // 迭代字符串的字符
  if (input.charAt(i) === "@") {   //  当迭代到的索引处是字符“@”时，为 true 。
    console.log("There's an @ sign at index " + i);
  }
}
```

- 方法 indexOf
将`字符串a`作为参数，并根据`字符串b`中该参数首次出现的位置，返回该参数中第一个字符在字符串b中的索引。  
```js
var phrase = "the cat in the hat";

var index = phrase.indexOf("cat");
console.log("there's a cat sitting at index " + index); 
// => There's a cat sitting at index 4.

// 返回 第一个 cat 中字符 c 在长字符 phrase 中的索引。
```

还可以指定第二个参数。它是一个索引，指定从什么位置开始查找。  
```js
index = phrase.indexOf("the", 5);
// 忽略第一个 the
```

如果没有找到指定的字符串，将返回索引-1
```js
index = phrase.indexOf("dog");
console.log("there's is dog sitting at index " + index);
// index => -1
```

- 方法 substring
将两个索引作为参数，提取并返回这两个索引之间的`子串`。

```js
var data = "name|phone|address";
var val = data.substring(5, 10); // 不包括 10
console.log("Substring is now " + val);
// val=> phone 

// 可以省略第二个参数;在这种情况下，substring 将提取从指定索引到字符末尾的子串。
val = data.substring(5);
console.log("Substring is now " + val);
// val => phone|address
// 【第二参数默认了，是 length (不包括 length )。
```

- 方法 split
将一个用作分隔符的字符作为参数，并根据这个分隔符将字符串分成多个部分。
【并将这些部分放在一个字符串数组里】
```js
var data = "name|phone|address";
var vals = data.split("|");
console.log("Split array is ", vals); 
// vals => ["name", "phone", "address"]
```

用逗号，而不是+号，才不会把数组vals转换为字符。`+` ：字符串优先  

- toLowerCase  
所有大写转换成小写
- toUpperCase  
所有小写都转换为大写
- slice  
删除字符串的一部分
- replace  
查找子串并将它们替换为另一个字符串
- lastIndexOf  
查找最后一个子串
- match  
查找与正则表达式匹配的子串
- trim  
删除字符串开头和末尾的空白字符，为处理用户输入提供了极大便利。  
- concat  
将字符串拼接起来
- 

### 熟悉类型

#### 检查电话号码是否符合"123-4567"格式 

- 字符串长度是否为8
- 连接符是否存在
- 前段和后段是否为数字

```js

function validate(phoneNumber) {
  if (phoneNumber.length !== 8) {
    return false;
  }
  var first = phoneNumber.substring(0, 3);
  var second = phoneNumber.substrig(4);
  if (phoneNumber.charAt(3) !== "-" || isNaN(first) || isNaN(second)) {
    return false;
  }
  return true;
}
```

`isNaN(first)`会自动转换类型，将字符串转换为数字 。  
【Q: 前面好像没有说过单一类型的转换，如果真的没有，也可以理解为，在数值环境下，字符串也会被转换为数值。就像在比较符的数值环境下。】  
【对于字符串中字符是数字的情况会很好用】


#### 检查电话号码是否符合"123-4567"或"1234567"格式 

```js
function validate(phoneNumber) {
  if (phoneNumber.length > 8 ||
      phoneNumber.length < 7) {
    return false;
  }
  var first = phoneNumber.substring(0,3);
  var second = phoneNumber.substring(phoneNumber.length - 4);//最后四个字符

  if (isNaN(first) || isNaN(second)) {
    return false;
  }

  if (phoneNumber.length === 8) {
    return (phoneNumber.charAt(3) === "-");
 }
  return true;
}
```

- 字符串长度是否为8： .length
- 连接符是否存在: charAt()  
- 前段和后段是否为数字: substring()、isNaN  

用正则表达式  
```js
function validate(phoneNumber) {
  return phoneNumber.match(/^\d{3}-?\d{4}$/);
}
```

### 要点
- 基本类型包括 字符串、数值、布尔值、undefined 和 null
- undefined : 还未初始化【 未赋值 】
- null: 无对象


# 8. 综合运用

项目需求：  
  - 需要设计结构，以便在 JS 中获取玩家输入以及显示击中、未击中等消息。  
    - 把网页的背景设置为图像
    - 在上面放置 html 表格：使用 html 表单来获取玩家输入
      - 每个 td 刚好在背景图像中的格子上面。
      - 每个 td 都指定 id
    - 玩家交互
      - 用 form 和 input 元素让玩家输入猜测位置:   
        input 指定 id ，后面编写代码来获取玩家的猜测时将用到它们。
      - 用 div 向玩家显示消息的区域
    - 添加样式
      - 确保table的单元格与背景图像中的网格对齐
        - table 的位置
        - 单元格的宽度和高度
      - 消息区域相对背景指定绝对定位，因为 form 嵌套在背景 div 里。
      - 表格和表单同上
      - 设置颜色
    - 指出是否击中战舰
      - 在玩家每次猜测后指出是否击中了战舰，即在游戏板的相应位置显示图像ship.png或miss.png。将 td 元素的背景设置为合适的图像。  
    
    .... 
    p321 - p357的代码和过程：代码都在文件 [battleship.js](8-Intergrated-Application/battleship.js) 里
    ....

    - 获取玩家的猜测
      - 玩家输入猜测 并 单击 fire! 按钮
          ```js
          function handleFireButton() {
            /**/
          }
          ```
      - Fire! 按钮被单击时，将调用一个预先指定的事件处理程序
          ```js
          function init() {
            var fireButton = document.getElmentById("fireButton");
            fireButton.onclick = handleFireButton;
          }

          function handleFireButton() {
            /* 从表单中获取值的代码 */
          }

          window.onload = init;
          ```
      - 这个事件处理程序获取表单中的玩家输入，并将其交给控制器。
    
          ```js
          

          function handleFireButton() {
            /* 获取表单中的玩家输入。访问属性 value */
            var guessInput = document.getElementById("guessInput");
            var guess = guessInput.value;
            /* 将输入交给控制器 */
            controller.processGuess(guess);

            guessInput.value="";/*输入清零*/
          }
     

          ```
     - 随机生成战舰位置
        - 方向选择
        - 检查冲突


#### 编码技巧 - 按回车键事件的代码
          ```js
          function init() {
            // 在“按钮元素”接收“单击”
            var fireButton = document.getElementById("fireButton");
            fireButton.onclick = handleFireButton;

            // 添加一个新的处理程序，用于处理 html 输入字段的`按键事件` -Q
            // 在“文本元素”接收“回车”，文本 id 为 guessInput
            var guessInput = document.getElementById("guessInput");
            // console.log(guessInput.onkeypress); 运行时，打印的是 null。说明事件onkeypress是（动态）添加的。
            guessInput.onkeypress = handleKeyPress;
          }

          // 当用户按键时都会触发
          function handleKeyPress(e) { // e:传入一个事件对象 Q：猜测是内置的键盘所有按键代码的对象（输入的参数），回车键是键盘的一个属性，值为13。
            var fireButton = document.getElementById("fireButton");
            if (e.keyCode === 13) {
              // click 方法，让fireButton以为自己被单击
              fireButton.click();
              return false;
            }
          }
          ```
##### onclick 和 click
P361：onclick 和 click 之前书里没有提到。这段逻辑没看明白。
`网上说:`
>click是一个方法，onclick是一个事件，
其区别在于：
　　1.事件名前一般都以on开头；
　　2.方法是程序员写语句直接调用，即显示调用；【可以触发onclick事件】　　3.事件不需程序员调用，但是，必须由程序员写`一个函数且将该函数赋值给相应的事件`，其调用是在相应的事件触发时。【告诉浏览器在鼠标点击时候要做什么】所以调用顺序是：首先方法其次事件。

【事件是由用户在电脑上调用的。方法是程序里调用的。】

`整理思路:`
onclick 的原理可参考 window.onload 。    
- onload 是 window (即浏览器窗口)对象的一个属性（未存在，但可以像JS对象属性那样添加）。使用时，赋值一个函数给它。等窗口也可以说等用户在窗口打开html文件对应的网页来调用onload，进而调用了函数。  
- onclick 是（一切）html 元素的一个属性。  使用时，也是赋值一个函数给它。等窗口传来单击的“信号”也可以说是用户`单击`了元素这个行为来调用 onclick，进行`调用了函数`。【用户单击的动作调用了函数】
  



......

#### 让每个对象只承担一项职责的好处之一是，可分别对每个对象进行测试。
#### 相对于循环，indexOf 并不能提高效率，但是编写的代码更少。而且代码的意图也更清晰：使用indexOf时，更容易明白要在数组中查找什么值。  

#### 要获取表单元素的值，可访问其属性 value




do while 循环：  
原理与 while 几乎相同，只是先执行循环体中的语句，再检查循环条件。少用。  

Math.floor(Math.random(numShips) *2 );


【HTML 元素的属性或事件可以在 JS 里直接创建，不需要用 setAttribute 添加到 HTML 的元素里面。】


# 9. 异步编码

### 事件是什么
在浏览器上单击按钮、鼠标位置发生变化、通过网络收到数据、窗口大小变化、定时器到期、浏览器位置发生变化等，都会触发`事件`。 【这些就是事件】 
每当有事件发生时，都可以在代码中处理它，即提供将在事件发生时调用的代码。  

### 事件处理程序
处理程序通常是一小段代码，知道事件发生时该如何做。从代码的角度说，`处理程序就是一个函数`。事件发生时，其处理程序函数将被调用。  
也可称为`回调函数`或`监听器`。   
调用监听器：  `注册`它：取决于事件的类型  

#### 创建第一个事件处理程序：
事件处理示像之一：网页加载事件。 
网页加载事件的 `触发时间点`是：浏览器加载完网页、显示网页的所有内容并生成了表示网页的`DOM` 。  

`事件处理的工作原理 示例`：
1. 首先，需要编写一个`处理`网页加载`事件`的`函数`。  
   作用： 这个在网页加载完毕时`显示`“I'm alive”。 即，`在事件发生时，进行显示`。     

```js
// 处理程序就是一个函数。

function pageLoadedHandler(){
  alert(I'm alive!);
}
```
2. 建立`关联`，让浏览器在加载事件发生时调用它。  


```js
【事件处理的原理分析：】

1. 事件是什么? 网页加载（完毕）
  - 在代码里用什么表示？ window.onload

2. 处理什么？  显示。
  - 显示什么？ 提示字符串（提醒）。代码： alert
  - 用什么组织 alert ？用函数
  - 函数怎么调用？ 赋值给 window.onload。
  - 赋值 代表什么意思？ 事件发生时，调用函数，也就是进行“处理”。

结论：处理函数 赋值给 事件。
``` 

使用 window 对象的属性 onload
```js
window.onload = pageLoadedHandler. // 也就 指定处理程序
``` 


#### 测试事件处理程序

```js
<!doctype html>
<html lang="en">
<head>
 <meat charset="utf-8">
 <title>I'm alive!</title>
 <script>
  window.onload = pageLoadedHandler; <!--先赋值，网页加载完才调用。--> 
  function pageLoadedHandler() {
    alert("I'm alive!");
  }
 </script>
 </head>
 <body>
 </body>
 </html>
```

## 异步方式
线性的（linear）的编写代码方式，使代码按从上到下的顺序逐步编写代码。  
战舰游戏的代码执行方式 不完全是线性的。代码对用户输入作出响应。  

以`响应事件的方式`组织代码是另一种代码编写方式。  需要考虑可能发生的事件以及代码应如何响应这些事件 + 代码如何响应这些事件。  
通常说这种代码是`异步`的 / asynchronous 。
（另一种看待问题的角度）  
将处理各种事件的众多处理程序整合起来，构成一个应用程序。  

### 通过创建一个游戏来理解事件
理解事件的最佳方式是实践。   

【自已分析】：在网页加载完毕后，除网页加载以外的`其他事件的处理原理`：  
网页加载事件   
=> 定义函数 init 关联 window.onload   
=> 在 init 中，其他事件，如onclick等，关联到函数 B   
=> 定义另一个函数，处理其他事件。    

任何其他事件的发生，都要在网页加载事件发生之后。【可能有的是在加载完之后，待整理。Q】

#### 游戏需求：  
加载一个网页，显示一幅图像。这幅图像很模糊。你的任务是猜出图像是什么。要核实是否猜对了，可单击图像，让它不再模糊不清。  

[html文件](9-Async-Programming/asyncGame.html)

```html
<!doctype html>
<html>
<head lang="en">
  <meta charset="utf-8">
  <title>Image Guess</title>
  <style> body {margin: 20px;}</style>
  <script></script>
</head>
<body>
  <img id="zero" src="zeroblur.jpg">
</body>
</html>
```

### 实现游戏
每当网页中的 html 元素被单击（在移动设备上是触摸）时，都将触发一个事件。只需为这个事件创建一个处理程序，并在其中编写显示图像清晰版本的代码。  
 1. 访问 DOM 中的这个图像对象，并将其属性 onclick 设置为一个处理程序。
 2. 在这个处理程序中编写代码，将图像的 src 属性从模糊图像改为清晰图像。  

第1步，访问 DOM 中的图像
```js
var image = document.getElementById("zero");
```
确保代码在网页 DOM 创建好之后再运行：
```js
window.onload = init;  
function init() {
 var image = document.getElementById("zero");
}
```

第2步，添加更新图像的处理程序

```js
window.onload = init;  
function init() {   // 加载事件处理程序
 var image = document.getElementById("zero");
 image.onclick = showAnswer; // 将一个处理程序赋给从 DOM 获取的图像对象的 onclick 属性。***
}
```
将一个处理程序赋给从 DOM 中攻取的图像对象的 onclick 属性。***   
【这句话说明，onclick 是 DOM 的一个属性。】

编写函数showAnswer，它将图像元素的 src 元素改变清晰图像。  

```js
function showAnswer() {    // 单击后调用
  var image = document.getElementById("zero");
  image.src = "zero.jpg";
}
```

### 问答
- 并非所有 html 特性都有对应的对象属性，对于这些特性，必须使用 setAttribute　和 setAttribute 来设置和获取。  
  对于 src 等而言，要设置和获取，可使用元素对象的相应属性`image.src`，也可使用 setAttribute　和 setAttribute 。
  【类似第8章时已经用到的事件（onclick)，但没有讲到的知识点。】
  【Q:哪些没有对应的对像属性，一定要用  setAttribute　和 setAttribute ？】

### 添加更多图像

CSS：增加
```css
img { margin: 20px;}
```
HTML：增加
```html
<img id="one" src="oneblur.jpg">
<img id="two" src="twoblur.jpg">
<img id="three" src="threeblur.jpg">
<img id="four" src="fourlur.jpg">
<img id="five" src="fiveblur.jpg">
```


### DOM 方法
document.getElementsByTagName  
这个方法将一个标签名（如 img 、p 或 div ）作为参数，并返回一个`列表`，其中包含`所有匹配的元素`。  
比如 img 作为参数，将返回所有 img 图像。


```js

function init () {
  var images = document.getElementsByTagName("img");
  for (var i = 0; i < images.length; i++) {
    images[i].onclick = showAnswer;
  }
}
// 每幅图像的属性 onclick 都设置成了处理程序 showAnswer 。-p396
```
【onclick 是属性，所以 onclick 是元素对象 img 的一个属性】

- `var images = document.getElementsByTagName("img")` 返回的是类似于数组的`对象列表`。但与数组又不完全相同。 (上面讲的“列表”)

  - 实际上返回的是一个 NodeList 对象，但你可像处理数组一样处理它。NodeList 是一个 Node 集合，而 Node 指的其实是 DOM 树中的　element　对象。    
  - 可以像数组一样迭代 Node 集合：使用 length 属性来获取长度，通过方括号括起的索引来访问 NodeList 的每个项目。然而，数组 和 NodeList 的相似之处仅此而已，因此处理 NodeList 对象时必须小心。
  - 除非需要在 DOM 中添加或删除元素，否则不必对 NodeList 有更深入的了解。

- onclick：任何网页中显示出来的元素，都支持单击事件，只需获取这个元素并将其 onclick 属性设置为一个函数即可。



### 事件对象的工作原理
单击事件处理程序【image.onclick = showAnswer;】被调用时，将向它传递一个`事件对象`。 大多数文档对象模型（DOM) 事件发生时，都会向相应的处理程序传递一个事件对象。

```js
// DOM 
// 事件对象的工作原理: 事件对象是元素对象的一个属性。它本身带着以下这类属性：

元素对象 {    // 触发事件的元素,"目标 target"
  *事件*对象*: {  // event 对象
    常规信息: {
      事件类型:xxxxx,
      目标 target: ( 作用看下面 ),
      触发时机/何时触发:xxxxx,
      
      ...
    },

    特有信息: { // 取决于 this["事件类型"]
      鼠标位置:xxxxx, // 单击事件特有.
      ...
    }
  },


  其他属性对象和方法：{
    innerHTML,
    class
    alt,
    src,
    value,
    ...
    getAttribute,
    setAttribute,
    ...
    
  }

}
```

target: 存储一个引用，指向触发事件的元素。【也是就这里的“元素对象” Q】

```js
function showAnswer(eventObj) {
  var image = eventObj.target;
}
```


#### 事件对象的几个属性，以及对应的额外信息
- target： 存储着触发事件的对象。`可以是各种不同的对象`，但通常是元素对象。【以上原理以元素对象为分析基础。以后继续了解】
- type: 是一个字符串，如“click”或“load”，指出了发生的是哪种事件。
- timeStamp：事件何时发生
- keyCode：用户刚刚按下哪个按键
- clientX：用户单击的位置离浏览器窗口的左边缘有多远
- clientY: 离上边缘有多远
- touches: 在触摸设备上，可以确定用户使用了多少根手指来触摸屏幕。

### 使用事件对象

修改 
```js 
<img id="one" src="oneblur.jpg">
```
等 变成
```js 
<img id="one" src="one.jpg">
```
==>
```js
fcuntion shipwAwnswer(eventObj) {
  var image = eventObj.target;   // 被单击的图像元素

  var name = image.id;  // 直接用 image.id。不用 getAttribute;好像很少用。
  name = name + ".jpg";
  image.src = name;     // 
}
```