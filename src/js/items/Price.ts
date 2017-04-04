export class Price {
    currency: string;
    amount: number;

    constructor(currency: string, amount: number) {
        this.currency = currency;
        this.amount = amount;
    }

    toString() {
        return this.currency + ' ' + this.amount;
    }
}