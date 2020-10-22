import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, Observable } from 'rxjs';
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

  private localQuotes = new BehaviorSubject<Quote[]>(JSON.parse(localStorage.getItem('quotes')));
  cast = this.localQuotes.asObservable();


  setSavedQuotes(quote:Quote, quotes:Quote[]){
    if (Array.isArray(JSON.parse(localStorage.getItem('quotes'))) && JSON.parse(localStorage.getItem('quotes')).length) {

      let index = JSON.parse(localStorage.getItem('quotes')).findIndex(x => x._id === quote._id);

      if (index > -1) {
        quotes.splice(index, 1);
        localStorage.setItem('quotes', JSON.stringify(quotes));
      } else {
        quotes = JSON.parse(localStorage.getItem('quotes'));
        quotes.push(quote);
        localStorage.setItem('quotes', JSON.stringify(quotes));
      }
    } else {
      quotes.push(quote);
      localStorage.setItem('quotes', JSON.stringify(quotes));
    }
    this.localQuotes.next(JSON.parse(localStorage.getItem('quotes')));
   } 
}
