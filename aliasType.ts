//type alias
type ID = number | string | null;

type BasketType = {
    products:ID[],
    discount?: string
}

type user = {
  full_name: string;
  email: string;
  password: string;
  age: number;
  basket: BasketType
};
function getUser(userID: ID): user {
  return {
    full_name:"mohammad tazaroie",
    email:"m.h.tazaroie753@gmail.com",
    password:"mohammad_ofihdf",
    age:16,
    basket:{
        products: [1,2,3,4],
        
    }
  };
}

console.log(getUser(1))