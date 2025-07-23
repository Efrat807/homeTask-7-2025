import type { IProduct } from "../../models";
import type { ICartItem } from "../../types/order";

// export interface ICartItem {
//     product: IProduct;
//     categoryName: string;
// }

export interface ICartState {
    [categoryName: string]: ICartItem[];
}
export interface IAddToCartPayload {
    categoryName: string;
    productName: string;
    quantity: number;
}