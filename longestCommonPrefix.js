const longestCommonPrefix = function(strs) {
    let output = ''

    for (let y = 0; y < strs[0].length; y++) {
        // console.log("test", strs[y].length)
        if (!strs[0].length) return ""
        let samePrefx;
        for (i = 0; i < strs.length; i++) {
            if (strs[0][y] == strs[i][y]) {
                samePrefx = strs[0][y]
            } else {
                return output
            }
        }
        console.log(samePrefx)
        output += samePrefx
    }
    return output
    
};

let testArr = ["flower","flower","flower","flower"]

console.log(longestCommonPrefix(testArr))

// exceptional case , if array has empty string