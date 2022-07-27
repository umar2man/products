import { changeAmountFunc, numberVoidFunc, ProductsArrayType, textVoidFunc } from "../../types/types";

export interface CartType {
	cartProducts: ProductsArrayType;
	totalPrice: number;
}

export interface AppState {
	text: string;
	products: ProductsArrayType;
	cart: CartType;
}

export interface AppAction {
	changeText: textVoidFunc;
	toogleProductToCart: numberVoidFunc;
	changeProductAmount: changeAmountFunc;
}

export interface ProductsContextValue {
	state: AppState;
	appAction: AppAction;
}