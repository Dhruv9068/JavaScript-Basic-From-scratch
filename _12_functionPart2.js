function calculateCarPrice1(num1){
    return num1;
}
console.log(calculateCarPrice1(2));
// now what if i don't know number of arguments?

function calculateCarPrice(...num1){
    return num1;
}
console.log(calculateCarPrice(2,3,4,5,5));

// how to pass objects i fucntions

function handleObject(anyObj){
    console.log(`Username is ${anyObj.username} and his product price is  $${anyObj.price} `);
}
handleObject({
    username:"dhruv",
    price: 1000
});

