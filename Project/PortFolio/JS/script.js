body_tag = document.getElementById('body1');
header_tag = document.getElementById('header');

toggle2 = 1;

function bodycolor() {

    if (toggle2 == 1) {
        body_tag.style.background = "#000"
        body_tag.style.color = "#fff"
        header_tag.style.background = "#000";
        header_tag.style.color = "#fff";
        header_tag.style.borderRight = "0.5px solid gray";
        toggle2 = 0;
    } else if (toggle2 == 0) {
        body_tag.style.background = "#fff"
        header_tag.style.background = "#fff";
        body_tag.style.color = "#000"
        header_tag.style.borderRight = "none";
        toggle2 = 1;
    }
}

function menu1() {
    // header_tag.classList.add('menuright');

    // header_tag.style.display = "block"
    if (toggle2 == 1) {
        header_tag.style.left = "0px";
        header_tag.style.display = "block"
        toggle2--;
    } else if (toggle2 == 0) {
        header_tag.style.left = "-300px";
        toggle2++;
    }
}