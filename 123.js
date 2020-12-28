let arr2=[
  {
    name:"zhangsan",
    age:12


  },{
  name:"lisi",
  }
]
let  arr=arr2.find(ele=> {
  ele.age=11
  return ele.name="lisi"
});
console.log(arr,arr2);
const str='a,b,c';
console.log(str.split(',',2))
