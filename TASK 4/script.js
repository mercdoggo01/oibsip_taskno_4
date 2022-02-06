    
    function onChange()
    {
         const selectedInput = document.getElementById('list');
         const valueInput = selectedInput.options[selectedInput.selectedIndex].value;
         if(valueInput=='sci')
         {
         window.location.href = "index2.html";
         }
    }
    
    function sin()
    {
	document.calcul.result.value=Math.sin(document.calcul.result.value);
	}

	function cos(){
	document.calcul.result.value=Math.cos(document.calcul.result.value);
	}

	function tan(){
	document.calcul.result.value=Math.tan(document.calcul.result.value);
	}

	function BACKSPC(){
	var a = document.calcul.result.value;
	document.calcul.result.value = a.substr(0, a.length-1);
	}

	function square(){
	document.calcul.result.value = Math.pow(document.calcul.result.value, 2);
	}

	function sqrt2(){
	document.calcul.result.value = Math.pow(document.calcul.result.value, 1/2);
	}

	function number(value){
	document.calcul.result.value += value;
	}

	function remv(){
	document.calcul.result.value=" ";
	}

	function equal(){
	document.calcul.result.value=eval(document.calcul.result.value);
	}

