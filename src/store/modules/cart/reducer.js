import produce from "immer";

export default function cart(state = [], action) {
  console.tron.log(state)
  switch( action.type){
      case '@cart/ADD':
          return produce(state, (draft) =>{
              const {product} = action;
              draft.push(product)
          })
      default:
        return state;
  }
}
