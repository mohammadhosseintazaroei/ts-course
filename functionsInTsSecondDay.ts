import { debuglog } from "util";

function sum(num1:number,num2:number) :number {
    return num1 + num2;
}

const result = sum(10,4.66)
console.log(result)

function getName(first_name:string, last_name:string):string{
    return `Hello ${first_name} - ${last_name}`
}
console.log(getName("mohammad" , "tazaroie"))

function getDate():Date {
    return new Date()
}
console.log(getDate())

function getTimeStamps(date: Date):number {
    return new Date(date).getTime()
}
console.log(getTimeStamps(getDate()))

function logger(value: any):void{
    console.log(value)
}

logger('d')
logger(1)
logger(true)

function runFucntion(fn:Function):Function {
    return fn()
}

runFucntion(()=>{
console.log("hello")
})