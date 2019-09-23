# CommonJS
# 规范
## 说明
+ 每个文件都可以当做一个模块
+ 在服务器端: 模块的加载是运行同步加载的
+ 在浏览器端: 模块需要提前编译打包处理

## 基本语法
### 暴露模块 
```javascript

module.export = value; // 覆盖exports对象

exports.xxx = value; // exports添加xxx属性


```
**问题:**
+ 暴露的模块到底是什么?
    - `exports`
+ 暴露的本质是谁?
    - 两种方式暴露的本质都是`exports`对象


### 引入模块
```javascript
require(xxx);
// 第三方模块: xxx 为模块名
// 自定义模块: xxx 为模块文件路径
```


# 实现
## 服务器端实现
+ Node.js

## 浏览器端实现
+ Browserify
在浏览器端实现需要提前打包,打包的工具为Browserify(http://browserify.org/), 也称为CommonJS的浏览器打包工具

## 区别Node与Browserify
