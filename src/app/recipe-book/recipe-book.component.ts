import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/recipe-book/recipe.model';
import { RecipeService } from 'src/app/shared/recipe.service';

@Component({
  selector: 'app-recipe-book',
  templateUrl: './recipe-book.component.html',
  styleUrls: ['./recipe-book.component.css'],
  providers: [RecipeService]
})
export class RecipeBookComponent implements OnInit {
  selectedRecipe: Recipe;

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipeService.recipeSelected
      .subscribe(
        (recipe: Recipe) => {
          this.selectedRecipe = recipe;
        });
  }

}
