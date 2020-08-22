    // NUMBER 1
function replaceWith(str,replace,replacewith) {
	let result = "";
    for(let i = 0; i < str.length; i+=1){
    	if(str[i] === replace){
			result += replacewith;
		}else{
			result += str[i]; 
		}
    }
	return result;
}
    // NUMBER 2
function expand(arr,number){
    let result = [];
    for(let i = 0; i < number; i+=1){
    	result.push(arr);
    }
    return result.flat();
}

    // NUMBER 3
function acceptNumbersOnly(){
    for(var i = 0; i<arguments.length; i++){
        if(arguments[i] === NaN){
            return false;
        }
        if(arguments[i] !== Number(arguments[i])){
            return false;
        }
    }
    return true;
}

    // NUMBER 4
function mergeArrays(arr1,arr2){
    var newArr = arr1. concat(arr2)
    return newArr.sort();
}

    // NUMBER 5
function mergeObjects(obj1,obj2){
    let merged = {...obj1, ...obj2};
    return merged
}
var obj1= {
    name: "Foo",
    num: 33
}
var obj2 = {
    test: "thing",
    num: 55
}