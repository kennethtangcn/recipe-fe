import { NgModule }														from '@angular/core';
import { BrowserModule }											from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule }		from '@angular/forms';
import { NgbModule }													from '@ng-bootstrap/ng-bootstrap';
import { HttpModule }													from '@angular/http';

import { AppComponent }												from './app.component';
import { HomeComponent } 											from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
 
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
		NavbarComponent
	],
	providers: [

	],
	bootstrap: [
		AppComponent
	]
})
export class AppModule {}


