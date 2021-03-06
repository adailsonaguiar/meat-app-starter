import { BrowserModule } from '@angular/platform-browser'
import { NgModule, LOCALE_ID } from '@angular/core'
import { HttpModule } from '@angular/http'
import { RouterModule } from '@angular/router'
import { FormsModule } from '@angular/forms'

import { ROUTES } from './app.routes'

import { AppComponent } from './app.component'
import { HeaderComponent } from './header/header.component'
import { HomeComponent } from './home/home.component'
import { AbountComponent } from './abount/abount.component'
import { RestaurantsComponent } from './restaurants/restaurants.component'
import { RestaurantComponent } from './restaurants/restaurant/restaurant.component'
import { RestaurantsService } from './restaurants/restaurants.services'
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component'
import { MenuComponent } from './restaurant-detail/menu/menu.component'
import { CarrinhoComponent } from './restaurant-detail/carrinho/carrinho.component'
import { MenuItemComponent } from './restaurant-detail/menu-item/menu-item.component'
import { ReviewsComponent } from './restaurant-detail/reviews/reviews.component'
import { CarrinhoService } from './restaurant-detail/carrinho/carrinho.service'
import { OrderComponent } from './order/order.component'
import { InputComponent } from './shared/input/input.component';
import { RadioComponent } from './shared/radio/radio.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AbountComponent,
    RestaurantsComponent,
    RestaurantComponent,
    RestaurantDetailComponent,
    MenuComponent,
    CarrinhoComponent,
    MenuItemComponent,
    ReviewsComponent,
    OrderComponent,
    InputComponent,
    RadioComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(ROUTES),
    FormsModule
  ],
  providers: [
    RestaurantsService,
    CarrinhoService,
    { provide: LOCALE_ID, useValue: 'pt-BR' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
