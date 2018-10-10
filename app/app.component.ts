import {Component} from 'angular2/core';
 
@Component({
    selector: 'my-app',
    templateUrl:"app/view/peliculas.html"
})
 
export class AppComponent { 
    public titulo:string = "Peliculas con Angular 2";
    public pelicula:string = "Batman vs Superman";
    public director:string = "Zack Snider";
    public anio:number = 2016;
}
