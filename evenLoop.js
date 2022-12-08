// fetching processes are passed to microtask queue, not callback queue
// but setTimeout is passed to callback queue
// and Microtask Queue process firstly than callback queue


function main(){
    console.log('A');
    setTimeout(
      function display(){ console.log('B'); }
    ,0);
      console.log('C');
}
main();
//	Output
//	A
//	C
//  B


function main(){
  console.log('A');
  setTimeout(
    function display(){ console.log('B'); }
  ,0);
	console.log('C');
}
main();
//	Output
//	A 
//	C
// main func is geting out of call stack
//  B




function main(){
  console.log('A');
  setTimeout(
    function exec(){ console.log('B'); }
  , 0);
  runWhileLoopForNSeconds(3);
  console.log('C');
}
main();
function runWhileLoopForNSeconds(sec){
  let start = Date.now(), now = start;
  while (now - start < (sec*1000)) {
    now = Date.now();
  }
    console.log('D')
}
// A
// D
// C
// undefined (main is ended)
// B