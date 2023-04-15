export interface UpdateTransactionModel {
    id: number,
    date: Date,
    type: string,
    amount: number,
    description: string,
    categoryId: number,
}