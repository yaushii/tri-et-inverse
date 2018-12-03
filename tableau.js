var students = ["Alexandre","Béatrice","Benoît","Émeric","Florian","Gwenaëlle","Jérémy","Johan","Justine M","Justine P","Justine T","Kévin","Loïc","Mathieu","Matthias","Rémi","Samuel","Sébastien","Sullivan","Thomas","Tiffany","Valentin","Yann"];
students.sort();
console.log(students);

var tableau = document.querySelector("#tableau");
var btnsolver = document.querySelector("#btn-solver");

var tableau = document.querySelector("#tableau");

students.forEach(function(student) {
	tableau.innerHTML += student + "<br>";
})

btnsolver.addEventListener("click", solve);
function solve(event) {
	var reversed = students.reverse(); 
	console.log('reversed: ', reversed);
	//permet de vider le tableau précedent 
	tableau.innerHTML = "";
	reversed.forEach(function(student) {
		tableau.innerHTML += student + "<br>";
	})}



