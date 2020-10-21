import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from '../app-routing.module';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { NavComponent } from './components/layout/nav/nav.component';



@NgModule({
  declarations: [HeaderComponent, FooterComponent, NavComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    HttpClientModule  ],
  exports:[HeaderComponent, FooterComponent, NavComponent],
  providers:[
    
  ]
})
export class CoreModule { }
