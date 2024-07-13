const numberArray:Array<number> = [234, 456, 678, 231, 888, 432];

const stringArray:Array<string> = ['a', 'w', 's', 'g', 'f', 'l'];

function minNum() : number {
    var minVal : number = numberArray[0]
    
    for (var index in numberArray) {
        minVal = Math.min(minVal, numberArray[index]);
    }

    return minVal;
}

function maxNum() : number {
    var maxVal : number = numberArray[0]
    
    for (var index in numberArray) {
        maxVal = Math.max(maxVal, numberArray[index]);
    }

    return maxVal;
}

function minStr() : string {
    var minVal : string = stringArray[0]
    
    for (var index in numberArray) {
        var val : string = stringArray[index];

        if(minVal > val) {
            minVal = val;
        }
    }

    return minVal;
}

function maxStr() : string {
    var maxVal : string = stringArray[0]
    
    for (var index in numberArray) {
        var val : string = stringArray[index];

        if(val > maxVal) {
            maxVal = val;
        }
    }

    return maxVal;
}

console.log(minNum)
console.log(maxNum)
console.log(minStr)
console.log(maxStr)