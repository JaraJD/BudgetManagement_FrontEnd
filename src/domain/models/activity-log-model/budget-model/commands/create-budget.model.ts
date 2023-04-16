export interface CreateBudgetModel {
    idUser : string,
    name : string,
    targetMonth : Date,
    balance : number,
    state : string
}