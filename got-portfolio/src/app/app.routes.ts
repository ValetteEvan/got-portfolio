import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./components/home/home').then(m => m.Home),
    title: 'Game of Thrones'
  },
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {
    path: 'countries',
    children: [
      {
        path: 'cities',
        loadComponent: () => import('./components/cities/cities').then(m => m.Cities),
        title: 'Cities',
        data: {
          title: 'Cities',
          cities: [
            { id: 1, name: 'Paris', inhabitants: 2161000, typicalDish: 'Croissant', currency: 'EUR', flag: '🇫🇷' },
            { id: 2, name: 'Lyon', inhabitants: 522000, typicalDish: 'Quenelles', currency: 'EUR', flag: '🇫🇷' },
            { id: 3, name: 'Marseille', inhabitants: 873000, typicalDish: 'Bouillabaisse', currency: 'EUR', flag: '🇫🇷' },
            { id: 4, name: 'New York', inhabitants: 8336000, typicalDish: 'New York-style pizza', currency: 'USD', flag: '🇺🇸' },
            { id: 5, name: 'Los Angeles', inhabitants: 3899000, typicalDish: 'Tacos', currency: 'USD', flag: '🇺🇸' },
            { id: 6, name: 'Chicago', inhabitants: 2660000, typicalDish: 'Deep-dish pizza', currency: 'USD', flag: '🇺🇸' },
            { id: 7, name: 'Berlin', inhabitants: 3755000, typicalDish: 'Currywurst', currency: 'EUR', flag: '🇩🇪' },
            { id: 8, name: 'Munich', inhabitants: 1510000, typicalDish: 'Weißwurst', currency: 'EUR', flag: '🇩🇪' },
            { id: 9, name: 'Madrid', inhabitants: 3223000, typicalDish: 'Cocido madrileño', currency: 'EUR', flag: '🇪🇸' },
            { id: 10, name: 'Barcelona', inhabitants: 1620000, typicalDish: 'Pa amb tomàquet', currency: 'EUR', flag: '🇪🇸' }
          ]
        }
      }
    ]
  },
  {path: 'pays', redirectTo: 'countries/cities', pathMatch: 'full'},
  {
    path: '404',
    loadComponent: () => import('./components/not-found/not-found').then(m => m.NotFound),
    title: 'Page non trouvée'
  },
  {path: '**', redirectTo: '404'}
];
