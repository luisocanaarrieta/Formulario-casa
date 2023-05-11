
import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})

export class FormularioComponent {
  Next=0;
  Siguiente(){
    this.Next+=1;
  }

  Retroceder(){
    this.Next-=1;
  }
}
