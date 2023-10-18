{
  let num1 = Number("Hello world!"); // NaN
  let num2 = Number(""); // 0
  let num3 = Number("000011"); // 11
  let num4 = Number(true); // 1
}

{
  let num1 = parseInt("1234blue"); // 1234
  let num2 = parseInt(""); // NaN
  let num3 = parseInt("0xA"); // 10 - hexadecimal // 22
  let num4 = parseInt(22.5); // 22
  let num5 = parseInt("70"); // 70 - decimal
  let num6 = parseInt("0xf"); // 15 - hexadecimal
}

{
  let num1 = parseFloat("1234blue"); // 1234 - integer
  let num2 = parseFloat("0xA"); // 0
  let num3 = parseFloat("22.5"); // 22.5
  let num4 = parseFloat("22.34.5"); // 22.34
  let num5 = parseFloat("0908.5"); // 908.5
  let num6 = parseFloat("3.125e7"); // 31250000
}
