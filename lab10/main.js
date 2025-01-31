function td(text) {
    let elem = document.createElement("td");
    elem.innerText = text;
    return elem;
}
function fillTable(tbody, doc, convertNumbers) {
    let publications = doc.childNodes[0].querySelectorAll("publication");
    temp = publications;
    publications.forEach(pub => {
        let country = pub.attributes["country"].value;
        let type = pub.querySelector("type").textContent;
        let theme = pub.querySelector("theme").textContent;
        let title = pub.querySelector("title").textContent;
        let frequency = pub.querySelector("frequency").textContent;
        let price = pub.querySelector("price").textContent;
        let subscription_index = pub.querySelector("subscription_index").textContent;

        let tr = document.createElement("tr");
        tr.appendChild(td(country));
        tr.appendChild(td(type));
        tr.appendChild(td(theme));
        tr.appendChild(td(title));
        tr.appendChild(td(frequency));
        if(convertNumbers) {
            tr.appendChild(td(numberToString(price).convertedInteger));
            tr.appendChild(td(numberToString(subscription_index).convertedInteger));
        }
        else {
            tr.appendChild(td(price));
            tr.appendChild(td(subscription_index));
        }
        tbody.appendChild(tr);
    });
}
$(document).ready(async function() {
    let xmlfile = await fetch("../lab8/subscriptions.xml").then(res => res.text());

    let parser = new DOMParser();
    let doc = parser.parseFromString(xmlfile, "text/xml");

    
    fillTable(originalTable, doc, false);
    fillTable(numbersTable, doc, true);
});

