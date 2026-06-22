import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {

  private storageKey = 'expenses';

  getExpenses() {
    return JSON.parse(
      localStorage.getItem(this.storageKey) || '[]'
    );
  }

  addExpense(expense: any) {
    const expenses = this.getExpenses();

    expenses.unshift(expense);

    localStorage.setItem(
      this.storageKey,
      JSON.stringify(expenses)
    );
  }

  deleteExpense(id: number) {
    const expenses = this.getExpenses()
      .filter((e: any) => e.id !== id);

    localStorage.setItem(
      this.storageKey,
      JSON.stringify(expenses)
    );
  }
}
