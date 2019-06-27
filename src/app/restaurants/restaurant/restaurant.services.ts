import { Restaurant } from './restaurant.model'
import { MEAT_API } from '../../app.api'
import { Http } from '@angular/http'
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import { ErrorHandler } from '../../app.error-handler'

@Injectable()
export class RestaurantService {

    constructor(private http: Http) { }

    restaurants(): Observable<Restaurant[]> {
        return this.http.get(`${MEAT_API}/restaurants`)
            .map(response => response.json())
            ._catch(ErrorHandler.handleError)
    }
}