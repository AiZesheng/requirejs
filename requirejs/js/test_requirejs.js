// 只在入口文件写require
require(["a"],function(sortArr){
	var arr = [5,3,4,9,33];
	console.log(sortArr(arr));
});