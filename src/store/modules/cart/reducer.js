import produce from "immer";

export default function cart(state = [], action) {
  console.tron.log(state);
  switch (action.type) {
    case "@cart/ADD":
      return produce(state, (draft) => {
        // pega o produto recebido
        const { product } = action;
        const { id } = product;

        // verifica se ele existe no carrinho e pega a posição dele
        const index = state.findIndex((item) => item.id === id);
        // se existir
        if (index >= 0) {
          // aumenta a quantidade em 1
          draft[index].amount++;
        } else {
          //senao adiciona o produto criando o preço formatado e a quantidade
          const data = {
            ...product,
            amount: 1,
            priceFormmatted: `${product.price}R$`,
          };
          draft.push(data);
        }
      });
    case "@cart/UPDATE":
      return produce(state, (draft) => {
        const index = draft.findIndex((i) => i.id === action.id);

        if (action.amount === 0) return;
        if (index >= 0) {
          draft[index].amount = Number(action.amount);
        }
      });

    case "@cart/REMOVE":
      return produce(state, (draft) => {
        const index = draft.findIndex((i) => i.id === action.id);
        if (index >= 0) {
          draft.splice(index,1)
        }
      });

    default:
      return state;
  }
}
