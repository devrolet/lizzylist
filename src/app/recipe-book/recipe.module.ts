import { NgModule } from '@angular/core';
import { RecipeBookComponent } from 'src/app/recipe-book/recipe-book.component';
import { RecipeStartComponent } from 'src/app/recipe-book/recipe-start/recipe-start.component';
import { RecipeListComponent } from 'src/app/recipe-book/recipe-list/recipe-list.component';
import { RecipeEditComponent } from 'src/app/recipe-book/recipe-edit/recipe-edit.component';
import { RecipeDetailComponent } from 'src/app/recipe-book/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from 'src/app/recipe-book/recipe-item/recipe-item.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RecipesRoutingModule } from './recipes-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
    declarations: [
        RecipeBookComponent,
        RecipeStartComponent,
        RecipeListComponent,
        RecipeEditComponent,
        RecipeDetailComponent,
        RecipeItemComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RecipesRoutingModule,
        SharedModule
    ]
})
export class RecipesModule {

}
