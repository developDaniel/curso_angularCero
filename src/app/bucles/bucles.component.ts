import { Component, OnInit } from '@angular/core';
import { persona } from '../persona'; //Se agrega para llamar a la interface

@Component({
  selector: 'app-bucles',
  templateUrl: './bucles.component.html',
  styleUrls: ['./bucles.component.css']
})
export class BuclesComponent implements OnInit {

  personas: persona[] = [
    {nombre: "Juan", edad : 30},
    {nombre: "Ana", edad : 25},
    {nombre: "richard", edad : 24},
    {nombre: "Daniel", edad : 42}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
