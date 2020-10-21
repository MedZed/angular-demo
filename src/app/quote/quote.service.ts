import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Quote } from '../models/quote';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {
  apiUrl = 'https://api.quotable.io/random';


  constructor(private http: HttpClient) { }

  getQuote():Observable<Quote>{
    return this.http.get<Quote>(this.apiUrl);
  };


 
}
