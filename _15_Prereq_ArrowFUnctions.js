const user ={ 
    username : "dhruv", 
    price:999, 
    welcomeMessage : function (){
        console.log(`${this.username}, welcome to website`);
       console.log(this)   // it gives output of current contest
        
    }
}

user.welcomeMessage();
user.username ="sam";  // changing current contest here
user.welcomeMessage();

console.log(this);  // it gives {} empty object because we are in node  env , this refers to empty object


//  NOTE:: if we try this in broswer  gives window object as output , in broswer window object in global object



// lets try this inside function 


function try_this(){
    // console.log(this)     it gives so many global objects
}

try_this();

function try_this_again(){
    let username ="dhruv"
    console.log(this.username);   // this not working in functions  properly 
}

try_this_again();


// Note that's why we need arrow functions because in normal functions we can't use this but in arrow functions we can see the current contest 