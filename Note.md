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
  scoops = scoops -1;
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
if (   in stock == true && (on sale == true || price < 60)) {
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

