import {EventEmitter, Injectable} from '@angular/core';

import {Recipe} from './recipe.model';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe('Chicken Schnitzel', 'The best chicken schnitzel ever', 'https://toriavey.com/images/2011/02/TOA20_06.jpg', [new Ingredient('Chicken breasts', 2), new Ingredient('Onions', 1)]),
    new Recipe('Big Fat Burger', 'What else you need to say ?', 'https://www.seriouseats.com/recipes/images/2014/09/20140918-jamie-olivers-comfort-food-insanity-burger-david-loftus-1500x1125.jpg', [new Ingredient('Buns', 2), new Ingredient('Meat', 1), new Ingredient('Pickles', 1)])
  ];

  recipeSelected = new EventEmitter<Recipe>();

  constructor(private shoppingListService: ShoppingListService) {
  }

  getRecipes(): Recipe[] {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]): void {
    this.shoppingListService.addIngredients(ingredients);
  }
}
