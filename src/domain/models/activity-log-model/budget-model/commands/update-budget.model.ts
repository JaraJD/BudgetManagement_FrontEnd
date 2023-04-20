export interface UpdateBudgetModel {
    id : number,
    name : string | null,
    targetMonth : string,
    balance : number,
    state : string | null
}