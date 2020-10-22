import { Component, OnInit, Input } from '@angular/core';
import { Quote } from 'src/app/models/quote';
import { QuoteService } from '../../quote.service';

@Component({
  selector: 'app-saved-quotes',
  templateUrl: './saved-quotes.component.html',
  styleUrls: ['./saved-quotes.component.css']
})
export class SavedQuotesComponent implements OnInit {
  @Input() quote: Quote;
  quotes: Quote[] = [];

  constructor(private quoteservice: QuoteService) { }
 

  ngOnInit(): void {
     this.quoteservice.cast.subscribe(quotes => this.quotes = quotes);
  }
  

  delete_dialog_id:string;
  show_delete_dialog:boolean;

  onItemClick(event, item) {
    this.delete_dialog_id = item;
    this.show_delete_dialog = true;
 }

 onConfirmButton(event, item) {
  if(item){
    let index = JSON.parse(localStorage.getItem('quotes')).findIndex(x => x._id === this.delete_dialog_id );
    this.quotes = JSON.parse(localStorage.getItem('quotes'));
    this.quotes.splice(index, 1);
    localStorage.setItem('quotes', JSON.stringify(this.quotes));
    this.delete_dialog_id = "";
    this.show_delete_dialog = false;
    this.quotes = JSON.parse(localStorage.getItem('quotes'));
  }else{
    this.delete_dialog_id = "";
    this.show_delete_dialog = false;
  }
}


}
