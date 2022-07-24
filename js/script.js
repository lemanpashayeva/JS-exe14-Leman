//exe-1

for (let i = 1 ;i<=25 ;i++) {
    console.log(i);
}

//exe-2

const myObj = {
    bookname: "Harry Potter",
    genre: "adventure",
    price: "20$"
};

for (let x in myObj) {
   console.log(myObj[x]);
};

//exe-3

const arr= ["Baku" , "Moscow" , "Ankara" , "Rome"];
const arr2= ["Azerbaijan" , "Russia" , "Turkey" , "France"]

for (let y in arr) {
    for (let z in arr2) {
        console.log(arr[y] + " is the capital city of " + arr2[z])
    }
}