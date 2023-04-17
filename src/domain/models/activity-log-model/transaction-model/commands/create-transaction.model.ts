export interface CreateTransactionModel {
    date: Date,
    type: string,
    amount: number,
    description: string,
    userId: string,
    categoryId: number,
    budgetId: number,

}