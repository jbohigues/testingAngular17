import { Routes } from '@angular/router';
import { CounterComponent } from './components/counter/counter.component';
import { CharizardComponent } from './components/charizard/charizard.component';

export const routes: Routes = [
  {
    path: 'counter',
    component: CounterComponent,
  },
  {
    path: 'charizard',
    component: CharizardComponent,
  },
  {
    path: '**',
    redirectTo: 'counter',
  },
];
