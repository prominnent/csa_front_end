// L0
var obj1 = {
  words: '1'
}
function Obj2() {
  this.words = "2"
}
var obj2 = new Obj2()
var obj3 = new Object()
obj3.words = '3'
// 工厂模式
function createobj() {
  var obj4 = new Object()
  obj4.words = '4'
  return obj4
}
class obj5 {
  constructor() {
    this.words = '5';

  }
}
// L1
function muPush(arr, ...x) {
  for (let index = 0; index < x.length; index++) { arr[arr.length] = x[index]; }
}
//测试代码，比如向下面的arr尾部增加2 let arr1=[1];
muPush(arr1, 2, 3) // console.log(arr); 
// L2
let arr = [[1, [2, 3], 4], [5, [6, 7], 8, 9]]; function ifFlat(arr) {
  for (let index = 0; index < 4; index++) { if (typeof (arr[index]) == 'object') return 0 } return 1
} function
  MyFlat(arr) {
  arr1 = []
  arr1 = arr1.concat(...arr)
  if (ifFlat(arr1) === 0)
    return MyFlat(arr1)
  else return arr1
}
arr2 = MyFlat(arr)
console.log(arr2);