function showMenu(id) {
    document.getElementById(id).style.display = "block";
}

function hideMenu(id) {
    document.getElementById(id).style.display = "none";
}
function swap() {
    let tmp = img1.src;
    img1.src = img2.src;
    img2.src = tmp;
}
