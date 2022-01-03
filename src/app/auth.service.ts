import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  API_URL: string = 'http://localhost:3000/api';
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  public r: number=0;
  public valide: boolean = true;
  public valide1: boolean = false;
  public valide2: boolean = false;

  constructor( private httpClient: HttpClient) { }

  signup(user: User): Observable<any> {
    return this.httpClient.post(`${this.API_URL}/auth/signup`, user).pipe(
        catchError(this.handleError)
    )
  }
  signin(user:User): Observable<any> {
console.log(user);
    return this.httpClient.post(`${this.API_URL}/auth/login`, user).pipe(
        catchError(this.handleError)
    )
  }





  public Signclient(): void {

      
        this.valide = false;
        this.valide1 = true;
        this.valide2 = false;
   
  }

  public Signadmin(): void {

      
    this.valide = false;
    this.valide1 = false;
    this.valide2 = true;

}








  handleError(error: HttpErrorResponse) {
    let msg = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      msg = error.error.message;
    } else {
      // server-side error
      msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(msg);
  }

}
