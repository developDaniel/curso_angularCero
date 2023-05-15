import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-children',
  templateUrl: './children.component.html',
  styleUrls: ['./children.component.css']
})
export class ChildrenComponent implements OnInit {

  constructor() { }
  @Input() title?: string; //Para recibir el parametro desde un componente padre.

  ngOnInit(): void {
  }

}
