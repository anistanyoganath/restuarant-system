import store from "./store";

export function addtocart(item) {
  store.dispatch({
    type: "add-to-cart",
    payload: item,
  });
}
export function removefromcart(item) {
  store.dispatch({
    type: "remove-from-cart",
    payload: item,
  });
}

export function clearcart(){
  store.dispatch({
    type:"clear-cart"
  })
}
export function increasequantity(id){
  store.dispatch({
    type:"increase-quantity",
    payload:id
  })
}
export function decreasequantity(id){
  store.dispatch({
    type:"decrease-quantity",
    payload:id
  })
}