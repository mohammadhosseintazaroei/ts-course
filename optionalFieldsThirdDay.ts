function sayHello(first_name?: string, last_name?: string): void {
  console.log(
    `Hi ${first_name || "New User"} ${last_name || ""} welcome to our website`
  );
}
sayHello();

let blog : {
    title: string,
    text: string,
    likes: number,
    author: object,
    comments?: Array<object> | object[]
}
blog = {
    title:"new title",
    text:"new text",
    likes:0,
    author: {name: "mohammad"},
}