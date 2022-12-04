import { Component, Input } from '@angular/core';
import { UsuariosI } from '../form/form.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  @Input() usuariosDatos!:UsuariosI[]
}
