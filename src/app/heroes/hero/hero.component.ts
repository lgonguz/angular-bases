import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  public name: string = 'supergirl';
  public age: number = 35;

  //Propiedad
  get capitalizedName(): string {
    return this.name.toUpperCase();
  }
  //Metodo
  //si se pone private solo valdría aquí
  public getHeroDescription(): string {

    return`${this.name} - ${this.age}`;
  }

  changeHero():void{
    this.name = "Manolito";

    // throw 'Método sin terminar'
  }

  changeEdad():void{
    this.age = 20;
  }

  resetForm():void{
    this.name='supergirl';
    this.age=35;

    //ESTÁN FUERA DEL CICLO DE DETECCIÓN DE ANGULAR
    // document.querySelector('h1')!.innerHTML = '<h1>Hola Angular</h1>';
    // document.querySelectorAll('h1')!.forEach(element =>{
    //   element.innerHTML = '<h1>Hola Angular</h1>';
    // })
  }

}
