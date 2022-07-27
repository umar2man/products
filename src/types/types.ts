export type textVoidFunc = (text: string) => void;
export type numberVoidFunc = (id: number) => void;
export type changeAmountFunc = (id: number, type: boolean) => void;
export type ProductsArrayType = IProduct[];

export interface IProduct {
  id: number,
  title: string,
  img: string,
  price: number,
  quantity: number,
  amount?: number,
}