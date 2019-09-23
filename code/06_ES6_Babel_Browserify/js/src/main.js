// 引入其他模块
// 语法: import xxx from 'path'

import $ from 'jquery';

import {foo, bar} from './module1';

import {fun, fun2} from './module2';

import module3 from './module3';

console.log(foo, fun);


$('body').css('background', 'skyblue');

foo();
bar();
fun();
fun2();
module3();