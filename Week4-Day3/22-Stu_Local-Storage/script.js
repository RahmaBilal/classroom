//notes
//putting stuff in local storage
//=localStorage.setItem("count", 10);
//to restore the value, you have to use a key
//=var count = localStorage.getItem(count);
//removing items
//=localStorage.removeItem("count");
//setItem, getItem, removeItem - 


var person = {
    name: "Rahma",
    email: "rahma.bilal15@gmail.com",
    age: 10,

};

localStorage.setItem("personStorage", JSON.stringify(person));

var personFromStorage = localStorage.getItem("personStorage");
console.log(JSON.parse(personFromStorage).name);
//parse to convert string back to object
//JSON converts object to string