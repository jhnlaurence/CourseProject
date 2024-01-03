import { EventEmitter, Injectable } from "@angular/core";

import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()

export class RecipeService{
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
            'Burger',
            'Juicy and delicious',
            'https://images.immediate.co.uk/production/volatile/sites/30/2023/06/Ultraprocessed-food-58d54c3.jpg?quality=90&resize=440,400',
            [
                new Ingredient('Meat', 1),
                new Ingredient('Fries', 20),
            ]),
        new Recipe(
            'Good Bread',
            'Soft and hot damn!',
            'https://images.immediate.co.uk/production/volatile/sites/30/2023/06/Ultraprocessed-food-58d54c3.jpg?quality=90&resize=440,400',
            [
                new Ingredient('Meat', 1),
                new Ingredient('Bread', 2),
            ])
    ];

    constructor(private slService: ShoppingListService){}

    getRecipes(){
        return this.recipes.slice();
    }

    addToShoppingList(ingredient: Ingredient[]): void{
        this.slService.addIngredients(ingredient);
    }
}