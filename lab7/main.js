$(document).ready(function() {
    fetch("subscriptions.xml").then(res => res.text().then(txt => $("#xml").text(txt)));
});
