if (localStorage.getItem("bb") !== null)
{
    var bb = parseFloat(localStorage.getItem("bb"));
} else {
    var bb = 0;
}

if (localStorage.getItem("x") !== null){
    var x = parseFloat(localStorage.getItem("x"));
} else {
    var x = 0;
}
setInterval(function() {
        localStorage.removeItem("x");
        localStorage.setItem("x", x.toFixed(20));
        localStorage.removeItem("bb")
        localStorage.setItem("bb", bb.toFixed(20));
}, 500 );
