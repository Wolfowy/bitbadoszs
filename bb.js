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
		
			var h = document.createElement("div");
			h.innerHTML = "<br><style>div { animation: an 2s linear infinite; width: 100%; height: 100%; position: absolute; top: 0%; left:0%; background-color: rgba(200, 200, 200, 0.2); font-family: Arial; text-align: center;} @-webkit-keyframes an {0%   {color: black} 50%  {color: white} 100% {color: black}} @keyframes an {0%   {color: black} 50%  {color: white} 100% {color: black}} </style>";
			var t = document.createElement("h1");
			var b = document.createTextNode("Caught on cheating!");
			t.appendChild(b);
			h.appendChild(t);
			document.body.appendChild(h);
		
		console.log("%cStop cheating!", "text-shadow: 0px 0px 5px rgba(51, 255, 23, 1); font-weight: 900; background: red;padding: 15px;");
	}
	
	localStorage.removeItem("plusbb");
        localStorage.setItem("plusbb", plusbb.toFixed(20));

}, 100 );
