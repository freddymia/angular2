import { Component } from "angular2/core";
import { Pelicula } from "./model/pelicula";

@Component({
    selector: 'my-app',
    templateUrl: "app/view/peliculas.html",
    styleUrls: ["../assets/css/styles.css"]
})

export class AppComponent {

    public titulo: string = "Peliculas con Angular 2";
    public pelicula: Pelicula;
    public mostrarDatos: boolean;
    public peliculas: Array<Pelicula>;

    constructor() {
        this.mostrarDatos = false;
        this.pelicula = new Pelicula(1, "Batman v Superman", "Zack Snyder", 2016);
        this.peliculas = [
            new Pelicula(1, "Toy Story ", "	John Lasseter", 1995),
            new Pelicula(2, "Amélie", "Jean-Pierre Jeunet", 2001),
            new Pelicula(3, "The Dark Knight", "Christopher Nolan", 2008),
            new Pelicula(4, "Fantastic Mr. Fox", "Wes Anderson", 2009),
            new Pelicula(5, "Interstellar ", "Christopher Nolan", 2014)
        ];
        this.debug();
    }

    debug(param = null) {
        if (param != null) {
            console.log(this.pelicula.titulo);
        } else {
            console.log(this.pelicula);
        }
    }

    onShowHide(value) {
        this.mostrarDatos = value;
    }


}
