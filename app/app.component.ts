import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'filtros';

  nombre_empresa = 'marketing digital';
  titulo = 'paquetes';
  fecha = new Date();

  currency1 = 100;
  currency2 = 200;
  currency3 = 300;

  periodo = 'Mes';
}
