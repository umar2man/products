import { ProductsArrayType } from "../../types/types";

export interface CardListProps {
	products: ProductsArrayType;
	cartProducts: ProductsArrayType;
	keyWord: string;
}