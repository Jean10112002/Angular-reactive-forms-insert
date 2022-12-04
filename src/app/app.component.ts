import { Component } from '@angular/core';
import { UsuariosI } from './form/form.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  usuarios:UsuariosI[]=[]
  addItem(event:UsuariosI[]){
    this.usuarios=event
  }
}
