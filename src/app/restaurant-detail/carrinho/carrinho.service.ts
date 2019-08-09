import { Carrinho } from "./carrinho.model";
import { MenuItem } from "../menu-item/menu-item.model";

export class CarrinhoService {

    items: Carrinho[] = []

    clear() {
        this.items = []
    }

    addItem(item: MenuItem) {
        let foundItem = this.items.find((mItem) => mItem.menuItem.id === item.id)
        if (foundItem) {
            foundItem.quantity = foundItem.quantity + 1
        } else {
            this.items.push(new Carrinho(item))
        }
    }

    removeItem(item: Carrinho) {
        this.items.splice(this.items.indexOf(item), 1)
    }

    total(): number {
        return this.items.map(item => item.value()).reduce((prev, value) => prev + value, 0)
    }
}