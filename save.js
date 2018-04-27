setInterval(function() {
        if (localStorage.getItem("bb") !== null)
        {
            var bb = parseFloat(localStorage.getItem("bb"));
        } else {
            var bb = 0;
        }

        if (localStorage.getItem("plusbb") !== null)
        {
            var plusbb = parseFloat(localStorage.getItem("plusbb"));
        } else {
            var plusbb = 0.00000000000000000001;
        }

        if (localStorage.getItem("x") !== null){
            var x = parseFloat(localStorage.getItem("x"));
        } else {
            var x = 0;
        }
        localStorage.removeItem("x");
        localStorage.setItem("x", x.toFixed(20));
        localStorage.removeItem("plusbb");
        localStorage.setItem("plusbb", plusbb.toFixed(20));
        localStorage.removeItem("bb")
        localStorage.setItem("bb", bb.toFixed(20));
}, 100 );
