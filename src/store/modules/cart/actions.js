// açoes do reducer do carrinho

export function addToCart(product){
    return{
        type:'@cart/ADD',
        product,
    };
}
