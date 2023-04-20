export interface CreateTransactionModel {
    date: string,
    type: string,
    amount: number,
    description: string,
    userId: string | null,
    categoryId: number,
    budgetId: number,

}