import { Injectable } from '@angular/core';

import { Recipe } from './recipe';
import { Ingredient } from '../shared/ingredients';

@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe('Schnitzel', 'Very tasty', 'https://cdn.pbrd.co/images/B5sGWEHSJ.jpg', [
      new Ingredient('French Fries', 2),
      new Ingredient('Pork Meat', 1)
    ]),
    new Recipe('Summer Salad', 'Okayish', 'https://cdn.pbrd.co/images/B5ulyGSLj.jpg', [])
  ];

  constructor() {}

  getRecipes() {
    return this.recipes;
  }
}