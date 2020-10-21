import { Component, OnInit, Input } from '@angular/core';
import { Quote } from 'src/app/models/quote';
import { QuoteService } from '../../quote.service';


@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  constructor(private QuoteService: QuoteService) {
  }




  




  //Quote Model
  @Input() quote: Quote;

  // Saved Quotes
  quotes: Quote[] = JSON.parse(localStorage.getItem('quotes'));

  //Displaying loading text
  loading: boolean = false;
// Image from unsplash
  img: string = "https://source.unsplash.com/collection/8469893/720x480";
  timeStamp: number;

  //The save button text
  save_button_text: string;
  save_button_title: string;

  // Get a new quote
  getNewQuote() {
     this.loading = true;

    this.QuoteService.getQuote().subscribe(quote => {
      this.quote = quote;
      localStorage.setItem('quote', JSON.stringify(this.quote));
      this.loading = false;
      this.resetSaveButton()

    });

    this.img = this.getLinkPicture();

     }

 

getLinkPicture() {
    this.timeStamp = (new Date()).getTime();
    return this.img + '?' + this.timeStamp;
}


  ngOnInit(): void {

    if(localStorage.getItem('quotes') === null){ 
      this.quotes = [];
      localStorage.setItem('quotes', JSON.stringify(this.quotes));
  }

    if (localStorage.getItem('quote') === null) {
      this.getNewQuote();

    } else {
      this.quote = JSON.parse(localStorage.getItem('quote'));
      this.resetSaveButton()
    }

  };

  resetSaveButton() {
    if (localStorage.getItem('quotes') === null) {
        this.save_button_text = "far";
        this.save_button_title = "Save ";

    } else {
      if (JSON.parse(localStorage.getItem('quotes')).some(quote => quote._id === this.quote._id)) {
        this.save_button_text = "fas"
        this.save_button_title = "Unsave ";

      } else {
        this.save_button_text = "far"
        this.save_button_title = "Save ";

      }
    }
  }

  // BUTTON EVENTS
  onGetQuote() {
    this.getNewQuote();
  };


  onSave() {

    if (Array.isArray(JSON.parse(localStorage.getItem('quotes'))) && JSON.parse(localStorage.getItem('quotes')).length) {

      let index = JSON.parse(localStorage.getItem('quotes')).findIndex(x => x._id === this.quote._id);

      if (index > -1) {
        this.quotes.splice(index, 1);
        localStorage.setItem('quotes', JSON.stringify(this.quotes));
      } else {
        this.quotes = JSON.parse(localStorage.getItem('quotes'));
        this.quotes.push(this.quote);
        localStorage.setItem('quotes', JSON.stringify(this.quotes));
      }
    } else {
      this.quotes.push(this.quote);
      localStorage.setItem('quotes', JSON.stringify(this.quotes));
    }
    console.log(JSON.parse(localStorage.getItem('quotes')));
    this.resetSaveButton()
  }



 



}
