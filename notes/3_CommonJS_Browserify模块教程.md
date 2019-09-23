# Browserify

## 打包
#### 1. 目录结构
```
/- js
  /- dist  // 打包生成文件的目录
  /- src
    /- app.js // 应用主源文件
    /- module1.js
    /- module2.js
    /- module3.js
/- index.html
/- package.json
```
#### 2. 下载Browserify
```bash
# 需要全局安装
npm i -g browserify  
# ./ 项目目录下局部安装
npm i browserify -D
```

#### 3. 打包处理
```sh
  browserify js/src/app.js -o js/dist/bundle.js
```

#### 4. 页面引用
```html
    <script src="./js/dist/bundle.js"></script>
```

#### 5. 在浏览器中访问入口页面