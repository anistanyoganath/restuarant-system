import update from "react-addons-update";
const initialstate = {
  cartList: [],
  total: 0,
};

function reducer(state = initialstate, action) {
  var item;
  function findItem(id) {
    state.cartList.forEach((element) => {
      if (element.id === id) item = element;
    });
  }
  switch (action.type) {
    case "add-to-cart":
      return {
        cartList: [...state.cartList, action.payload],
        total: state.total + action.payload.price,
      };
    case "remove-from-cart":
      return {
        cartList: state.cartList.filter((c) => c.id !== action.payload.id),
        total: state.total - action.payload.price,
      };

    case "increase-quantity":
      findItem(action.payload)
    
      return {
        cartList: state.cartList.map((x) =>
          x.id === action.payload
            ? { ...x, quantity: x.quantity !== undefined ? x.quantity + 1 : 2 }
            : x
        ),
        total: state.total + item.price,
      };

    case "decrease-quantity":
      findItem(action.payload)
      return {
        cartList: state.cartList.map((x) =>
          x.id === action.payload
            ? { ...x, quantity: x.quantity > 1 ? x.quantity - 1 : 1 }
            : x
        ),
        total: item.quantity > 1 ? state.total - item.price : state.total - 0,
      };
    case "clear-cart":
      return {  cartList :[] ,total :0  };
    default:
      return state;
  }
}

export default reducer;
