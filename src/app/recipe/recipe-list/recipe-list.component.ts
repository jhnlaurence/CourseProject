import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is a simply a test', 'https://images.immediate.co.uk/production/volatile/sites/30/2023/06/Ultraprocessed-food-58d54c3.jpg?quality=90&resize=440,400'),
    new Recipe('A Test Recipe1', 'This is a simply a test2', 'https://images.immediate.co.uk/production/volatile/sites/30/2023/06/Ultraprocessed-food-58d54c3.jpg?quality=90&resize=440,400'),
    new Recipe('A Test Recipe2', 'This is a simply a test3', 'https://images.immediate.co.uk/production/volatile/sites/30/2023/06/Ultraprocessed-food-58d54c3.jpg?quality=90&resize=440,400')
  ];
  @Output() recipe_selected = new EventEmitter<Recipe>;

  constructor(){}

  ngOnInit(){}

  selectedRecipe(event){
    this.recipe_selected.emit(event);
  }
  
}
