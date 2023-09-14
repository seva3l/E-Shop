import IProduct from "./Product";

export default interface ICart {
  item: IProduct;
  quantity: number;
}
