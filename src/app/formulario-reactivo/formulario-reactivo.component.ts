import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-formulario-reactivo',
  templateUrl: './formulario-reactivo.component.html',
  styleUrls: ['./formulario-reactivo.component.css']
})
export class FormularioReactivoComponent implements OnInit {

  constructor() {

    
   }

  ngOnInit(): void {
  }

  get getname(){
    return this.formUser.get('name') as FormControl;
  }

  get getemail(){
    return this.formUser.get('email') as FormControl;
  }

  formUser = new FormGroup({
    'name' : new FormControl("",Validators.required),
    'email' : new FormControl("",[Validators.required,Validators.email])
  });

  procesar()
  {
    console.log(this.formUser.value);
  }

  // name = new FormControl("",Validators.required);
  // email = new FormControl("",[Validators.required,Validators.email]);

}
