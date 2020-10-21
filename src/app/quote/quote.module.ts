import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuoteService } from './quote.service';
import { QuoteComponent } from './components/quote/quote.component';
import { SavedQuotesComponent } from './components/saved-quotes/saved-quotes.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [QuoteComponent, SavedQuotesComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[QuoteComponent],
  providers:[
    QuoteService
  ]
})
export class QuoteModule { }
