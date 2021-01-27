const amount = document.getElementById("amount");
const first = document.getElementById("firstCurrency");
const second = document.getElementById("secondCurrency");
const cur = new Currency("USD","TRY");
const ui = new UI(first,second);

x();

function x() {
    amount.addEventListener("input",exchange);

    first.onchange = function() {
        cur.changeFirst(first.options[first.selectedIndex].textContent);
        ui.changeFirst();
    }
    second.onchange = function() {
        cur.changeSecond(second.options[second.selectedIndex].textContent);
        ui.changeSecond();
    }
}

function exchange() {
    cur.changeAmount(amount.value);

    cur.exchange()
    .then(data => ui.changeR(data))
    .catch(err => console.error(err));
}