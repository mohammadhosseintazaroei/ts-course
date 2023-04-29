// string
// number
// boolean

let BlogTitle: string = "this is first blog about typescript and nodejs"
console.log(typeof BlogTitle)

let blogLikesCount: number = 490
console.log(typeof blogLikesCount)

let isActive: boolean = true
console.log(typeof isActive)

let user: (typeof BlogTitle)
user = "mohammmad hossein"
let str : string = `my Blog has ${blogLikesCount} likes`
console.log(str)
console.log(blogLikesCount * +"3")

let anyValue :any = "mmd"
anyValue = 3
anyValue = true
console.log(anyValue)