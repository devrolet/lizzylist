import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ShoppingDetailComponent } from './shopping-list/shopping-detail/shopping-detail.component';
import { RecipeService } from './shared/recipe.service';
import { ShoppingService } from './shared/shopping.service';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { DataStorageService } from 'src/app/shared/data-storage.service';
import { AuthService } from 'src/app/auth/auth.service';
import { AuthGuard } from 'src/app/auth/auth-guard.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { ShoppingListModule } from 'src/app/shopping-list/shopping-list.module';
import { AuthModule } from 'src/app/auth/auth.module';
import { CoreModule } from 'src/app/core/core.module';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    SharedModule,
    ShoppingListModule,
    AuthModule,
    CoreModule
  ],
  providers: [RecipeService,
              ShoppingService,
              DataStorageService,
              AuthService,
              AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
