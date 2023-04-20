var output1 = document.getElementById("output1");
for (var i = 0; i <= 30; i++) {
    output1.innerHTML += i + "<br>";
}

var output2 = document.getElementById("output2");
for (var i = 0; i <= 40; i += 2) {
    output2.innerHTML += i + "<br>";
}

var output3 = document.getElementById("output3");
for (var i = 40; i >= 10; i--) {
    if (i % 3 === 0) {
        output3.innerHTML += i + "<br>";
    }
}