import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService{
    ingredientList = new EventEmitter<Ingredient[]>();

    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10),
    ];

    getIngredients(){
        return this.ingredients.slice();
    }

    addIngredient(ingredient: Ingredient): void{
        this.ingredients.push(ingredient);
        this.ingredientList.emit(this.ingredients.slice());
    }

    addIngredients(ingredients: Ingredient[]): void{
        this.ingredients.push(...ingredients);
        this.ingredientList.emit(this.ingredients.slice());
    }
}