import { Product } from "./product";

/**
 * name
 */
export class Location {
    locationID: string;
    description: string;
    productID: number;
    quantity: number;
    product: Product;
};