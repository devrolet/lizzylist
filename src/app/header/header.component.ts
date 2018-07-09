import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title = 'LizzyList';
  name = 'Elizabeth Hill';
  desc = `LizzyList is a recipe book and shopping app built for my lovely wife Elizabeth Hill. This way she can get off my case about grocery shopping`;

  @Output() featureSelected = new EventEmitter<string>();
  onSelect(feature: string) {
    this.featureSelected.emit(feature);
  }

  constructor() { }

  ngOnInit() {
  }

}
