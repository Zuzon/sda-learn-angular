import { Component } from "@angular/core";
import { ShopService } from "../services/shop.service";

@Component({
    selector: 'app-shop',
    templateUrl: './shop.component.html',
    styleUrls: ['./shop.component.scss']
})
export class ShopComponent {
    constructor(public shopService: ShopService) {}
}
