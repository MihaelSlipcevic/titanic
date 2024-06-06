async function populate() {

	const requestURL = "https://mihaelslipcevic.github.io/my-repository/Titanic/titanic.json";

	const request = new Request(requestURL); 

	const response = await fetch(request);

	const spaceText = await response.text();

	const pOT = JSON.parse(spaceText);

	passegieri(pOT);	
}
function passegieri(obj){

	const section = document.querySelector('section');

	const people = obj.people;

	for(const person of people){

		const myH2 = document.createElement('h2');

		const myDiv1 = document.querySelector('div');

		const sect = document.createElement('section')

		const p1 = document.createElement('p');

		const p2 = document.createElement('p');

		const p3 = document.createElement('p');

		const p4 = document.createElement('p');

		const p5 = document.createElement('p');

		const p6 = document.createElement('p');

		const myDiv2 = document.createElement('div');

		p1.textContent = `Nome:${person.Name}`;

		p2.textContent = `Sesso :${person.Sex}`;

		p3.textContent = `Eta: ${person.Age}`;

		

		if(person.Embarked == 'S'){

			p4.textContent = 'Imbarcato: Southampton';

		}else if(person.Embarked == 'C'){

			p4.textContent = 'Imbarcato: Cherbourg';

		}else{

			p4.textContent = 'Imbarcato: Queenstown';

		}

		if(person.Survived == 0){

			p5.textContent = 'Vittima';

		}else{

			p5.textContent = 'Sopravisuto';

		}

		p6.textContent = `Classe: ${person.Pclass}`;

		myDiv2.classList.add('wP')

		myDiv1.appendChild(myDiv2);

		myDiv2.appendChild(p1);

		myDiv2.appendChild(p2);

		myDiv2.appendChild(p3);

		myDiv2.appendChild(p4);

		myDiv2.appendChild(p5);

		myDiv2.appendChild(p6);


	}

}

populate()