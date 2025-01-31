$(document).ready(function() {
    let xmlfile = fetch("subscriptions.xml").then(res => res.text().then(txt => $("#xml").text(txt)));
    let dtdfile = fetch("subscriptions.dts").then(res => res.text().then(txt => $("#dtd").text(txt))); 
    let xsdfile = fetch("subscriptions.xsd").then(res => res.text().then(txt => $("#xsd").text(txt))); 
});
