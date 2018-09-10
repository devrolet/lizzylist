import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { AuthGuard } from 'src/app/auth/auth-guard.service';
import { HomeComponent } from 'src/app/core/home/home.component';

const appRoutes: Routes = [
    {path: '', component: HomeComponent },
    {path: 'recipes', loadChildren: './recipe-book/recipe.module#RecipesModule'},
    {path: 'shopping-list', component: ShoppingListComponent }
];
@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
