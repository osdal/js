



function myFirstApp(name,  age)  {
	alert("Привет, меня зовут " + name + " и это моя первая программа");
	function showSkills() {
		let skills = ["HTML", "CSS", "Wordpress", "Photoshop", "Drupal"]

			for (let i = 0;  i < skills.length;   i++)  {
				document.write("Я владею " + skills[i] + "<br>")
			}
	}

	showSkills();



function checkage() {
	 let age = prompt("Введите возраст")
	 if (age > 18) {
	 	alert("Можете войти")
	 } else {
	 	alert("Вам нужно подрасти")
	 }
} 
checkage();


function calcPow(num)  {
	//написать функционал
	
	let num2 = num*num;
	alert(num + " в квадрате = " +num2);
 }
calcPow(4)
}

myFirstApp("Ivan", 32)

