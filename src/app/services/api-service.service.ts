import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  private BASE_URL = environment.apiUrl;

  constructor(private http : HttpClient) { }


/*=============================================
=            products Section            =
=============================================*/
getAllProducts(): Observable<any> {
  return this.http.get(`${this.BASE_URL}/products`);
}


/*=====  End of products Section  ======*/


}
