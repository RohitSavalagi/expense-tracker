import { Component } from '@angular/core';
import { ExpenseService } from '../services/expense.service';
import { IonButton, IonCard, IonCardContent, IonCardHeader, IonContent, IonHeader, IonInput, IonItem, IonLabel, IonList, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-expenses',
  templateUrl: './expense.page.html',
  imports: [
    IonCardContent,
    IonCardHeader,
    IonItem,
    IonList,
    IonButton,
    IonLabel,
    IonCard,
    IonContent,
    IonToolbar,
    IonTitle,
    IonInput,
    IonHeader,
    FormsModule,
    CommonModule,
  ]
})
export class ExpensesPage {

  expenses: any[] = [];

  title = '';
  amount = 0;

  constructor(
    private expenseService: ExpenseService
  ) {}

  ionViewWillEnter() {
    this.loadExpenses();
  }

  loadExpenses() {
    this.expenses =
      this.expenseService.getExpenses();
  }

  addExpense() {

    if (!this.title || !this.amount) {
      return;
    }

    this.expenseService.addExpense({
      id: Date.now(),
      title: this.title,
      amount: this.amount,
      date: new Date().toISOString()
    });

    this.title = '';
    this.amount = 0;

    this.loadExpenses();
  }

  deleteExpense(id: number) {
    this.expenseService.deleteExpense(id);
    this.loadExpenses();
  }

  get total() {
    return this.expenses.reduce(
      (sum, e) => sum + e.amount,
      0
    );
  }
}
