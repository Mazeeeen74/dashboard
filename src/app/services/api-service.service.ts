import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  private BASE_URL = environment.apiUrl;

  constructor(private http : HttpClient) { }

  
  /*=============================================
  =            Error Handling             =
  =============================================*/
  private handleError(error: HttpErrorResponse) {
  if (error.status === 0) {
    // A client-side or network error occurred. Handle it accordingly.
    console.error('An error occurred:', error.error);
  } else {
    // The backend returned an unsuccessful response code.
    // The response body may contain clues as to what went wrong.
    console.error(
      `Backend returned code ${error.status}, body was: `, error.error);
  }
  // Return an observable with a user-facing error message.
  return throwError(() => new Error('Something bad happened; please try again later.'));
}
  
  
  /*=====  End of Error Handling   ======*/



/*=============================================
=            products Section            =
=============================================*/
getAllProducts(): Observable<any> {
  return this.http.get(`${this.BASE_URL}/products`).pipe(
    retry(2),
    catchError(this.handleError)
  );
}


/*=====  End of products Section  ======*/


}
