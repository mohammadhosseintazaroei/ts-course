// null, undefined, void
// any, unkown, never

let value1: null = null
let value2: undefined = undefined

console.log(typeof value1 , value1)
console.log(typeof value2 , value2)

console.log(!!value1,!!value2)

function chetType(): void{
    console.log()
    while(true){}
}

// *********** any - unknown - never **********

let value: any ;
value = "string"
value = true
value = false
value = 3498
value = 3.3
value = () => {}
value = null
value = undefined
value = [32,"string", {}]
value = {}


let value3: unknown ;
value3 = "string"
value3 = true
value3 = false
value3 = 3498
value3 = 3.3
value3 = () => {}
value3 = null
value3 = undefined
value3 = [32,"string", {}]
value3 = {}

let data1 :unknown;
let mydata : string = data1
let mydata1 : number = data1
let mydata2 : string[] = data1
let mydata3 : number[] = data1
let mydata4 : boolean = data1
let mydata5 : undefined = data1
let mydata6 : object = data1
let mydata7 : any = data1
let mydata8 : any[] = data1
let mydata8 : never = data1
let mydata8 : null = data1


function sendError():never{
    throw {error: "message", code: 401,status:false}
}
