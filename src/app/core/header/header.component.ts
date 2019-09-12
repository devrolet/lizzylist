import { Component } from '@angular/core';
import { Response } from '@angular/http';
import { DataStorageService } from 'src/app/shared/data-storage.service';
import { AuthService } from 'src/app/auth/auth.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  // title = 'LizzyList';
  // name = 'Elizabeth Hill';
  // desc = `LizzyList is a recipe book and shopping app built for my lovely wife Elizabeth Hill.
  //         This way she can get off my case about grocery shopping`;
  constructor(private dataStorageService: DataStorageService,
              private authService: AuthService) {}

  onSaveData() {
    this.dataStorageService.storeRecipes()
      .subscribe(
        (response: Response) => {
          console.log(response);
        }
      );
  }

  onFetchData() {
    this.dataStorageService.getRecipes();
  }

  onLogout() {
    this.authService.logout();
  }
}
