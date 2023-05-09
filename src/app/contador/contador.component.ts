import { Component, OnInit } from '@angular/core';
import { persona } from '../persona';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // nombreSuper:string = 'CESAR GONZALEZ'

  // persona:persona = {
  //   nombre: 'Cesar Gonzalez',
  //   edad: 41
  // };
  
  numero: number = 1;
  decremenar (){
    this.numero--;
  }

  incrementar(){
    this.numero++;
  }

}
