import {Injectable} from '@angular/core';

import {Recipe} from './recipe.model';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';
import {Subject} from 'rxjs';

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();
  private recipes: Recipe[] = [
    new Recipe(1, 'Chicken Schnitzel', 'The best chicken schnitzel ever', 'https://toriavey.com/images/2011/02/TOA20_06.jpg', [new Ingredient('Chicken breasts', 2), new Ingredient('Onions', 1)]),
    new Recipe(2, 'Big Fat Burger', 'What else you need to say ?', 'https://www.seriouseats.com/recipes/images/2014/09/20140918-jamie-olivers-comfort-food-insanity-burger-david-loftus-1500x1125.jpg', [new Ingredient('Buns', 2), new Ingredient('Meat', 1), new Ingredient('Pickles', 1)])
  ];

  constructor(private shoppingListService: ShoppingListService) {
  }

  getRecipes(): Recipe[] {
    return this.recipes.slice();
  }

  getRecipe(id: number): Recipe {
    const recipe = this.recipes.find((r) => r.id === id);
    return recipe;
  }

  addRecipe(recipe: Recipe): void {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(id: number, newRecipe: Recipe): void {
    const index = this.recipes.indexOf(this.recipes.find((r) => r.id === id));
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());

  }

  deleteRecipe(recipe: Recipe): void {
    const index = this.recipes.indexOf(recipe);
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]): void {
    this.shoppingListService.addIngredients(ingredients);
  }
}
