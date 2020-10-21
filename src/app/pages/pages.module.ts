import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { QuoteModule } from '../quote/quote.module';
import { NoteModule } from '../note/note/note.module';



@NgModule({
  declarations: [HomeComponent, AboutComponent, NotFoundComponent],
  imports: [
    CommonModule,
    QuoteModule,
    NoteModule
  ]
})
export class PagesModule { }
