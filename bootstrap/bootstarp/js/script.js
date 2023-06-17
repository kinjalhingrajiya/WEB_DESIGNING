a = document.querySelector(".nb");
b = document.querySelector(".nb1")
c = document.querySelector(".nb2")
d = document.querySelector(".nb3")


function staters() {
    toggle = 0;
    if (toggle == 0) {
        a.style.display = "block";
        b.style.display = "none";
        toggle++;
    } else if (toggle == 1) {
        a.style.display = "none";
        toggle--;
    }
}

function salads() {
    toggle = 0;
    if (toggle == 0) {
        c.style.display = "block";
        b.style.display = "none";
        a.style.display = "none";
        toggle++;
    } else if (toggle == 1) {
        c.style.display = "none";
        toggle--;
    }
}

function specialty() {
    toggle = 0;
    if (toggle == 0) {
        d.style.display = "block";
        b.style.display = "none";
        a.style.display = "none";
        c.style.display = "none";
        toggle++;
    } else if (toggle == 1) {
        d.style.display = "none";
        toggle--;
    }
}

function show_all() {
    toggle = 0;
    if (toggle == 0) {
        b.style.display = "block";
        d.style.display = "none";
        a.style.display = "none";
        c.style.display = "none";
        toggle++;
    } else if (toggle == 1) {
        b.style.display = "none";
    }
}
e = document.querySelector(".speci");
f = document.querySelector(".speci1");
g = document.querySelector(".speci2");
h = document.querySelector(".speci3");
i = document.querySelector(".speci4");

function spec1() {
    toggle = 0;
    if (toggle == 0) {
        f.style.display = "block";
        e.style.display = "none"
        toggle++;
    } else if (toggle == 1) {
        f.style.display = "none";
        toggle--;
    }
}

function spec2() {
    toggle = 0;
    if (toggle == 0) {
        g.style.display = "block";
        e.style.display = "none";
        f.style.display = "none";
        toggle++;
    } else if (toggle == 1) {
        g.style.display = "none";
        toggle--;
    }
}

function spec3() {
    toggle = 0;
    if (toggle == 0) {
        h.style.display = "block";
        e.style.display = "none";
        f.style.display = "none";
        g.style.display = "none";
        toggle++;
    } else if (toggle == 1) {
        h.style.display = "none";
        toggle--;
    }
}

function spec4() {
    toggle = 0;
    if (toggle == 0) {
        i.style.display = "block";
        h.style.display = "none";
        e.style.display = "none";
        f.style.display = "none";
        g.style.display = "none";
        toggle++;
    } else if (toggle == 1) {
        i.style.display = "none";
        toggle--;
    }
}

function spec() {
    toggle = 0;
    if (toggle == 0) {
        e.style.display = "block";
        f.style.display = "none";
        g.style.display = "none";
        h.style.display = "none";
        i.style.display = "none";
        toggle++;
    } else if (toggle == 1) {
        e.style.display = "none";
    }
}
$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll > 250) {
        $(".navbar").css("background-color", "rgba(26, 24, 22, 0.85)");
    } else {
        $(".navbar").css("background-color", "transparent");
    }
})