import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'expense',
    pathMatch: 'full',
  },
  {
    path: 'expense',
    loadComponent: () => import('./expense/expense.page').then( m => m.ExpensesPage)
  },
];
