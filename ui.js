class UI {
    constructor(fsc,ssc) {
        this.fsc = fsc;
        this.ssc = ssc;

        this.outFirst = document.getElementById("outputFirst");
        this.outSecond = document.getElementById("outputSecond");
        this.outResult = document.getElementById("outputResult");
    }

    changeFirst() {
        this.outFirst.textContent = this.fsc.options[this.fsc.selectedIndex].textContent;
    }
    changeSecond() {
        this.outSecond.textContent = this.ssc.options[this.ssc.selectedIndex].textContent;
    }
    changeR(a) {
        this.outResult.value = a;
    }
}
