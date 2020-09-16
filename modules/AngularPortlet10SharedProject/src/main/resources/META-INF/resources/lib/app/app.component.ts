import { Component } from '@angular/core';

//@ts-ignore
import  { init, init2 }  from 'angular.shared.bundle';

export class Hero {
	id!: number;
	name!: string;
}

@Component({
	template: `
	<h1>{{title}}</h1>
	<h2>{{hero.name}} details!</h2>
	<div><label>id: </label>{{hero.id}}</div>
	<div>
		<label>name: </label>
		<input [(ngModel)]="hero.name" placeholder="name">
	</div>
	`,
})
export class AppComponent {
	hero: Hero = {
		id: 1,
		name: 'Windstorm'
	};
	title = 'Tour of Heroes';

	constructor(){
	    init();
	}
}