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