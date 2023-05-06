let user: [name: string, age: number];
user = ["mohammad", 3];
console.log(user);

let position: [lat: number, long: number] = [61.203948523054, -31.314345565];

let [lat, long] = position;

console.log(lat);
console.log(position);

// optional parameters in tuples
let book: [name: string,author: string, pages: number,publishCount? :number];

book = ["nodeJs", "erfan", 501,3]
let [ bookName, bookAuthor, bookPages] = book;

console.log(bookName);
console.log(bookAuthor);
console.log(bookPages);

let score : [username: string, ...scores: number[]] = ["MohammadTazaroie" , 3,3,5,67,2,2,]
console.log(score);

let score2 : [username: string, ...scores: [first: number,second: number,third: number]]
score2 = ["ali asadi" , 2,3,54]
console.log(score2);
