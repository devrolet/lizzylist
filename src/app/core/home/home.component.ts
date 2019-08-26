import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = 'Lilbit';
  name = 'Elizabeth Hill';
  desc = `Lilbit is a recipe book and shopping app built for my lovely wife Elizabeth Hill.
          This way she can get off my case about grocery shopping`;

  constructor() { }

  ngOnInit() {
  }

}
