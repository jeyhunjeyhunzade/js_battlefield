// first unique character in string
const firstUniqChar = function(s) {
    for(const i of s) {
        if (s.indexOf(i) === s.lastIndexOf(i)) {
            return s.indexOf(i)
        }
    }
    return -1
};