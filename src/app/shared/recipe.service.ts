import { Injectable} from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Recipe } from '../recipe-book/recipe.model';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingService } from 'src/app/shared/shopping.service';

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
    // new Recipe(
    //   'Grilled Tri-Tip Roast',
    //   'This is a test',
    //   'https://www.maxpixel.net/static/photo/1x/Cooking-Meat-Recipe-Dinner-Restaurant-Grill-Beef-2508859.jpg',
    //   [
    //     new Ingredient('Tri-Tip Roast', 1),
    //     new Ingredient('Meat Rub', 1)
    //   ]),
    // new Recipe(
    //   'Baked Smackn Cheese',
    //   'This is a test',
    //   'https://www.maxpixel.net/static/photo/1x/Cooking-Meat-Recipe-Dinner-Restaurant-Grill-Beef-2508859.jpg',
    //   [
    //     new Ingredient('Macaroni Noodles', 1),
    //     new Ingredient('Cheddar Cheese', 1),
    //     new Ingredient('Velvetta', 2)
    //   ]),
    // new Recipe(
    //   'Collard Greens with Smoked Turkey',
    //   'This is a test',
    //   'https://www.maxpixel.net/static/photo/1x/Cooking-Meat-Recipe-Dinner-Restaurant-Grill-Beef-2508859.jpg',
    //   [
    //     new Ingredient('Collard Greens', 6),
    //     new Ingredient('Smoked Turkey Legs', 2)
    //   ])
  ];

  constructor(private shoppingService: ShoppingService) { }

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
