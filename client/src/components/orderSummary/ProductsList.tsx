import { useAppSelector } from "../../app/hooks";
import { cellStyle } from "./stylesheets";

const ProductsList = () => {
    // const cartItems = useAppSelector((state) => state.cart.items);
const cart = useAppSelector(state => state.cart);
const allItems = Object.values(cart).flat(); // ICartItem[]
const totalPrice = allItems.reduce(
  (sum, item) => sum + item.quantity * item.product.price,
  0
);
    return (
        <div>        
            <h3> מוצרים שהוזמנו</h3>
           <table style={{ width: '100%', borderCollapse: 'collapse', direction: 'rtl' }}>
            <thead>
              <tr style={{ backgroundColor: '#f0f0f0' }}>
                <th style={cellStyle}>מוצר</th>
                <th style={cellStyle}>כמות</th>
                <th style={cellStyle}>מחיר ליחידה</th>
                <th style={cellStyle}>סה״כ</th>
              </tr>
            </thead>
            <tbody>
              {allItems.map((item) => (
                <tr key={item.product.id}>
                  <td style={cellStyle}>{item.product.name}</td>
                  <td style={cellStyle}>{item.quantity}</td>
                  <td style={cellStyle}>₪{item.product.price.toFixed(2)}</td>
                  <td style={cellStyle}>₪{(item.quantity * item.product.price).toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr style={{ fontWeight: 'bold', backgroundColor: '#f9f9f9' }}>
                <td colSpan={3} style={cellStyle}>סה״כ לתשלום</td>
                <td style={cellStyle}>₪{totalPrice.toFixed(2)}</td>
              </tr>
            </tfoot>
          </table>
        </div>
    );
}
export default ProductsList;