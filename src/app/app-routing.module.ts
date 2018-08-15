import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipeBookComponent } from './recipe-book/recipe-book.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeStartComponent } from './recipe-book/recipe-start/recipe-start.component';
import { RecipeDetailComponent } from 'src/app/recipe-book/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from 'src/app/recipe-book/recipe-edit/recipe-edit.component';
import { SignupComponent } from 'src/app/auth/signup/signup.component';
import { SigninComponent } from 'src/app/auth/signin/signin.component';

const appRoutes: Routes = [
    {path: '', redirectTo: '/recipes', pathMatch: 'full' },
    {path: 'recipes', component: RecipeBookComponent, children: [
        { path: '', component: RecipeStartComponent },
        { path: 'new', component: RecipeEditComponent },
        { path: ':id', component: RecipeDetailComponent },
        { path: ':id/edit', component: RecipeEditComponent }
    ] },
    {path: 'shopping-list', component: ShoppingListComponent },
    {path: 'signup', component: SignupComponent},
    {path: 'signin', component: SigninComponent}
];
@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
