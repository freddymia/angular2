import {Component} from 'angular2/core';
 
@Component({
    selector: 'my-app',
    template: `<h1>{{titulo}}</h1>
               <ul>
               <li>Titulo:<strong>{{pelicula}}</strong></li>
               <li>Director:<strong>{{director}}</strong></li>
               <li>Año:<strong>{{anio}}</strong></li>
               </ul>     
               `
})
 
export class AppComponent { 
    public titulo = "Peliculas con Angular 2";
    pelicula = "Batman vs Superman";
    director = "Zack Snider";
    anio = "2016";
}
