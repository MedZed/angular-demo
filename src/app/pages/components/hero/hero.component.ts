import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  public greeting: string = "Hello";
  public user: string = "New user";



  public time = new Date();

 
  constructor() { }

  ngOnInit(): void {
    this.greet(this.time.getHours());

  //   setInterval(() => {
  //     this.time = new Date();
  //  }, 1000);

  }

  greet(hrs) {
    if (hrs < 12) {
      this.greeting = 'Good morning';
    } else if (hrs >= 12 && hrs <= 17) {
      this.greeting = 'Good afternoon';
    } else if (hrs >= 17 && hrs <= 24) {
      this.greeting = 'Good evening';
    }

  }



}
