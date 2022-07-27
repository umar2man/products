import { changeAmountFunc, IProduct, numberVoidFunc } from "../../types/types";

export interface CadProps {
	item: IProduct;
	itemAmount: number | undefined;
	// "undefined" because "amount" can be empty, because this field is only added if the item is added to the cart
}

export interface CardState {
	inCart: boolean;
	modalView: boolean;
}