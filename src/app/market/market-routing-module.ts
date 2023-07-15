import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MarketPageComponent } from "./market-page.component";
import { MarketViewComponent } from "./components/market-view/market-view.component";
import { OrderListComponent } from "./components/order-list/order-list.component";


const routes: Routes = [
    {
        path: "",
        component: MarketPageComponent,
        children: [
            {
                path: 'Market',
                component: MarketViewComponent,
            },
            {
                path: 'Order',
                component: OrderListComponent,
            },
            {
                path: "",
                redirectTo: 'Market',
                pathMatch: "full",
            }
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class MarketRoutingModule { }
