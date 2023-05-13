// Literal Types
type EventName = "click" | "abort" | "change" | "load";
const docEvent: EventName = "change";

type ProductType = "phisical" | "virtual";
enum State {
    pending,
    started,
    cancel,
    abort,
    delivery
} 

const product: { type: ProductType , state: State } = {
  type: "phisical",
  state:State.delivery
};
console.log(product);
