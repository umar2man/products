import { IProduct } from "../../types/types";

export interface PortalProps {
	closeModalWindow: (e: React.MouseEvent) => void;
	item: IProduct;
}