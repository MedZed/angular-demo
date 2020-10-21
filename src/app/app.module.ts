import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { PagesModule } from './pages/pages.module';
import { NoteModule } from './note/note/note.module';
 

@NgModule({
  declarations: [
    AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    PagesModule,
  NoteModule  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }