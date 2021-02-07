import { Injectable } from "@angular/core";

@Injectable()
export class ShopService {
    public items: ShopItem[];
    public cart: ShopItem[] = [];

    constructor() {
        this.createTestProducts();
    }

    public addProductToCart(item: ShopItem) {
        this.cart.push(item);
    }

    private createTestProducts() {
        this.items = [
            {
                id: 1,
                name: 'gludeklis',
                price: 30,
                description: 'karsts'
            },
            {
                id: 2,
                name: 'maize',
                price: 0.80,
                description: 'rudzu'
            },
            {
                id: 3,
                name: 'piens',
                price: 1.5,
                description: '3%'
            }
        ];
    }
}

export interface ShopItem {
    id: number;
    name: string;
    price: number;
    description: string;
}

