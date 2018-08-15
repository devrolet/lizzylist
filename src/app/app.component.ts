import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedFeature = 'recipe';

  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyCrXPd4th_wTphG9Na6xNgsDpA5wBk6PuA',
      authDomain: 'lizzylist-a5830.firebaseapp.com'
  });
  }

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
