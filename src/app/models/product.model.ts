export class ProductModel {
    public productID: number;
    public name: string;
    public price: number;
    public description: string;
    constructor(productID: number, name: string, price: number, description: string) {
        this.productID = productID;
        this.name = name;
        this.price = price;
        this.description = description;
    }
}