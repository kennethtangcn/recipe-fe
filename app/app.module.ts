import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';

import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeService } from './recipes/recipe.service';

import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingListAddComponent } from './shopping-list/shopping-list-add.component';
import { ShoppingListService } from './shopping-list/shopping-list.service';

import { AppRoutingModule } from './app-routing.module'; // AppRoutingModule come last!

@NgModule({
	imports: [
		BrowserModule,
		FormsModule,
		ReactiveFormsModule,
		NgbModule.forRoot(),
		HttpModule,
		AppRoutingModule
	],
	declarations: [
		AppComponent,
		HomeComponent,
		NavbarComponent,
		RecipesComponent,
		RecipeListComponent,
		RecipeItemComponent,
		RecipeDetailComponent,
		ShoppingListComponent,
		ShoppingListAddComponent
	],
	providers: [
		RecipeService,
		ShoppingListService
	],
	bootstrap: [
		AppComponent
	]
})
export class AppModule {}


