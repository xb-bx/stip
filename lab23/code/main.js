function createOrder() {
    fetch("http://localhost:3000/api/orders", {
        method: "POST", 
        body: JSON.stringify({ dish: dish.options[dish.selectedIndex].innerText, count: Number(number.value)}),
    }).then(res => res.text().then(x => result.innerText = x));
}
