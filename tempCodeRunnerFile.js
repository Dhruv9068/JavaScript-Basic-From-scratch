

// singelton objects?1


/* A Singleton is a design pattern that restricts the instantiation of a class to a single instance.
 In other words, it ensures that only one object of a particular class is created, and provides a global point of access to that instance.*/


const obj = new Object(); // this is an singleton object


// Lateral object 

const Myobj = {};

console.log(obj);
console.log(Myobj);

// both returns the empty object in same way there is no internal difference
//


const regularUser ={
    email: "dhruv@gm",
    fullname :{
        userFullname: {
            firstname:"hitesh",
            lastname: "chaoudhary"
        }
    }
}

console.log(regularUser.fullname.userFullname.firstname);