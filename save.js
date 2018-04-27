setInterval(function() {
		if (localStorage.getItem("bb") !== null)
		{
			var bb = Number(localStorage.getItem("bb"));
		} else {
			var bb = 0;
		}

		if (localStorage.getItem("plusbb") !== null)
		{
			var plusbb = Number(localStorage.getItem("plusbb"));
		} else {
			var plusbb = 1;
		}

		if (localStorage.getItem("x") !== null){
			var x = Number(localStorage.getItem("bb"));
		} else {
			var x = 0;
		}
	localStorage.removeItem("x");
	localStorage.removeItem("plusbb");
	localStorage.removeItem("bb")
	localStorage.setItem("x", x);
	localStorage.setItem("bb", bb);
	localStorage.setItem("plusbb", plusbb);
}, 100 );
