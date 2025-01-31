function td(text) {
    let elem = document.createElement("td");
    elem.innerText = text;
    return elem;
}
function fillTable(tbody, doc) {
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
        tr.appendChild(td(price));
        tr.appendChild(td(subscription_index));
        tbody.appendChild(tr);
    });
}
$(document).ready(async function() {
    let xmlfile = await fetch("../lab8/subscriptions.xml").then(res => res.text());
    let sortfile = await fetch("sort.xsl").then(res => res.text()); 
    let filterfile = await fetch("filter.xsl").then(res => res.text());

    let parser = new DOMParser();
    let doc = parser.parseFromString(xmlfile, "text/xml");
    let sortdoc = parser.parseFromString(sortfile, "text/xml"); 
    let filterdoc = parser.parseFromString(filterfile, "text/xml"); 

    let sortprocessor = new XSLTProcessor();
    sortprocessor.importStylesheet(sortdoc);
    let sorteddoc = sortprocessor.transformToFragment(doc, document);

    let filterprocessor = new XSLTProcessor();
    filterprocessor.importStylesheet(filterdoc);
    let filtereddoc = filterprocessor.transformToFragment(doc, document);
    
    fillTable(originalTable, doc);
    fillTable(sortedTable, sorteddoc);
    fillTable(filteredTable, filtereddoc);
});

