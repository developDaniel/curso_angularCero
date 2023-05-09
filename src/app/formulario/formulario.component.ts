import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  openAlert: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  mostrar_consola(name: string)
  {
    this.openAlert = true;
    console.log(name);
  }

}
