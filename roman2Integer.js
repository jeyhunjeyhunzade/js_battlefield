const sym = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
}
  
  const romanToInt = function(s) {
    let result = 0;
    for(let i = 0; i < s.length; i++) {
      result += sym[s[i]] * (sym[s[i]] < sym[s[i+1]] ? -1 : 1)
    }
    
    return result;
  };

  console.log(romanToInt("MCMXCIV"))