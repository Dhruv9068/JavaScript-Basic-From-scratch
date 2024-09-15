var a =19;


function f (a){
    a=10;
    console.log('inner block using var ', a);
}
f(a);

console.log('outer block using var' , a);



//the above thing is really a problem 
// that's why we use const and let 

let b = 50;
if(true){
     let b =90;
     console.log(`inner if block using let `, b);
     // in if scope b is changed 
}

console.log('outer using let ' , b);  // it gives 50 output as its declared out of if 




