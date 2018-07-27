var resultDiv =  document.getElementById("result");
resultDiv.innerHTML = "<p>here inject javascript</p>";

/*var toggleButton = document.getElementById("toggleButton");
toggleButton.on("click",function () {
	console.log("button clicked");
	resultDiv.toggle(500);	
});*/

$(function(){
	$('#toggleButton').click(function(){
		$('#result').toggle(1000);
	});
});
