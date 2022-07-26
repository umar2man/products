export type textVoidFunc = (text: string) => void;
export type numberVoidFunc = (text: number) => void;
export type ProductsArrayType = IProduct[];

export interface IProduct {
  id: number,
  title: string,
  img: string,
  price: number,
  left: number,
  amount?: number,
}