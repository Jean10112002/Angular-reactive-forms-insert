import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Output, EventEmitter } from '@angular/core';
export interface UsuariosI{
  nombre:string,
  apellido:string,
  cedula:string
}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})

export class FormComponent implements OnInit {
  @Output() newItemEvent = new EventEmitter<UsuariosI[]>();
  constructor(private fb:FormBuilder){}
  datosUsuario!:FormGroup
  ngOnInit():void{
    this.datosUsuario= this.fb.group({
      nombre:['',[Validators.required,Validators.minLength(5)]],
      apellido:['',[Validators.required,Validators.minLength(5)]],
      cedula:['',[Validators.required,Validators.pattern("^([0-9]{10,10})"),Validators.maxLength(10)]]    
    })
  }
  usuarios:UsuariosI[]=[]

  addUser(){
    this.usuarios.push(this.datosUsuario.value);
    this.newItemEvent.emit(this.usuarios)
  }
  OnClick():void{
    this.addUser()
    this.datosUsuario.reset()
  }
}
