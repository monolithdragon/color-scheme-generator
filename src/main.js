import './component/dropdown';

const selectedMode = document.getElementById('dropdown-mode');
const colorsSection = document.querySelector('.colors');
const hexFooter = document.querySelector('.hex-footer');
const form = document.getElementById('color-form');

function renderColor(colors) {
	let boxes = '';
	let colorCode = '';

	colors.forEach(({ hex }) => {
		boxes += `<div style="background-color:${hex.value};"></div>`;
		colorCode += `<p>${hex.value}</p>`;
	});

	colorsSection.innerHTML = boxes;
	hexFooter.innerHTML = colorCode;
}

form.addEventListener('submit', (e) => {
	e.preventDefault();

	const data = new FormData(form);
	const color = data.get('color-picker').substring(1);
	const mode = selectedMode.textContent.toLowerCase();

	fetch(
		`https://www.thecolorapi.com/scheme?hex=${color}&mode=${mode}&count=6`,
		{
			headers: {
				'Content-Type': 'application/json',
			},
		}
	)
		.then((res) => res.json())
		.then((result) => {
			renderColor(result.colors);
		})
		.catch((err) => {
			console.log(err);
		});
});
