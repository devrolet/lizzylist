import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { RecipeService } from 'src/app/shared/recipe.service';
import { Recipe } from 'src/app/recipe-book/recipe.model';
import 'rxjs/add/operator/map';

@Injectable()
export class DataStorageService {

  constructor(private http: Http, private recipeService: RecipeService) { }

  storeRecipes() {
    return this.http.put('Enter DB URL here', this.recipeService.getRecipes());
  }

  getRecipes() {
    this.http.get('Enter DB URL here')
      .map(
        (response: Response) => {
          const recipes: Recipe[] = response.json();
          for (let recipe of recipes) {
            if (!recipe['ingredients']) {
              console.log(recipe);
              recipe['ingredients'] = [];
            }
          }
          return recipes;
        }
      )
      .subscribe(
        (recipes: Recipe[]) => {
          this.recipeService.setRecipes(recipes);
        }
      );
  }
}
