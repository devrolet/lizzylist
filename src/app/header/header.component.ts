import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  title = 'LizzyList';
  name = 'Elizabeth Hill';
  desc = `LizzyList is a recipe book and shopping app built for my lovely wife Elizabeth Hill.
          This way she can get off my case about grocery shopping`;

}
