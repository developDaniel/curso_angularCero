import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-botones',
  templateUrl: './botones.component.html',
  styleUrls: ['./botones.component.css']
})
export class BotonesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  text_color:string = "";

  buton_disabled:boolean = false; 

}
