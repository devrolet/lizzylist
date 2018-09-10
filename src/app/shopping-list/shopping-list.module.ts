import { NgModule } from '@angular/core';
import { ShoppingListComponent } from 'src/app/shopping-list/shopping-list.component';
import { ShoppingListEditComponent } from 'src/app/shopping-list/shopping-list-edit/shopping-list-edit.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        ShoppingListComponent,
        ShoppingListEditComponent
    ],
    imports: [
        CommonModule,
        FormsModule
    ]
})
export class ShoppingListModule {}
