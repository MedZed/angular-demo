import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public greeting: string = "Hello";
  public icon: string = "fa-sun";

  public hrs = (new Date()).getHours();

  constructor() { }

  ngOnInit(): void {
    this.greet(this.hrs);
  }

  greet(hrs) {
    if (hrs < 12) {
      this.greeting = 'Good morning';
    } else if (hrs >= 12 && hrs <= 17) {
      this.greeting = 'Good afternoon';
    } else if (hrs >= 17 && hrs <= 24) {
      this.greeting = 'Good evening';
      this.icon = 'fa-moon';
    }

  }


}
