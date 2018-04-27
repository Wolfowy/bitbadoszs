setInterval(function() {

	
	if (localStorage.getItem("plusbb") !== null)
	{
	    var plusbb = parseFloat(localStorage.getItem("plusbb"));
	} else {
 	   var plusbb = 0.00000000000000000001;
	}
	
	bb = bb + plusbb;
	x = x + plusbb;
	
	document.getElementById("miner").innerHTML = bb.toFixed(20) + " BitBadosz's"
	
	if(localStorage.getItem("ch") == 1){
		window.open(
  	'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  	'_blank' 
		);
		
		console.log("%cStop cheating!", "text-shadow: 0px 0px 5px rgba(51, 255, 23, 1); font-weight: 900; background: red;padding: 15px;");
	}
	
	localStorage.removeItem("plusbb");
        localStorage.setItem("plusbb", plusbb.toFixed(20));

}, 100 );
