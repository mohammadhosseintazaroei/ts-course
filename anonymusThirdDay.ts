// Anonymus Types
let basket: {
  products: Array<{
    title: string;
    img: string;
    price: number;
    discount: number | undefined;
    count: number;
  }>;
  payment: { productAmount: number; gateway: string };
};

basket = {
  products: [
    {
      title: "iphone pro",
      img: "https://localhost:3000/img.png",
      price: 52000000,
      discount: 3,
      count: 500,
    },
  ],
  payment: {
    productAmount: 24700000000,
    gateway: "zarinpal",
  },
};
console.log(basket)
