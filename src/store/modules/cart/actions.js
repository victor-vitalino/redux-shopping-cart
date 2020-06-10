// açoes do reducer do carrinho

export function addToCart(product){
    return{
        type:'@cart/ADD',
        product,
    };
}
export function updateCart(id, amount){
    return{
        type:'@cart/UPDATE',
        id,
        amount
    };
}
export function removeFromCart(id){
    return{
        type:'@cart/REMOVE',
        id
    };
}
