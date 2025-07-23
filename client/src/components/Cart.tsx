import { useAppSelector } from "../app/hooks";

const Cart = ()=>{
const cart = useAppSelector(state => state.cart);
console.log('cart: ', cart);

return (
    Object.entries(cart).map(([category, products]) => (
    <div key={category}>
        <h4>{category}</h4>
        <ul>
            {products.map(p => (
                <li key={p.product.id}>
                    {p.product.name} – {p.quantity}
                </li>
            ))}
        </ul>
    </div>
))
)

}
export default Cart;