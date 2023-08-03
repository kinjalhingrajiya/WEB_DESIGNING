a = setInterval("test()", 650)
b = setInterval("test1()", 28)
c = setInterval("test2()", 400)
d = setInterval("test3()", 240)
x = 0;
y = 0;
z = 0;
e = 0;

h1 = document.querySelector('.count')
h2 = document.querySelector('.count1')
h3 = document.querySelector('.count2')
h4 = document.querySelector('.count3')

function test() {

    h1.innerHTML = ++x;
    if (x >= 18) {
        clearInterval(a)
    }
}

function test1() {
    h2.innerHTML = ++y;
    if (y >= 401) {
        clearInterval(b)
    }
}

function test2() {
    h3.innerHTML = ++z;
    if (z >= 30) {
        clearInterval(c)
    }
}

function test3() {
    h4.innerHTML = ++e;
    if (e >= 50) {
        clearInterval(d)
    }
}