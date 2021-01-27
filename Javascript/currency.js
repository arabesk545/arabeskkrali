class Currency {
    constructor(fsc, ssc) {
        this.fsc = fsc;
        this.ssc = ssc;
        this.url = "https://api.exchangeratesapi.io/latest?base=";
        this.amount = null;
    }

    exchange() {
        return new Promise((resolve, reject) => {
            fetch(this.url + this.fsc)
                .then(response => response.json())
                .then(data => {
                    const parity = data.rates[this.ssc];
                    const namount = this.amount;

                    let total = parity * namount;
                    resolve(total);
                })
                .catch(err => reject(new Error(err)));
        })
    }
    changeAmount(amount) {
        this.amount = amount;
    }
    changeFirst(f) {
        this.fsc = f;
    }
    changeSecond(s) {
        this.ssc = s;
    }
}