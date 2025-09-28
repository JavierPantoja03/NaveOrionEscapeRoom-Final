import { Routes } from '@angular/router';

// ✅ Importaciones de tus componentes standalone
import { EscapeRoom } from './escape-room/escape-room';
import { QueEsPensamientoComputacional } from './que-es-pensamiento-computacional/que-es-pensamiento-computacional';
import { IntroduccionChikosNet } from './introduccion-chikos-net/introduccion-chikos-net';

import { Actividad1 } from './actividad-1/actividad-1';
import { Actividad2 } from './actividad-2/actividad-2';
import { Actividad3 } from './actividad-3/actividad-3';
import { Actividad4 } from './actividad-4/actividad-4';
import { Actividad5 } from './actividad-5/actividad-5';

import { DescubristeLaPalabra } from './descubriste-la-palabra/descubriste-la-palabra';

// ✅ Definición de rutas standalone
export const routes: Routes = [
  { path: '', redirectTo: 'escape-room', pathMatch: 'full' },
  { path: 'escape-room', component: EscapeRoom },
  { path: 'que-es-pensamiento-computacional', component: QueEsPensamientoComputacional },
  { path: 'introduccion-chikos-net', component: IntroduccionChikosNet },

  // ✅ Actividades con guiones en la URL
  { path: 'actividad-1', component: Actividad1 },
  { path: 'actividad-2', component: Actividad2 },
  { path: 'actividad-3', component: Actividad3 },
  { path: 'actividad-4', component: Actividad4 },
  { path: 'actividad-5', component: Actividad5 },

  { path: 'descubriste-la-palabra', component: DescubristeLaPalabra },

  // ✅ Ruta comodín al Escape Room
  { path: '**', redirectTo: 'escape-room' }
];
