import { Component, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent {
  @Input('recipe_to_display') recipe: Recipe;

  constructor(private recipeService: RecipeService){}

  toShoppingList(){
    this.recipeService.addToShoppingList(this.recipe.ingredients);
  }
}
