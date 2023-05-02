function getKeys(obj: Object):string[]{
    const keys : string[] = Object.getOwnPropertyNames(obj) 
    return keys;
}
const users = {
    name:"mohammad" , 
    age: 20,
    city: "tehran"
}
console.log(getKeys(users))

let numbers: number[] = [1,2,3,4,5,6,7,8]
let numbers2:Array<number> = [1,2,3,4,5,6,7,8]
console.log(numbers)
console.log(numbers2)