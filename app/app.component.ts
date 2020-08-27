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

  paquetes = [
    {
      titulo  : 'Básico',
      currency :  'USD',
      precio  : 100,
      mes     : 'mes',
      d1      : 'Redes Sociales',
      d2      : 'Branding',
      d3      : 'Diseño de imagen',
      d4      : '-',
    },
    {
      titulo  : 'Recomendado',
      currency :  'PEN',
      precio  : 200,
      mes     : 'mes',
      d1      : 'Redes Sociales',
      d2      : 'Branding',
      d3      : 'Diseño de imagen',
      d4      : 'Video',
    },
    {
      titulo  : 'Avanzado',
      currency :  'EUR',
      precio  : 300,
      mes     : 'mes',
      d1      : 'Redes Sociales',
      d2      : 'Branding',
      d3      : 'Imagen/Video',
      d4      : 'Community Manager',
    },
  ];
}
