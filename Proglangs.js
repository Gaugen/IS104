//var språk = document.getElementById("språk");alert(språk);språk.style.color = "green";

function PrintToOutputBox(selectobj){
var e_proglangs = document.getElementById("proglangs");
var e_outputbox = document.getElementById("outputbox");
e_outputbox.innerHTML = "Du har valgt programeringsspråket" + e_proglangs.options[selectobj.selectedIndex]text;
}
//github.com/is104/