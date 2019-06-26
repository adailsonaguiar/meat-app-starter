import { Routes } from '@angular/router'
import { HomeComponent } from './home/home.component';
import { AbountComponent } from './abount/abount.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';

export const ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'about', component: AbountComponent },
    { path: 'restaurants', component: RestaurantsComponent }
]