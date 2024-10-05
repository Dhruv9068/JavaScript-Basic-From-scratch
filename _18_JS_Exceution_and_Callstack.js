let a=10;
let b=20;

function add(a, b) {
   let result = a+b;
   return result;
}
result = add(10,20);


/*
Here we have above code to this commenet

                   Types of Execution cotext
                   1.  Global  Execution Context
                   2.  Functional Execution Context
                   3.  Eval Execution context

here for this code we have

Global execution phase
           this
Memory Phase
        let a = undefined
        let b = undefined
        addNum = defination {
        let result = a+b;
   return result;
   }
       

Execution phase
     let a =10;
     let b =20;
     add num             
                    Excution context for addNum
                       Memory phase :                Execution phase
                          a,b = undefined            a,b=10,20
                          result = undefined         result = a+b = 30
                          

    result =30
    
    

    */



// Call stack in js
/*
  
   function one() {
        two();
   }
    function two() {
        three();
   }
   function three() {
        console.log("hello there!")
   }

   Call stack for this be like          ____________
                                        |          |      Call Stack
                                        |          |
                                        |          |
    This follow LIFO Concept            | Three()  |     first three get executed , then two , then one
                                        | Two()    |
                                        | One()    |
                                        ------------























*/